<template>
<div class="allBuilds" :style="{'background-image':'url(img/genshinFondo.jpg)', 'background-size': 'cover'}">
<div class="builds-container" >
  <div class="btn-container">
    <router-link to='/builds/newBuild'>
      <button class="button is-light">
      + Create New-Build
      </button>
    </router-link>
  </div>

  <BuildsWall />
</div>
</div>
</template>

<script>

import BuildsWall from '@/components/BuildsWall'

export default {
name: 'Builds',
components: {
  BuildsWall,
  async beforeMount(){
    try{
      this.builds = await this.$api.builds.list()
    } catch (error){
      alert(error.message)
    }
  }
}


}
</script>

<style>
.allBuilds{
  height: 100%;
}
.builds-container{
  height:90vh;
  width:75vw;
  margin-left: auto;
  margin-right: auto;
}
.btn-container{
  display: flex;
  justify-content: center;
  padding:15px
}
.button{
  display: flex;
  justify-content: center;
}
</style>