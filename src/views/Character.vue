<template>
  <header>
    <div class="columns">
      <div class="column">
        <h1>{{name.lore.excerpt}}</h1>
      </div>
      <div class="column">
        <img :src="name.img" :alt="name.name">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Character',
  data(){
    return {
      name: "",
      img: "",
      sentence: ""
    }
  },
  mounted(){
      const characterName = this.$route.params.name
      
      this.$api.characters.getOne(characterName).then(response => this.name = response)
      
  },
}
</script>

<style scoped>
h1{
  font-size: 25px;
  color:red
}
</style>