<template>
  <div id="app">
    <div v-bind:class="`block1`">
      <Introduction />
    </div>
  </div>
</template>

<script>
import Introduction from "./components/introduction/introduction";

export default {
  name: "App",
  components: {
    Introduction,
  },
};
</script>

<style>
.block1 {
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
}
</style>
