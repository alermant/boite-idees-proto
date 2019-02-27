<template>
  <div class="block-result">
    <div style="float: left;width: 400px; height: 400px;text-align: center;">
      <vue-word-cloud :words="wordCloudData">
        <template slot-scope="{text, weight}">
          <div :title="weight" style="cursor: pointer;">{{ text }}</div>
        </template>
      </vue-word-cloud>
    </div>
    <div style="float: right;width: calc(100% - 400px);height: 400px;text-align: center;">
      <div v-if="sentiments[0]">
        <i v-if="sentiments[0].score > 0" class="far fa-smile"></i>
        <i v-else-if="sentiments[0].score < 0" class="far fa-frown"></i>
        <i v-else class="far fa-meh"></i>
      </div>
      <IdeasComponent :ideas="ideas"></IdeasComponent>
    </div>
    <div style="clear: both;"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VueWordCloud from "vuewordcloud";
import axios from "axios";
import * as randomcolor from "randomcolor";
import IdeasComponent from "./IdeasComponent.vue";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
Vue.use(Vuesax);

@Component({
  components: {
    [VueWordCloud.name]: VueWordCloud,
    IdeasComponent: IdeasComponent
  }
})
export default class TopicItemComponent extends Vue {
  @Prop() words: any;
  @Prop() ideas: any;

  sentiments = [];

  mounted() {
    this.getSentiments();
  }

  async getSentiments() {
    this.sentiments = (await axios.post("http://localhost:3000/sentiment", {
      documents: [this.ideas.join("")]
    })).data;
  }

  get wordCloudData() {
    const data = [];
    for (const word of this.words) {
      data.push({
        text: word.term,
        weight: word.probability,
        color: randomcolor()
      });
    }
    return data;
  }
}
</script>

<style scoped>
</style>
