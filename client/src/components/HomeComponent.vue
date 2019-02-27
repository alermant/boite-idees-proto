<template>
  <div class="block-intro">
    <div class="bkg-intro"></div>
    <div class="block-text">
      <div class="title">Vous allez adorer faire
        <br>des réunions
      </div>
      <div
        class="subtitle"
      >Bai est simple à utiliser et vous permet de travailler<br>intelligemment en équipe.</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HomeComponent extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
