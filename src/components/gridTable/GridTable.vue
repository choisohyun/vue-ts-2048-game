<template>
  <!--  <grid-item />-->
  <div class="grid-container">
    <div v-for="(item, idx) in rangeItem" :key="idx">
      {{ item }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import GridItem from "@/components/gridTable/GridItem.vue";

@Component({
  components: { GridItem },
})
export default class GridTable extends Vue {
  get rangeItem() {
    return Array.from({ length: 16 }, (d, i) => i + 1);
  }
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-rows: repeat(4, 50px);
  grid-template-columns: repeat(4, 50px);
}
</style>
