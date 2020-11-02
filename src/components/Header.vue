<template>
  <header>
    <h1 class="title">2048</h1>
    <div class="score-container">
      <score-container />
    </div>
  </header>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import ScoreContainer from "@/components/Container/ScoreContainer";

@Component({
  components: {
    ScoreContainer,
  },
})
export default class Header extends Vue {}
</script>

<style scoped></style>
