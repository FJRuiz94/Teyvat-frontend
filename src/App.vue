<template>
  <div id="app">
    <MainNav/>
    <router-view/>
  </div>
</template>


<script>
import MainNav from '../src/components/MainNav.vue'

export default {
  name: "App",
  data(){
    return {

    }
  },
  components:{
    MainNav
  }
}
</script>