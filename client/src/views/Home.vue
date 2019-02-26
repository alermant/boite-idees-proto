<template>
  <div class="home">
    <HomeComponent/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeComponent from '@/components/HomeComponent.vue'; // @ is an alias to /src

@Component({
  components: {
    HomeComponent,
  },
})
export default class Home extends Vue {}
</script>
