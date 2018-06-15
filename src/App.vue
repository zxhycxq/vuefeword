<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './Components/Footer'

export default {
  components: {Footer},
  name: 'App'
}
</script>

<style>
  html,body{
    width: 100%;
    height: 100%;
    background-color:lightcyan;
    overflow: hidden;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
