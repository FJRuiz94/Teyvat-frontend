<template>
  <div class="navbar">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="../assets/logo.png" alt="">
      </router-link> 
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
</style>