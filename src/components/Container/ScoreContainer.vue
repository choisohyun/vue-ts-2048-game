<template>
  <div class="container">
    <div class="score-title">{{}}</div>
    <div class="score">{{}}</div>
  </div>
</template>

<script>
import { Vue, Prop } from "vue-property-decorator";

export default class ScoreContainer extends Vue {}
</script>

<style scoped></style>
