<template>
<div class="container is-fullhd">
  <!-- <div class="columns btn-container">
    <div class="column btn-all">
      <button class="button">Todos</button>
    </div>
    <div class="column btn-5star">
      <button class="button">5 &#9733;</button>
    </div>
    <div class="column btn-4star">
      <button class="button" 
      :@click="currentRarity = rarity.title">
      4 &#9733;
      </button>
    </div>
  </div> -->
  <div class="columns btn-container">
    <button
                v-for="rarity in rarities"
                :key="rarity.slug"
                class="button"
                :class="{ active: currentRarity === rarity.slug }"
                @click="currentRarity = rarity.slug"
                >{{ rarity.title }}</button
              >
  </div>
  <div class="element-container">
    <button class="button is-large">
      <img class ="element" src="img/elements/pyro.png" alt="fire-element">
    </button>
    <button class="button is-large">
      <img class ="element" src="img/elements/hydro.png" alt="hydro-element">
    </button>
    <button class="button is-large">
      <img class ="element" src="img/elements/electro.png" alt="electro-element">
    </button>
    <button class="button is-large">
      <img class ="element" src="img/elements/anemo.png" alt="anemo-element">
    </button>
    <button class="button is-large">
      <img class ="element" src="img/elements/cryo.png" alt="cryo-element">
    </button>
    <button class="button is-large">
      <img class ="element" src="img/elements/geo.png" alt="geo-element">
    </button>
  </div>
    <div class="columns is-multiline">
      <Cards
      v-for="item in filterCharacters"
      :value="item"
      :key="item._id"
      />
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
        {title: "5", slug: 5},
        {title: "4", slug: 4},
        {title: "Todos", slug: null}
      ],
      currentRarity: null,
      characters: []
    }
  },
  computed: {
    filterCharacters(){
      if (this.currentRarity === null) return this.characters;
      console.info(this.currentRarity)
      return this.characters.filter(
        (item) => item.rarity === this.currentRarity
      );
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
p{
  color: white;
}
.btn-container{
  margin-top:5vh;
}
.btn-5star{
  text-align: right;
}
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
  background-color: black;
}
.element{
  height:50px;
  width:auto;
}
</style>