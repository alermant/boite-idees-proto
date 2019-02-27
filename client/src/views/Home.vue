<template>
  <div class="home">
    <HomeComponent/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomeComponent from "@/components/HomeComponent.vue"; // @ is an alias to /src

@Component({
  components: {
    HomeComponent
  }
})
export default class Home extends Vue {}
</script>

<style>
.home .block-intro {
  width: 100%;
  max-height: 550px;
}
.home .block-intro .bkg-intro {
  width: 100%;
  height: 550px;
  background-image: url("../assets/baiintroidea.jpg");
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
.home .block-intro .block-text {
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
  color: white;
}
.home .block-intro .block-text .title {
  font-size: 75px;
}
.home .block-intro .block-text .subtitle {
  font-size: 30px;
  margin-top: 25px;
}

.home .block-avis {
  width: 100%;
}
.home .block-avis .avis {
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
}
.home .block-avis .avis.grey {
  background-color: #f4f4f4;
}
.home .block-avis .avis .picture {
  width: 300px;
  height: 300px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 90px;
}
.home .block-avis .avis .block-text {
  text-align: left;
  width: 660px;
}
.home .block-avis .avis .block-text .soavis {
  font-size: 2.4rem;
}
.home .block-avis .avis .block-text .auteur {
  margin-top: 30px;
  font-weight: 500;
  font-size: 1.8rem;
  color: rgb(102, 102, 102);
}
.home .block-avis .avis .block-text .poste {
  display: block;
  font-size: 1.52rem;
  color: rgb(102, 102, 102);
}
.home .block-avis .avis.one .picture {
  background-image: url("../assets/personne1.png");
}
.home .block-avis .avis.two .picture {
  background-image: url("../assets/personne2.png");
}
.home .block-avis .avis.two .picture {
  background-image: url("../assets/personne2.png");
  margin-right: 0px;
  margin-left: 90px;
}
.home .block-avis .avis.three .picture {
  background-image: url("../assets/personne3.png");
}
</style>
