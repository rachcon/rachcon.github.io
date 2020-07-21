<template>
  <div class="front-page">
    <h1>{{ msg }}</h1>
    <h3>Computer Engineering student at the University of Michigan</h3>
  
    <p>Please feel free to take a look at my <a href="./Rachel-Connolly-Resume.pdf" target="_blank">Resume</a>.</p>


    <div class="links">

      <a href="https://github.com/rachcon" target="_blank" rel="noopener" >
        <img v-bind:class="bounce" class="icon" @mouseover="hoverOver()" @mouseout="hoverOut()" alt= "Github: @rachcon" src= "../assets/GitHub-Logo.png">
      </a>

      <a href="https://www.linkedin.com/in/rachel-connolly-0797b9193/" target="_blank" rel="noopener">
        <img v-bind:class="bounce" class="icon" @mouseover="hoverOver()" @mouseout="hoverOut()" alt= "Linkedin" src= "../assets/linkedin-black.png">
      </a>

      <a v-bind:href="`mailto:` + 'rachcon@umich.edu'" target="_blank" rel="noopener">
        <img v-bind:class="bounce" class="icon" @mouseover="hoverOver()" @mouseout="hoverOut()" alt= "Email: rachcon@umich.edu" src= "../assets/emaili-icon.png">
      </a>

      <a href="https://www.instagram.com/noflashtravel" target="_blank" rel="noopener">
        <img v-bind:class="bounce" class="icon" @mouseover="hoverOver()" @mouseout="hoverOut()" alt= "Instagram: @noflashtravel" src= "../assets/glyph-logo.png">
      </a>

    </div>

    <footer>
        <p class="left-align">&copy; Rachel Connolly 2020</p>
    </footer>

  </div>
</template>

<script>

export default {
  name: 'Resume',
  props: {
    msg: String
  },
  data() {
    return {
      bounce: []
    }
  },
  methods: {
    hoverOver() {
      console.log('over');
      this.bounce = ['animate__animated', 'animate__bounce']
    },
    hoverOut() {
      console.log('out');
      this.bounce = []
    }
  },
}
</script>


<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
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
  color: var(--accent-color);
  font-weight: bold;
}

.icon {
  width: 2.5%;
  padding:1%;
  margin: 20px 0 0 0;
}
.icon:hover{
  width: 3%;
  margin: 0 0 0 0;
}

.links {
  align-content: center;
  display: inline;
  flex-wrap: flex;
}

footer {
  text-align: left;
  border: 4px;
  display: block;
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
