<template>
  <div>
    <p>Counter: {{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: {},
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>

<style scoped></style>
