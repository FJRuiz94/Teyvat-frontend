<template>
  <div class="build">
      <div class="columns">
        <div class="column">
          <div class="cardMain">
            <a :href="'/builds/' + value.title">
              <h2><b>{{value.title}}</b></h2>
              <p>{{value.main}}</p>
            <!-- <img :src="value.main" alt=""> -->
            </a>
          </div>
        </div>
        <div class="column column-artifacts">
          <div class="build-content">
            <div class="artifacts-container">
              <p>Flower: {{value.flower}}</p>
              <p> Plume: {{value.feather}}</p>
              <p>Hourglass: {{value.hourglass}}</p>
              <p>Goblet: {{value.goblet}}</p>
              <p>Crown: {{value.crown}}</p>
              <!-- <img :src="value.flower">
              <img :src="value.feather">
              <img :src="value.hourglass">
              <img :src="value.goblet">
              <img :src="value.crown"> -->
            </div>
          </div>
        </div>
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
.artifacts{
  display: inline-block;
}
.artifacts-container img{
  height:75px;
  width:auto;
}
.artifacts img{
  height:150px;
  width:auto;
}
.column-artifacts{
  display: flex;
  align-items:center;
}
.build{
  border:1px solid black;
  padding:15px;
}
.cardMain{
  display: inline-block;
}
.build-content{
  display: inline-block;
}
h2{
  font-size:25px;
  color:white;
}
p{
  font-size:18px;
  color:white;
}
</style>