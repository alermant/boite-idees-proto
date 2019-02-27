<template>
  <div class="pagehome">
    <div class="block-intro">
      <div class="bkg-intro"></div>
      <div class="block-text">
        <div class="title">Vous allez adorer faire
          <br>des réunions
        </div>
        <div class="subtitle">Bai est simple à utiliser et vous permet de travailler
          <br>intelligemment en équipe.
        </div>
      </div>
    </div>
    <div class="block-avis">
      <div class="avis grey one">
        <div class="picture"></div>
        <div class="block-text">
          <div
            class="soavis"
          >"Avec le brainstorm Bai, on fait du management visuel digitalisé. En un mois, nous avons résolu 80% de nos irritants."</div>
          <div class="auteur">Jean-Baptiste Dupont</div>
          <div class="poste">Responsable de l’excellence Opérationnelle</div>
        </div>
      </div>
      <div class="avis two">
        <div class="block-text">
          <div
            class="soavis"
          >"D'un point de vue pédagogique, Bai apporte vraiment une interaction et une communication avec l'intégralité de la promotion."</div>
          <div class="auteur">Clément Dubois</div>
          <div class="poste">Responsable pédagogique</div>
        </div>
        <div class="picture"></div>
      </div>
      <div class="avis grey three">
        <div class="picture"></div>
        <div class="block-text">
          <div
            class="soavis"
          >"Avec Bai, j'ai autant de plaisir à préparer les formations, qu'à les animer et qu'à les suivre ensuite."</div>
          <div class="auteur">Dominique Dupuits</div>
          <div class="poste">Consultant indépendant</div>
        </div>
      </div>
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
