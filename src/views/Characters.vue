<template>

<div class="charactersContainer" :style="{'background-image':'url(img/bg-characters.jpg)', 'background-size': 'cover','background-color': 'rgba(0, 0, 0, 0.116)'}">
<div class="container is-fullhd">
  <!-- <div class="btn-container">
      <button class="button" @click="currentRarity = 5" :class="{ active: currentRarity === 5 }">
        5 &#9733;
        </button>
      <button class="button" @click="currentRarity = 4" :class="{ active: currentRarity === 4 }"> 
      4 &#9733;
      </button>
  </div> -->

  <div class="element-container">
    <button class="button is-large" @click="currentElement = null" :class="{ active: currentElement === null }">
      Todos
    </button>
    <button class="button is-large" @click="currentElement = 'Pyro'" :class="{ active: currentElement === 'Pyro' }">
      <img class ="element" src="img/elements/pyro.png" alt="fire-element">
    </button>
    <button class="button is-large" @click="currentElement = 'Hydro'" :class="{ active: currentElement === 'Hydro' }">
      <img class ="element" src="img/elements/hydro.png" alt="hydro-element">
    </button>
    <button class="button is-large" @click="currentElement = 'Electro'" :class="{ active: currentElement === 'Electro' }">
      <img class ="element" src="img/elements/electro.png" alt="electro-element">
    </button>
    <button class="button is-large" @click="currentElement = 'Anemo'" :class="{ active: currentElement === 'Anemo' }">
      <img class ="element" src="img/elements/anemo.png" alt="anemo-element">
    </button>
    <button class="button is-large" @click="currentElement = 'Cryo'" :class="{ active: currentElement === 'Cryo' }">
      <img class ="element" src="img/elements/cryo.png" alt="cryo-element">
    </button>
    <button class="button is-large" @click="currentElement = 'Geo'" :class="{ active: currentElement === 'Geo' }">
      <img class ="element" src="img/elements/geo.png" alt="geo-element">
    </button>
  </div>
    <div class="columns is-multiline">
      <Cards
      v-for="item in filterElement"
      :value="item"
      :key="item._id"
      />
    </div>
</div>
</div> 
</template>

<script>

import Cards from '@/components/partials/CharactersCards'

export default {
  name: 'Characters',
  components: {
    Cards
  },
  data(){

    return{
      rarities: [
        {title: "Todos", slug: null},
        {title: "5", slug: 5},
        {title: "4", slug: 4},
      ],
      elements: [
        {title: "Todos", slug: null},
        {title: "Pyro", slug: "Pyro"},
        {title: "Hydro", slug: "Hydro"},
        {title: "Anemo", slug:"Anemo"},
        {title: "Cryo", slug: "Cryo"},
        {title: "Geo", slug: "Geo"},
        {title: "Electro", slug: "Electro"}
      ],
      currentRarity: null,
      currentElement: null,
      characters: []
    }
  },
  computed: {
    filterElement(){
      if (this.currentElement === null) return this.characters
      return this.characters.filter(
        (item) => item.element === this.currentElement)
    }
  },
  async beforeMount(){
    try{
      this.characters = await this.$api.characters.list()
    } catch (error){
      alert(error.message)
    }
  }
}
</script>

<style scoped>
.charactersContainer{
  height: 150vh;
}
p{
  color: white;
}
.btn-container{
  display: flex;
  align-items: center;
}
.btn-container button{
  margin:5px;
}
/* .btn-5star{
  text-align: right;
} */
.active{
  background-color: black;
  color:white;
}
.element-container{
  display: flex;
  justify-content: center;
  margin-bottom:25px;
}
.element-container button{
  border:1px solid rgb(68, 68, 68);
  border-radius:10%;
  padding: 5px;
  margin:5px;
}
.element{
  height:50px;
  width:auto;
}
@media(max-width: 480px){
.btn-container{
  margin-top:0;
}
.columns{
  margin-left:0;
  margin-right: 0;
  margin-top: 0;
  padding: 15px;
  }
.column{
  display: inline-block;
  padding: 0;
}
.button{
  font-size:1.2rem;
}
.element{
  height:35px;
}
.charactersContainer{
  height: auto;
}
}

</style>