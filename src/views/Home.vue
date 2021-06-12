<template>
  <div class="home">
    <header>
      <div class="columns">
        <div class="column is-half">
          <div class="header-txt">
            <h1>EULA</h1>
            <h4>A rebellious descendant of the old aristocracy who is always out on the battlefield.</h4>
            <button class="button is-medium">TAKE A LOOK!</button>
          </div>
          
        </div>
        <div class="column column-image">
          <figure>
            <img src="/img/characters/eula/eula.png" alt="">
          </figure>
        </div>
      </div>
    </header>
    <section class="world" :style="{'background-image':'url(img/discover-teyvat.png)'}">
      <h1>DISCOVER TEYVAT</h1>
      <div class="columns">
        <div class="column is-half column-txt">
          <p>Lorem fistrum la caidita la caidita te va a hasé pupitaa sexuarl se calle ustée benemeritaar. A gramenawer no puedor diodeno torpedo. Tiene musho peligro de la pradera benemeritaar tiene musho peligro ese que llega tiene musho peligro ese pedazo de se calle ustée a wan papaar papaar tiene musho peligro. Diodeno mamaar la caidita ahorarr benemeritaar por la gloria de mi madre pupita. Llevame al sircoo qué dise usteer ese hombree se calle ustée. Papaar papaar mamaar ese que llega quietooor apetecan está la cosa muy malar. Fistro va usté muy cargadoo por la gloria de mi madre quietooor ese hombree. A peich te voy a borrar el cerito jarl caballo blanco caballo negroorl benemeritaar por la gloria de mi madre me cago en tus muelas tiene musho peligro de la pradera fistro no te digo trigo por no llamarte Rodrigor. Por la gloria de mi madre condemor la caidita te va a hasé pupitaa de la pradera mamaar papaar papaar.</p>
        </div>
        <div class="column column-monds">
          <figure>
            <img src="img/Emblema_Mondstadt.png" width="200" height="200" alt="">
          </figure>
        </div>
        <div class="column column-liyue">
          <figure>
            <img src="img/Emblema_Liyue.png" width="200" height="200" alt="">
          </figure>
        </div>
      </div>
    </section>
    <section class="characters" :style="{'background-image':'url(img/bg-liyue.jpg)'}">
    <h1>FORM YOUR TEAM</h1>
    <div class="columns">
      <div class="column is-one-third column-left">
        <figure>
          <img src="img/characters/hu-tao/hu_tao.png" alt="">
        </figure>
            
      </div>
      <div class="column">
        <p>Lorem fistrum la caidita la caidita te va a hasé pupitaa sexuarl se calle ustée benemeritaar. A gramenawer no puedor diodeno torpedo. Tiene musho peligro de la pradera benemeritaar tiene musho peligro ese que llega tiene musho peligro ese pedazo de se calle ustée a wan papaar papaar tiene musho peligro. Diodeno mamaar la caidita ahorarr benemeritaar por la gloria de mi madre pupita. </p>
      </div>
      <div class="column column-right">
        <figure>
          <img src="img/characters/kaeya/kaeya.png" alt="">
        </figure>
      </div>
    </div>
    </section>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // name: 'Home',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap');

/* HEADER */
header{
  height:100vh;
  background-color:lightblue;
}
.column-image img{
  max-height: fit-content;
  max-width: fit-content;
}
.world{
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}
.header-txt{
  margin-top: 10vh;
  margin-left:10vh
}
.header-txt h1{
  color: white;
  font-family: 'Crimson Text', serif;
  font-size: 58px;
  font-weight: bold;
}
.header h4{
  font-family: 'Crimson Text', serif;
  font-size: 25px;
}
.button{
  margin-top:20vh;
  background-color: yellow;
  font-weight: bold;
}

/* WORLD */ 
.world h1, .characters h1{
  padding-top:10vh;
  text-align: center;
  color:white;
  font-size: 4vh;
}
.column-txt{
  margin-left:10vh;
  margin-top:15vh;
  font-size:1,5vh
}
.column-monds{
  margin-top:10vh;
}
.column-monds img{
  margin-left:5vh;
}
.column-liyue{
  margin-top:20vh
}

/* CHARACTERS */
.characters{
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}
.column-left, .column-right{
  display: flex;
  align-items: flex-end;
}
</style>