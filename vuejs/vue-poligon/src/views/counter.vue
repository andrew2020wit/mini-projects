<template>
  <div>
    <div>
      <b-card title="Counter" style="max-width: 20rem;" class="mb-2">
        <b-card-text>
          <p>{{ count }}</p>
        </b-card-text>

        <b-button variant="danger" @click="decrement"> | ---- | </b-button>
        <b-button variant="success" @click="increment"> | ++++ | </b-button>
      </b-card>
    </div>

    <p>
      <!-- <b-button variant="danger" @click="decrement"> | ---- | </b-button>
      <b-button variant="success" @click="increment"> | ++++ | </b-button> -->
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
