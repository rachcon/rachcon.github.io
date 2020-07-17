<template>
  <div id="app">
    <img class="profile" alt="Rachel profile" src="./assets/profile2.jpg">
    <Resume msg="Rachel Connolly"/>
    
  </div>
</template>

<script>
import Resume from './components/Resume.vue'

export default {
  name: 'App',
  components: {
    Resume
  }
  
}
</script>

<style>

body {
  background-color: #fffae8;
  --accent-color: #690e0e;
}
#app {
  font-family: serif, Georgia;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #502c2c;
  margin-top: 60px;
}
.profile {
  border-radius: 50%;
  display: block;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 220px;
  border: 15px solid var(--accent-color);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
