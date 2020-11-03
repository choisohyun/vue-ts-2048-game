<template>
  <div class="container">
    <div class="score-title">{{ title }}</div>
    <div class="score">{{ score }}</div>
  </div>
</template>

<script lang="ts">
import { Prop, Component } from "vue-property-decorator";
import Vue from "vue";

@Component
export default class ScoreContainer extends Vue {
  @Prop({ default: "" }) title!: string;
  @Prop({ default: 0 }) score!: number;
}
</script>

<style scoped>
.container {
  background-color: #ffe4c4;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-weight: bold;
}
.score-title {
  font-size: 1.8rem;
}
.score {
  font-size: 1.6rem;
}
</style>
