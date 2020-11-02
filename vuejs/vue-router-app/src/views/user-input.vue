<template>
  <div style="padding: 1rem">
    <h3>UserInputComponent</h3>
    <p><button v-on:click="click1(`click!`)">click! to console</button></p>
    <p><input v-model="message" /></p>
  </div>
</template>

<script>
export default {
  name: "UserInputComponent",
  data: function() {
    return {
      message: "v-model1",
    };
  },
  methods: {
    click1: function(x) {
      console.log(x, this.message);
    },
  },
};
</script>

<style scoped>
* {
  background-color: aqua;
}
</style>
