<template>
  <div>
    <header></header>
    <grid-item></grid-item>
    <footer></footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Header from "@/components/Header.vue";
import GridItem from "@/components/GridTable/GridItem.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    GridItem,
    Footer,
  },
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
