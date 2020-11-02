<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/message">message</router-link> |
      <router-link to="/user-input">user-input</router-link> |
      <router-link to="/route-params/">/route-params</router-link>
    </div>
    <router-view />
  </div>
</template>

<style></style>
