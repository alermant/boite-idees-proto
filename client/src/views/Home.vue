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
</style>
