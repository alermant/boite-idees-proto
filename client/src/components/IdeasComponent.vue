<template>
  <div>
    <vs-table max-items="3" pagination :data="ideas">
      <template slot="header">
        <h3>
          Ideas
        </h3>
      </template>
      <template slot="thead">
        <vs-th>
          Content
        </vs-th>
      </template>

      <template slot-scope="{data}">
        <vs-tr :key="indextr" v-for="(idea, indextr) in data" >
          <vs-td :data="idea">
            {{idea}}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>

</template>

<script lang="ts">
import {Prop, Vue, Component} from 'vue-property-decorator';
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
Vue.use(Vuesax)

@Component
export default class IdeasComponent extends Vue {
  @Prop() ideas: any;
}

</script>

<style scoped>
</style>
