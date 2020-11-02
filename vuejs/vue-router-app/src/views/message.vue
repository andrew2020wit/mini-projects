<template>
  <div style="padding: 1rem">
    <h3>Message component</h3>
    <p v-bind:title="title1">
      {{ message1 }}
    </p>
    <ol>
      <li v-for="el in arrOfObj" :key="el.id">{{ el.name }}</li>
    </ol>
    <ol>
      <li v-for="el in arr" :key="el">{{ el }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "MessageComponent",
  data: function() {
    return {
      message1: "data-string-variable",
      title1: "this is title1",
      arr: [1, 2, "fdsf", "fdsfsdfd", 44, 464],
      arrOfObj: [
        { id: 1, name: "jon" },
        { id: 2, name: "boris" },
      ],
    };
  },
};
</script>

<style scoped>
* {
  background-color: bisque;
}
</style>
