<template>
  <div class="about">
    <div class="block-intro">
      <div class="bkg-intro"></div>
      <div class="block-text">
        <div class="title">Vos idées</div>
        <div class="subtitle">Bai est la pour vous aider.</div>
      </div>
    </div>
    <div class="form-block">
      <vue-dropzone
        id="dropzone"
        :options="dropzoneOptions"
        v-on:vdropzone-success="onUploadSuccess"
        v-on:vdropzone-removed-file="onRemovedFile"
      ></vue-dropzone>
    </div>
    <div class="form-two">
      <div class="field one">
        <span>Nombre de mots</span>
        <input v-model="numberOfWords" type="number" min="1">
      </div>
      <div class="field two">
        <span>Nombre de sujets</span>
        <input v-model="numberOfTopics" type="number" min="1">
      </div>
      <div class="block-btn">
        <button @click="generateTopics">Génerer un sujet</button>
        <button @click="resetDocument">Reinitialiser</button>
      </div>
    </div>
    <div>
      <TopicItemComponent
        :key="key"
        v-for="(topic, key) in topics"
        :words="topic.words"
        :ideas="topic.ideas"
      ></TopicItemComponent>
    </div>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import axios from "axios";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import TopicItemComponent from "../components/TopicItemComponent";

export default {
  components: {
    vueDropzone: vue2Dropzone,
    TopicItemComponent: TopicItemComponent
  },
  data: () => {
    return {
      values: new Map(),
      dropzoneOptions: {
        url: "http://localhost:3000/upload",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        addRemoveLinks: true
      },
      topics: [],
      numberOfWords: 10,
      numberOfTopics: 4
    };
  },
  methods: {
    onUploadSuccess(file, response) {
      this.values.set(file.upload.uuid, response);
    },
    onRemovedFile(file) {
      this.values.delete(file.upload.uuid);
    },
    resetDocument() {
      this.values = new Map();
      this.topics = [];
    },
    async generateTopics() {
      let ideas = [];
      for (const [, values] of this.values) {
        ideas = ideas.concat(values);
      }
      this.topics = (await axios.post("http://localhost:3000/lda", {
        documents: ideas,
        words: this.numberOfWords,
        topics: this.numberOfTopics
      })).data;
    }
  }
};
</script>

<style>
.about {
  padding-bottom: 50px;
}
.about .block-intro {
  width: 100%;
  max-height: 550px;
}
.about .block-intro .bkg-intro {
  width: 100%;
  height: 550px;
  background-image: url("../assets/baiintrohome.jpg");
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
.about .block-intro .block-text {
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
  color: white;
}
.about .block-intro .block-text .title {
  font-size: 75px;
}
.about .block-intro .block-text .subtitle {
  font-size: 30px;
  margin-top: 25px;
}
.about .form-block .vue-dropzone {
  background-color: #0f92dd;
  border: none;
}
.about .form-block .vue-dropzone .dz-message {
  color: white;
  font-size: 20px;
}

.about .form-two {
  width: 500px;
  margin: auto;
  margin-top: 30px;
}
.about .form-two .field {
  font-size: 20px;
  display: block;
  margin-top: 30px;
}
.about .form-two .field.two {
}
.about .form-two span {
  font-size: 20px;
  font-weight: 600;
}
.about .form-two input {
  font-size: 20px;
  display: block;
  margin: auto;
  margin-top: 15px;
  border-radius: 25px;
  border: 1px solid #0f92dd;
  height: 35px;
  width: 300px;
  padding-left: 10px;
}
.about .form-two .block-btn {
  margin-top: 50px;
}
.about .form-two .block-btn button {
  border-radius: 25px;
  background-color: #0f92dd;
  color: white;
  height: 50px;
  width: 250px;
  font-size: 20px;
  border: 1px solid #0f92dd;
  transition: 0.5s;
  cursor: pointer;
}
.about .form-two .block-btn button:nth-child(1):hover {
  background-color: white;
  color: #0f92dd;
}
.about .form-two .block-btn button:nth-child(2) {
  background-color: white;
  color: #0f92dd;
  width: 200px;
  border: 1px solid #0f92dd;
  margin-left: 30px;
}
.about .form-two .block-btn button:nth-child(2):hover {
  background-color: #0f92dd;
  color: white;
}
.block-result {
  margin-top: 50px;
}

.about .vs-con-table .header-table {
  padding-left: 20px;
  padding-top: 15px;
}
.fa-smile,
.fa-meh {
  font-size: 40px;
  margin-bottom: 15px;
  color: #0f92dd;
}
.dz-remove {
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 90%;
}
</style>
