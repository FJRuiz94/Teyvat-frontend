<template>
  <div class="new-build" :style="{'background-image':'url(img/genshinFondo.jpg)', 'background-size': 'cover'}">
    <div>
          <input class="input" type="text" placeholder="What's your build name?" v-model="title">
          <div class="columns characterFields">
            <div class="column is-2">
              <label>Main Character</label>
              <div class="select is-normal">
                <select v-model="main">
                  <option value="Amber">Amber</option>
                  <option value="Diluc">Diluc</option>
                  <option value="Albedo">Albedo</option>
                  <option value="Barbara">Barbara</option>
                  <option value="Beidou">Beidou</option>
                  <option value="Bennett">Bennett</option>
                  <option value="Chongyun">Chongyun</option>
                  <option value="Diona">Diona</option>
                  <option value="Eula">Eula</option>
                  <option value="Fischl">Fischl</option>
                  <option value="Ganyu">Ganyu</option>
                  <option value="HuTao">HuTao</option>
                  <option value="Jean">Jean</option>
                  <option value="Kaeya">Kaeya</option>
                  <option value="Keqing">Keqing</option>
                  <option value="Klee">Klee</option>
                  <option value="Lisa">Lisa</option>
                  <option value="Mona">Mona</option>
                  <option value="Ningguang">Ningguang</option>
                  <option value="Noelle">Noelle</option>
                  <option value="Qiqi">Qiqi</option>
                  <option value="Razor">Razor</option>
                  <option value="Rosaria">Rosaria</option>
                  <option value="Sucrose">Sucrose</option>
                  <option value="Tartaglia">Tartaglia</option>
                  <option value="Venti">Venti</option>
                  <option value="Xiangling">Xiangling</option>
                  <option value="Xiao">Xiao</option>
                  <option value="Xingqiu">Xingqiu</option>
                  <option value="Xinyan">Xinyan</option>
                  <option value="Yanfei">Yanfei</option>
                  <option value="Zhongli">Zhongli</option>
                </select>
              </div>
            </div>
            <div class="column is-2">
              <label>Member 1</label>
              <div class="select is-normal">
                <select v-model="member1">
                  <option value="Amber">Amber</option>
                  <option value="Diluc">Diluc</option>
                  <option value="Albedo">Albedo</option>
                  <option value="Barbara">Barbara</option>
                  <option value="Beidou">Beidou</option>
                  <option value="Bennett">Bennett</option>
                  <option value="Chongyun">Chongyun</option>
                  <option value="Diona">Diona</option>
                  <option value="Eula">Eula</option>
                  <option value="Fischl">Fischl</option>
                  <option value="Ganyu">Ganyu</option>
                  <option value="HuTao">HuTao</option>
                  <option value="Jean">Jean</option>
                  <option value="Kaeya">Kaeya</option>
                  <option value="Keqing">Keqing</option>
                  <option value="Klee">Klee</option>
                  <option value="Lisa">Lisa</option>
                  <option value="Mona">Mona</option>
                  <option value="Ningguang">Ningguang</option>
                  <option value="Noelle">Noelle</option>
                  <option value="Qiqi">Qiqi</option>
                  <option value="Razor">Razor</option>
                  <option value="Rosaria">Rosaria</option>
                  <option value="Sucrose">Sucrose</option>
                  <option value="Tartaglia">Tartaglia</option>
                  <option value="Venti">Venti</option>
                  <option value="Xiangling">Xiangling</option>
                  <option value="Xiao">Xiao</option>
                  <option value="Xingqiu">Xingqiu</option>
                  <option value="Xinyan">Xinyan</option>
                  <option value="Yanfei">Yanfei</option>
                  <option value="Zhongli">Zhongli</option>
                </select>
              </div>
            </div>
            <div class="column is-2">
              <label>Member 2</label>
              <div class="select is-normal">
                <select v-model="member2">
                  <option value="Amber">Amber</option>
                  <option value="Diluc">Diluc</option>
                  <option value="Albedo">Albedo</option>
                  <option value="Barbara">Barbara</option>
                  <option value="Beidou">Beidou</option>
                  <option value="Bennett">Bennett</option>
                  <option value="Chongyun">Chongyun</option>
                  <option value="Diona">Diona</option>
                  <option value="Eula">Eula</option>
                  <option value="Fischl">Fischl</option>
                  <option value="Ganyu">Ganyu</option>
                  <option value="HuTao">HuTao</option>
                  <option value="Jean">Jean</option>
                  <option value="Kaeya">Kaeya</option>
                  <option value="Keqing">Keqing</option>
                  <option value="Klee">Klee</option>
                  <option value="Lisa">Lisa</option>
                  <option value="Mona">Mona</option>
                  <option value="Ningguang">Ningguang</option>
                  <option value="Noelle">Noelle</option>
                  <option value="Qiqi">Qiqi</option>
                  <option value="Razor">Razor</option>
                  <option value="Rosaria">Rosaria</option>
                  <option value="Sucrose">Sucrose</option>
                  <option value="Tartaglia">Tartaglia</option>
                  <option value="Venti">Venti</option>
                  <option value="Xiangling">Xiangling</option>
                  <option value="Xiao">Xiao</option>
                  <option value="Xingqiu">Xingqiu</option>
                  <option value="Xinyan">Xinyan</option>
                  <option value="Yanfei">Yanfei</option>
                  <option value="Zhongli">Zhongli</option>
                </select>
              </div>
            </div>
            <div class="column is-2">
              <label>Member 3</label>
              <div class="select is-normal">
                <select v-model="member3">
                  <option value="Amber">Amber</option>
                  <option value="Diluc">Diluc</option>
                  <option value="Albedo">Albedo</option>
                  <option value="Barbara">Barbara</option>
                  <option value="Beidou">Beidou</option>
                  <option value="Bennett">Bennett</option>
                  <option value="Chongyun">Chongyun</option>
                  <option value="Diona">Diona</option>
                  <option value="Eula">Eula</option>
                  <option value="Fischl">Fischl</option>
                  <option value="Ganyu">Ganyu</option>
                  <option value="HuTao">HuTao</option>
                  <option value="Jean">Jean</option>
                  <option value="Kaeya">Kaeya</option>
                  <option value="Keqing">Keqing</option>
                  <option value="Klee">Klee</option>
                  <option value="Lisa">Lisa</option>
                  <option value="Mona">Mona</option>
                  <option value="Ningguang">Ningguang</option>
                  <option value="Noelle">Noelle</option>
                  <option value="Qiqi">Qiqi</option>
                  <option value="Razor">Razor</option>
                  <option value="Rosaria">Rosaria</option>
                  <option value="Sucrose">Sucrose</option>
                  <option value="Tartaglia">Tartaglia</option>
                  <option value="Venti">Venti</option>
                  <option value="Xiangling">Xiangling</option>
                  <option value="Xiao">Xiao</option>
                  <option value="Xingqiu">Xingqiu</option>
                  <option value="Xinyan">Xinyan</option>
                  <option value="Yanfei">Yanfei</option>
                  <option value="Zhongli">Zhongli</option>
                </select>
              </div>
            </div>
          </div>
          <div class="columns artifactsFields">
            <div class="column is-2">
              <label>Flower</label>
              <div class="select is-normal">
                <select v-model="flower">
                  <option value="gladiator">Gladiator's Finale</option>
                  <option value="thundering">Thundering Fury</option>
                  <option value="noblesse">Noblesse Oblige</option>
                  <option value="chivalry">Bloodstained Chivalry</option>
                  <option value="crimson">Crimson Witch of Flames</option>
                </select>
              </div>
            </div>
            <div class="column is-2">
              <label>Plume</label>
              <div class="select is-normal">
                <select v-model="feather">
                  <option value="gladiator">Gladiator's Finale</option>
                  <option value="thundering">Thundering Fury</option>
                  <option value="noblesse">Noblesse Oblige</option>
                  <option value="chivalry">Bloodstained Chivalry</option>
                  <option value="crimson">Crimson Witch of Flames</option>
                </select>
              </div>
            </div>
            <div class="column is-2">
              <label>Hourglass</label>
              <div class="select is-normal">
                <select v-model="hourglass">
                  <option value="gladiator">Gladiator's Finale</option>
                  <option value="thundering">Thundering Fury</option>
                  <option value="noblesse">Noblesse Oblige</option>
                  <option value="chivalry">Bloodstained Chivalry</option>
                  <option value="crimson">Crimson Witch of Flames</option>
                </select>
              </div>
            </div>
            <div class="column is-2">
              <label>Goblet</label>
              <div class="select is-normal">
                <select v-model="goblet">
                  <option value="gladiator">Gladiator's Finale</option>
                  <option value="thundering">Thundering Fury</option>
                  <option value="noblesse">Noblesse Oblige</option>
                  <option value="chivalry">Bloodstained Chivalry</option>
                  <option value="crimson">Crimson Witch of Flames</option>
                </select>
              </div>
            </div>
            <div class="column is-2">
              <label>Crown</label>
              <div class="select is-normal">
                <select v-model="crown">
                  <option value="gladiator">Gladiator's Finale</option>
                  <option value="thundering">Thundering Fury</option>
                  <option value="noblesse">Noblesse Oblige</option>
                  <option value="chivalry">Bloodstained Chivalry</option>
                  <option value="crimson">Crimson Witch of Flames</option>
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
.characterFields, .artifactsFields{
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