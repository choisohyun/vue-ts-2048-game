<template>
  <div>
    <h1 class="title">2048</h1>
    <div class="score-container">
      <score-container
        v-for="(item, idx) in scoreData"
        :key="idx"
        :title="item.title"
        :score="item.score"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ScoreContainer from "@/components/Container/ScoreContainer.vue";

@Component({
  components: {
    ScoreContainer
  }
})
export default class Header extends Vue {
  private scoreData = [
    { title: "SCORE", score: 0 },
    { title: "BEST", score: 0 }
  ];
}
</script>

<style scoped></style>
