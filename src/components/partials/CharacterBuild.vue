<template>
  <div class="build">
    <a :href="'/builds/' + value.title">
      <p>{{value.main}}</p>
    </a>
    <h4>{{value.title}}</h4>
      <div class="artifacts">
        <img :src="value.flowers">
        <img :src="value.feather">
        <img :src="value.hourglass">
        <img :src="value.goblet">
        <img :src="value.crown">
      </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterBuild',
  props: {
    value:Object
  }
}
</script>

<style>
.build{
  border:1px solid black
}
.artifacts{
  display: inline-block;
}
.artifacts img{
  height:50px;
  width:50px
}

</style>