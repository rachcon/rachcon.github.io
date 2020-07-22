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
  background-color: #ffe8fb73;
  --accent-color: #4b0547f6;
}
#app {
  font-family: serif, Georgia;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #502c2c;
  margin-top: 2%;
  min-height: 95vh;
 
  position: relative;
}
#content-wrap {
  padding-bottom: 2.5rem;    /* Footer height */
}
.profile {
  border-radius: 15%;
  display: block;
  margin-top: 4%;
  margin-left: auto;
  margin-right: auto;
  width: 15%;
  border: 15px solid var(--accent-color);
}



.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
