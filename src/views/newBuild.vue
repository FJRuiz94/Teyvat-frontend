<template>
  <div class="new-build">
    <div>
          <input class="input" type="text" placeholder="What's your build name?" v-model="title">
          <div class="select">
            <select v-model="main">
              <option> Amber </option>
              <option> Diluc </option>
            </select>
          </div>
          <div class="select is-medium">
            <select v-model="member1">
              <option disabled selected>Select dropdown</option>
              <option>Fischl</option>
              <option>Bennett</option>
              <option>Diona</option>
              <option>Beidou</option>
              <option>Jean</option>
              <option>Ganyu</option>
            </select>
          </div>
          <div class="select is-medium">
            <select v-model="member2">
              <option disabled selected>Select dropdown</option>
              <option>Fischl</option>
              <option>Bennett</option>
              <option>Diona</option>
              <option>Beidou</option>
              <option>Jean</option>
              <option>Ganyu</option>
            </select>
          </div>
          <div class="select is-medium">
            <select v-model="member3">
              <option disabled selected>Select dropdown</option>
              <option>Fischl</option>
              <option>Bennett</option>
              <option>Diona</option>
              <option>Beidou</option>
              <option>Jean</option>
              <option>Ganyu</option>
            </select>
          </div>
          <input class="input" type="text" placeholder="Flower" v-model="flower">
          <input class="input" type="text" placeholder="Feather" v-model="feather">
          <input class="input" type="text" placeholder="Hourglass" v-model="hourglass">
          <input class="input" type="text" placeholder="Goblet" v-model ="goblet">
          <input class="input" type="text" placeholder="Crown" v-model="crown">
          <textarea v-model="description" name="" id="" cols="100" rows="10"></textarea>

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
    main: "",
    title: "",
    member1: "",
    member2: "",
    member3: "",
    flower: "",
    feather: "",
    hourglass: "",
    goblet: "",
    crown: "",
    description: ""

  }
}, methods: {
  async createBuild() {
      try {
        const buildData = {
          main: this.main,
          title: this.title,
          member1: this.member1,
          member2: this.member2,
          member3: this.member3,
          flower: this.flower,
          feather: this.feather,
          hourglass: this.hourglass,
          goblet: this.goblet,
          crown: this.crown,
          description: this.description
        }
        
        const response = await this.$api.builds.save(buildData)
        this.$router.push('/builds')
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
.new-build {
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
}
</style>