<template>
  <div class="column">
    <CharacterBuild
      v-for="item in builds"
      :value="item"
      :key="item._id" />
  </div>
</template>

<script>

import CharacterBuild from '@/components/partials/CharacterBuild'

export default {
  name: 'BuildsWall',
  components: {
    CharacterBuild
  },
  data(){
    return {
      builds: []
    }
  },
  async beforeMount() {
    try {
      this.builds = await this.$api.builds.list();
    } catch (error) {
      alert(error.message);
    }
  },


}
</script>

<style>
.build-container{
  border: 1px solid black;
  background-color: grey;
}
</style>