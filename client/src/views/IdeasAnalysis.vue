<template>
  <div class="about">
    <h1>Ideas analysis</h1>
    <div>
      <vue-dropzone
        id="dropzone"
        :options="dropzoneOptions"
        v-on:vdropzone-success="onUploadSuccess"
        v-on:vdropzone-removed-file="onRemovedFile"
        >
      </vue-dropzone>
    </div>
    <div>
      <button @click='resetDocument'>Reset</button>
      <br />
      Number of words<input v-model='numberOfWords' type="number" min="1">
      Number of topics<input v-model='numberOfTopics' type="number" min="1">
      <br />
      <button @click='generateTopics'>Generate topics</button>
    </div>
    <div>
      <TopicItemComponent :key='key' v-for='(topic, key) in topics' :words='topic.words' :ideas='topic.ideas'></TopicItemComponent>
    </div>
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone';
import axios from 'axios';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';
import TopicItemComponent from '../components/TopicItemComponent';

export default {
  components: {
    vueDropzone: vue2Dropzone,
    TopicItemComponent: TopicItemComponent,
  },
  data: () => {
    return {
      values: new Map(),
      dropzoneOptions: {
        url: 'http://localhost:3000/upload',
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        addRemoveLinks: true,
      },
      topics: [],
      numberOfWords: 10,
      numberOfTopics: 3,
    }
  },
  methods: {
    onUploadSuccess (file, response) {
      this.values.set(file.upload.uuid, response);
    },
    onRemovedFile (file) {
      this.values.delete(file.upload.uuid);
    },
    resetDocument () {
      this.values = new Map();
      this.topics = [];
    },
    async generateTopics() {
      let ideas = [];
      for(const [,values] of this.values) {
        ideas = ideas.concat(values);
      }
      this.topics = (await axios.post('http://localhost:3000/lda', {
        "documents": ideas,
        "words": this.numberOfWords,
        "topics": this.numberOfTopics,
      })).data;
    }
  }
};
</script>