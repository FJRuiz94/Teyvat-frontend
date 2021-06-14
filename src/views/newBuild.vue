<template>
  <div class="new-build">
    <div class="column is-half">
          <!-- <div class="select">
            <select>
              <option>Main character</option>
            </select>
          </div> -->
          <!-- <input class="input" type="text" placeholder="Main Character" v-model="main"> -->
          <div class="select">
            <select v-model="main">
              <option>Main Character</option>
              <option>Amber</option>
              <option>Diluc</option>
            </select>
          </div>
          <!-- <input class="input" type="text" placeholder="Title" v-model="title">
          <input class="input" type="text" placeholder="Flower" v-model="flower">
          <input class="input" type="text" placeholder="Feather" v-model="feather">
          <input class="input" type="text" placeholder="Hourglass" v-model="hourglass">
          <input class="input" type="text" placeholder="Goblet" v-model ="goblet">
          <input class="input" type="text" placeholder="Crown" v-model="crown"> -->

          <button class="button" @click="createBuild"> Create Build</button>

    </div>
    <div class="column">
      
    </div>
  </div>
</template>

<script>


export default {
name: 'NewBuild',
data(){
  return {
    main: ""
  }
}, methods: {
  async createBuild() {
      try {
        const buildData = {
          main: this.main
        }
        
        const response = await this.$api.builds.save(buildData)
        console.log(response)
      } catch (error) {
        console.log(error)
        alert("Build could not be created.")
      }
    },
  },
}
</script>

<style>

</style>