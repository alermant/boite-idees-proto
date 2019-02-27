<template>
  <div>
    <vs-row style="margin-top: 5%;">
      <vs-col class='wordcloud' vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
        <vue-word-cloud :words="wordCloudData">
          <template slot-scope="{text, weight}">
            <div :title="weight" style="cursor: pointer;">
              {{ text }}
            </div>
          </template>
        </vue-word-cloud>
      </vs-col>
      <vs-col class='sentiments' vs-type="flex" vs-justify="right" vs-align="right" vs-w="6">
        <p>Sentiment analysis:</p>
        <IdeasComponent :ideas="ideas"></IdeasComponent>
      </vs-col>
    </vs-row>
    <div style="clear: both;"></div>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import VueWordCloud from 'vuewordcloud';
import axios from 'axios';
import * as randomcolor from 'randomcolor';
import IdeasComponent from './IdeasComponent.vue';
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
Vue.use(Vuesax)

@Component({
  components: {
    [VueWordCloud.name]: VueWordCloud,
    IdeasComponent: IdeasComponent,
  }
})

export default class TopicItemComponent extends Vue {
  @Prop() words: any;
  @Prop() ideas: any;

  sentiments =  []

  mounted () {
    this.getSentiments()
  }


  async getSentiments() {
    this.sentiments =  (await axios.post('http://localhost:3000/sentiment', {
      "documents": [this.ideas.join('')]
    })).data;
  }

  get wordCloudData () {
    const data = [];
    for(const word of this.words) {
      data.push({text: word.term, weight: word.probability, color: randomcolor()})
    }
    return data;
  }

}
</script>

<style scoped>
</style>
