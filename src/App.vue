<template>
  <div id="app">
    <header-item></header-item>
    <grid-table></grid-table>
    <footer-item></footer-item>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import HeaderItem from "@/components/HeaderItem.vue";
import GridTable from "@/components/GridTable/GridTable.vue";
import FooterItem from "@/components/FooterItem.vue";

@Component({
  components: {
    HeaderItem,
    GridTable,
    FooterItem
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
