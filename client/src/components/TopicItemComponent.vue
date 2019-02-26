<template>
  <div>
    <div style="float: left;width: 400px; height: 400px;text-align: center;">
      <vue-word-cloud :words="wordCloudData">
        <template slot-scope="{text, weight}">
          <div :title="weight" style="cursor: pointer;">
            {{ text }}
          </div>
        </template>
      </vue-word-cloud>
    </div>
    <div style="float: right;width: calc(100% - 400px);height: 400px;text-align: center;">
      Sentiment analysis:
    </div>
    <div style="clear: both;"></div>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import VueWordCloud from 'vuewordcloud';
import * as randomcolor from 'randomcolor';

@Component({
  components: {
    [VueWordCloud.name]: VueWordCloud,
  }
})
export default class TopicItemComponent extends Vue {
  @Prop() words: any;

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
