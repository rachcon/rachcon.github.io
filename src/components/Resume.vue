<template>
  <div class="front-page">
    <h1>{{ msg }}</h1>
    <h3>Computer Engineering student at the University of Michigan</h3>
  
    <h3>Please feel free to take a look at my <a href="../static/Rachel-Connolly-Resume.pdf" download="assets.zip">Resume</a>.</h3>


    <div class="links">

      <a href="https://github.com/rachcon" target="_blank" rel="noopener" >
        <img @mouseover="hoverOver(this)" @mouseout="hoverOut(this)" class="icon" alt= "Github" src= "../assets/GitHub-Logo.png">
      </a>

      <a href="https://www.linkedin.com/in/rachel-connolly-0797b9193/" target="_blank" rel="noopener">
        <img onmouseover="hoverOver(this)" onmouseout="hoverOut(this)" class="icon" alt= "Linkedin" src= "../assets/linkedin-black.png">
      </a>

      <a href="" target="_blank" rel="noopener">
        <img onmouseover="hoverOver(this)" onmouseout="hoverOut(this)" class="icon" alt= "Email" src= "../assets/emaili-icon.png">
      </a>

      <a href="https://www.instagram.com/noflashtravel" target="_blank" rel="noopener">
        <img onmouseover="hoverOver(this)" onmouseout="hoverOut(this)" class="icon" alt= "Instagram" src= "../assets/glyph-logo.png">
      </a>

    </div>


  </div>
</template>

<script>

export default {
  name: 'Resume',
  props: {
    msg: String
  },
  methods: {
    hoverOver(img) {
        img.style.height = "200%";
        img.style.width = "200%";
    },
    hoverOut(img) {
        img.style.height = "50%";
        img.style.width = "50%";
    },
    hoverTimeOut(img) {
        setTimeout(() => { 
        console.log('out');
            img.icon = []
      }, 1000);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 210%;
  color: black;
}
h3 {
  font-size: 125%;
  margin: 10px 0 2px 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #690e0e;
  font-weight: bold;
}
.icon {
  width: 2.5%;
  padding:1%;
  margin: 15px 0 0 0;
}
.links {
  align-content: center;
  display: inline;
  flex-wrap: flex;
}
front-page {

  margin: 0 auto;

  position: absolute;

  margin-left:auto;
  margin-right:auto;
  animation-name: fade;
  animation-duration: 0.7s;
  animation-timing-function: ease-out;
  animation-delay: 0;
  animation-direction: alternate;
  animation-fill-mode: forwards;
  animation-play-state: running;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

@keyframes fade {
  0% {
    opacity: 0%;
  }
  50% {
    opacity: 50%;
  }
  100% {
    opacity: 100%
  }
}
</style>
