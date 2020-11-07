<template>
  <div>
    <h3>State Viewer</h3>
    <b-tabs content-class="mt-3">
      <b-tab title="Raw viewer" active
        ><pre style="margin: 2rem">{{ $store.state }}</pre></b-tab
      >
      <b-tab title="Second"><p>I'm the second tab</p></b-tab>
    </b-tabs>
  </div>
</template>
