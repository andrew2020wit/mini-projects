<template>
  <div>
    <h2>Introduction component</h2>
    <div>
      <MessageComponent />
      <UserInputComponent />
    </div>
  </div>
</template>

<script>
import MessageComponent from "./message";
import UserInputComponent from "./user-input";
export default {
  name: "Introduction",
  components: {
    MessageComponent,
    UserInputComponent,
  },
};
</script>

<style scoped></style>
