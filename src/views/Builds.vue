<template>
<div class="builds-container">
  <router-link to='/builds/newBuild'>
    <button class="button is-light">
    + Create New-Build
  </button>
  </router-link>
  <BuildsWall />
</div>

</template>

<script>

import BuildsWall from '@/components/BuildsWall'

export default {
name: 'Builds',
components: {
  BuildsWall
}


}
</script>

<style>

</style>