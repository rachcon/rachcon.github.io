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
  border: 15px solid #690e0e;
}



</style>
