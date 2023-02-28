<template>
  <container class="container">
    <router-view />
  </container>
</template>

<script>

export default {
  name: "app",

};
</script>

<style lang="scss">
body {
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.42;
  -webkit-font-smoothing: antialiased;
  font-weight: 300;
  background: #f5f5f5;
}

.container {
  width: 600px;
  margin: 0 auto;
  display: block;
}

ul {
  margin: 0;
  padding: 0;

  li {
    list-style: none;
  }
}
</style>
