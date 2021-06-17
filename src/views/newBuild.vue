<template>
  <div class="new-build">
    <div>
          <input class="input" type="text" placeholder="What's your build name?" v-model="title">
          <div class="columns">
            <div class="column is-2">
              <label>Main Character</label>
              <div class="select is-normal">
                <select v-model="main">
                  <option>Amber</option>
                  <option>Diluc</option>
                  <option>Albedo</option>
                  <option>Xiao</option>
                  <option>Rosaria</option>
                </select>
              </div>
            </div>
            <div class="column is-2">
              <label>Member 1</label>
              <div class="select is-normal">
                <select v-model="member1">
                  <option>Fischl</option>
                  <option>Bennett</option>
                  <option>Diona</option>
                  <option>Beidou</option>
                  <option>Jean</option>
                  <option>Ganyu</option>
                </select>
              </div>
            </div>
            <div class="column is-2">
              <label>Member 2</label>
              <div class="select is-normal">
                <select v-model="member2">
                  <option>Fischl</option>
                  <option>Bennett</option>
                  <option>Diona</option>
                  <option>Beidou</option>
                  <option>Jean</option>
                  <option>Ganyu</option>
                </select>
              </div>
            </div>
            <div class="column is-2">
              <label>Member 3</label>
              <div class="select is-normal">
                <select v-model="member3">
                  <option>Fischl</option>
                  <option>Bennett</option>
                  <option>Diona</option>
                  <option>Beidou</option>
                  <option>Jean</option>
                  <option>Ganyu</option>
                </select>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-2">
              <label>Flower</label>
              <div class="select is-normal">
                <select v-model="flower">
                  <option>Gladiator's Finale</option>
                  <option>Viridescent Venerer</option>
                  <option>Noblesse Oblige</option>
                  <option>Bloodstained Chivalry</option>
                  <option>Pale Flame</option>
                  <option>Thundering Fury</option>
                </select>
              </div>
            </div>
            <div class="column is-2">
              <label>Plume</label>
              <div class="select is-normal">
                <select v-model="feather">
                  <option>Gladiator's Finale</option>
                  <option>Viridescent Venerer</option>
                  <option>Noblesse Oblige</option>
                  <option>Bloodstained Chivalry</option>
                  <option>Pale Flame</option>
                  <option>Thundering Fury</option>
                </select>
              </div>
            </div>
            <div class="column is-2">
              <label>Hourglass</label>
              <div class="select is-normal">
                <select v-model="hourglass">
                  <option>Gladiator's Finale</option>
                  <option>Viridescent Venerer</option>
                  <option>Noblesse Oblige</option>
                  <option>Bloodstained Chivalry</option>
                  <option>Pale Flame</option>
                  <option>Thundering Fury</option>
                </select>
              </div>
            </div>
            <div class="column is-2">
              <label>Goblet</label>
              <div class="select is-normal">
                <select v-model="goblet">
                  <option>Gladiator's Finale</option>
                  <option>Viridescent Venerer</option>
                  <option>Noblesse Oblige</option>
                  <option>Bloodstained Chivalry</option>
                  <option>Pale Flame</option>
                  <option>Thundering Fury</option>
                </select>
              </div>
            </div>
            <div class="column is-2">
              <label>Crown</label>
              <div class="select is-normal">
                <select v-model="crown">
                  <option>Gladiator's Finale</option>
                  <option>Viridescent Venerer</option>
                  <option>Noblesse Oblige</option>
                  <option>Bloodstained Chivalry</option>
                  <option>Pale Flame</option>
                  <option>Thundering Fury</option>
                </select>
              </div>
            </div>
          </div>
          
          <!-- <input class="input" type="text" placeholder="Flower" v-model="flower">
          <input class="input" type="text" placeholder="Feather" v-model="feather">
          <input class="input" type="text" placeholder="Hourglass" v-model="hourglass">
          <input class="input" type="text" placeholder="Goblet" v-model ="goblet">
          <input class="input" type="text" placeholder="Crown" v-model="crown"> -->
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
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
}
.columns{
  justify-content: space-between;
}
.input{
  padding: 10px;
}
textarea{
  padding: 10px;
}
@media (max-width: 480px){
  .new-build{
    margin-left: 15px;
    margin-right: 0;
  }
}
</style>