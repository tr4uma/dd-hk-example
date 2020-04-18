<template>
  <div id="app">
    <case-list />
  </div>
</template>

<script>
import CaseList from './components/CaseList.vue'

export default {
  name: 'App',
  components: {
    CaseList
  }
}
</script>

<style>
html {
  width: 100%;
  height: 100%;
  display: flex;
}

body {
  flex: 1;
  display: flex;
  flex-direction: column;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex: 1;
  flex-direction: column;
}
</style>
