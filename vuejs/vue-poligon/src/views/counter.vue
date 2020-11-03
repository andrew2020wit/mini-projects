<template>
  <div>
    <p>Counter: {{ count }}</p>
    <p>
      <b-button variant="danger" @click="decrement"> | ---- | </b-button>
      <b-button variant="success" @click="increment"> | ++++ | </b-button>
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
