<template>
  <div class="navbar">
    <div class="navbar-brand" id="top">
      <router-link class="navbar-item" to="/">
        <img src="../assets/logo.png" alt="">
      </router-link> 
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <router-link class="navbar-item" to="/">Home</router-link> 
      
            <router-link class="navbar-item" to="/world">World</router-link>

            <router-link class="navbar-item" to="/characters">Characters</router-link>

            <router-link class="navbar-item" to="/builds">Builds</router-link>
      
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>
      
              <div class="navbar-dropdown">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>
      </div>
        <!-- <router-link class="navbar-item" to="/">Home</router-link> 
        <router-link class="navbar-item" to="/world">World</router-link> 
        <router-link class="navbar-item" to="/characters">Characters</router-link>
        <router-link class="navbar-item" to="/builds">Builds</router-link> -->
    </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link> 
        <router-link class="navbar-item" to="/world">World</router-link> 
        <router-link class="navbar-item" to="/characters">Characters</router-link>
        <router-link class="navbar-item" to="/builds">Builds</router-link>
      </div>
    </div>
      
      
    </div>
</template>



<script>

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

export default {
  name: 'MainNav',
}
</script>

<style>
.navbar{
  height: 10vh;
  background-color:rgb(82, 82, 253);
  color:white;
}
.navbar-start a{
  color:white
}
.navbar-brand img{
  max-height: 3.5rem;
}
.navbar-burger{
  position: absolute;
  margin-left:0;
  right:25px;
  width:auto
}
.is-hoverable{
  display: none !important;
}
.navbar-burger span{
  left: calc(50% - -20px);
}
</style>