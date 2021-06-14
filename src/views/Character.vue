<template>
<div>
  <header>
    <div class="columns">
      <div class="column">
        <div class="charName">
          <h1>{{name.name}}</h1>
          <h4>{{name.sentence}}</h4>
        </div>
      </div>
      <div class="column">
        <div class="charImg">
          <img :src="name.img" :alt="name.name">
        </div>
      </div>
    </div>
  </header>
  <section class="lore">
    <div class="columnn">
      <div class="column excerpt">
        <h2>
          "{{name.lore.excerpt}}"
        </h2>
      </div>
    </div>
    <div class="columns">
      <div class="column loreDesc">
        <p>
          {{name.lore.description}}
        </p>
      </div>
      <div class="column">
        <div class="loreImg">
          <img :src="name.lore.img" :alt="name.name">
        </div>
      </div>
    </div>
  </section>
  <section class="abilities">
    <div class="columns">
      <div class="column atk">
        <img class="gif" :src="name.abilities.normalATK.gif" :alt="name.abilities.normalATK.name">
        <img class="logo" :src="name.abilities.normalATK.logo" :alt="name.abilities.normalATK.name">
        <h3 class="abilityName">
          <b>{{name.abilities.normalATK.name}}</b>
        </h3>
        <p class="abilityDesc">{{name.abilities.normalATK.description}}</p>
      </div>
      <div class="column skill">
        <img class="gif" :src="name.abilities.elementalSkill.gif" :alt="name.abilities.elementalSkill.name">
        <img class="logo" :src="name.abilities.elementalSkill.logo" :alt="name.abilities.elementalSkill.name">
        <h3 class="abilityName">
          <b>{{name.abilities.elementalSkill.name}}</b>
        </h3>
        <p class="abilityDesc">{{name.abilities.elementalSkill.description}}</p>
      </div>
      <div class="column burst">
        <img class="gif" :src="name.abilities.elementalBurst.gif" :alt="name.abilities.elementalBurst.name">
        <img class="logo" :src="name.abilities.elementalBurst.logo" :alt="name.abilities.elementalBurst.name">
        <h3 class="abilityName">
          <b>{{name.abilities.elementalBurst.name}}</b>
        </h3>
        <p class="abilityDesc">{{name.abilities.elementalBurst.description}}</p>
      </div>
    </div>
  </section>
    
</div>
  
</template>

<script>
export default {
  name: 'Character',
  data(){
    return {
      name: "",
      img: "",
      sentence: "",
      element: ""
    }
  },
  mounted(){
      const characterName = this.$route.params.name
      
      this.$api.characters.getOne(characterName).then(response => this.name = response)
      if(this.element === 'Pyro')document.body.style.backgroundColor = "red";
  },
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap');


header{
  height:100vh;
  background-color:rgba(0, 0, 0, 0.233);
}
.charName{
  margin-top: 5vh;
  margin-left: 5vw;
}
.charImg{
  height: 90vh;
  width: auto;
}
.charImg img{
  height:100%;
  width: 100%;
  object-fit: contain;
}
h1{
  font-family: 'Crimson Text', serif;
  font-size: 5rem;
  color:white;
}
h4{
  font-size:1.5rem;
}
.lore{
  height:90vh;
  background-color:rgba(0, 0, 0, 0.233);
}
.excerpt h2{
  font-family: 'Crimson Text', serif;
  font-size: 1.7rem;
  text-align: center;
  padding-left: 20%;
  padding-right: 20%;
  font-style: italic;
}
.loreDesc{
  padding-left: 5vw;
  padding-top: 8vh;
}
.loreDesc p{
  font-size: 1.4rem;
}
.loreImg{
  height: 70vh;
  width: auto;
  padding: 10px
}
.loreImg img{
  height:100%;
  width: 100%;
  object-fit: contain;
}
.atk, .skill, .burst{
  padding: 15vh;
}
.gif{
  height:25vh;
  width:auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.logo{
  height:10vh;
  width:auto;
  display: block;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding:10px;
}
.abilityName{
  text-align: center;
  font-size:1.5rem;
  color:black;
}
.abilityDesc{
  margin-left: auto;
  margin-right: auto;
}
</style>