<template>
  <grid-item/>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import GridItem from "@/components/GridTable/GridItem.vue";

@Component({
  components: {GridItem}
})
export default class GridTable extends Vue {}
</script>

<style scoped></style>
