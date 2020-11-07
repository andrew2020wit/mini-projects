<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">Vue - Poligon</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    </b-navbar>

    <Navigation />

    <router-view />
  </div>
</template>
<script>
import Navigation from "./router/navigation";
export default {
  components: { Navigation },
};
</script>
<style></style>
