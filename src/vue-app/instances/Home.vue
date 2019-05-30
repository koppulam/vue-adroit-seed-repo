<template>
  <div class="home">
    <Helloworld></Helloworld>
  </div>
</template>

<script>
import Helloworld from '../components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    Helloworld
  }
}
</script>

<style>
.home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
