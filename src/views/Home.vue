<template>
  <div class="home">
    <header>
      <div class="columns">
        <div class="column is-half">
          <div class="header-txt">
            <h1>KAZUHA</h1>
            <h4>A wandering samurai from Inazuma who is currently with Liyue's Crux Fleet. A gentle and carefree soul whose heart hides a great many burdens from the past.
                It's hard to say if weathering life's storms has eroded any sharp edges he once had or his reserved nature keeps them hidden from view. The first time most people meet Kaedehara Kazuha, they presume he is just another traineee crew member aboard The Crux.
            </h4>
            <button class="button is-medium">COMING SOON!</button>
          </div>
          
        </div>
        <div class="column">
          <figure class="column-image">
            <img src="/img/kazuha.png" alt="">
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
        <div class="column">
          <a href="/world">
            <figure class="column-monds">
            <img src="img/Emblema_Mondstadt.png" width="200" height="200" alt="">
          </figure>
          </a>
        </div>
        <div class="column">
          <a href="/world">
            <figure class="column-liyue">
            <img src="img/Emblema_Liyue.png" width="200" height="200" alt="">
          </figure>
          </a>
        </div>
      </div>
    </section>
    
    <section class="characters" :style="{'background-image':'url(img/bg-liyue.jpg)'}">
    <h1>FORM YOUR TEAM</h1>
    <div class="columns">
      <div class="column is-one-third column-left">
        <figure>
          <img src="img/characters/kaeya/kaeya.png" alt="kaeya">
        </figure>
      </div>
      <div class="column">
        <p>Lorem fistrum la caidita la caidita te va a hasé pupitaa sexuarl se calle ustée benemeritaar. A gramenawer no puedor diodeno torpedo. Tiene musho peligro de la pradera benemeritaar tiene musho peligro ese que llega tiene musho peligro ese pedazo de se calle ustée a wan papaar papaar tiene musho peligro. Diodeno mamaar la caidita ahorarr benemeritaar por la gloria de mi madre pupita. </p>
      </div>
      <div class="column column-right">
          <img src="img/characters/hu-tao/hu_tao1.png" alt="hu-tao">
      </div>
    </div>
    </section>
    <section class="builds" :style="{'background-image':'url(img/bg-builds.jpg)'}">
      <h1>CREATE YOUR BUILDS</h1>
      <div class="columns">
        <div class="column is-half builds-txt">
          <p>Lorem fistrum la caidita la caidita te va a hasé pupitaa sexuarl se calle ustée benemeritaar. A gramenawer no puedor diodeno torpedo. Tiene musho peligro de la pradera benemeritaar tiene musho peligro ese que llega tiene musho peligro ese pedazo de se calle ustée a wan papaar papaar tiene musho peligro. Diodeno mamaar la caidita ahorarr benemeritaar por la gloria de mi madre pupita. Lorem fistrum la caidita la caidita te va a hasé pupitaa sexuarl se calle ustée benemeritaar. A gramenawer no puedor diodeno torpedo. Tiene musho peligro de la pradera benemeritaar tiene musho peligro ese que llega tiene musho peligro ese pedazo de se calle ustée a wan papaar papaar tiene musho peligro. Diodeno mamaar la caidita ahorarr benemeritaar por la gloria de mi madre pupita.</p>
        </div>
        <div class="column column-artifacts">
            <div class="columns artifacts is-multiline">
              <div class="column is-one-third">
                <img src="img/flower.png" alt="flower-artifact">
              </div>
              <div class="column is-one-third">
                <img src="img/plume.png" alt="plume-artifact">
              </div>
              <div class="column is-one-third">
                <img src="img/hourglass.png" alt="hourglass-artifact">
              </div>
              <div class="column">
                <img src="img/goblet.png" alt="goblet-artifact">
              </div>
              <div class="column">
                <img src="img/mask.png" alt="mask-artifact">
              </div>
            </div>
        </div>
    </div>
    </section>
  </div>
</template>

<script>


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
  background-color:#aaf6ab;
}
.column-image{
  height: 100vh;
  width: auto;
}
.column-image img{
  height:100%;
  width: 100%;
  object-fit: contain;
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
.world h1, .characters h1, .builds h1{
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
  height: auto;
  max-width: 100%;
}
.column-monds img{
  margin-left:5vh;
  height: auto;
  max-width: 100%;
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
}
.column-left img, .column-right img{
  height: 80vh;
  width: auto;
}

/* BUILDS */

.builds{
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}

.builds-txt{
  display: flex;
  align-items: center;
  height: 70vh;
  padding-left: 2%;
}

.artifacts .column{
  display: flex;
  justify-content: space-around;
}

/* MEDIA QUERIES */

@media (max-width: 480px){
  .header-txt{
    margin-top: 5vh;
    margin-left: 2vh;
    padding:5px
  }
  .button{
    margin-top: 5vh;
  }
  .column-image{
    height: 50vh;
  }
  .column-txt{
    display: none;
  }
  .column-liyue{
    margin-top: 0;
  }
  .column .column-monds{
    display: flex;
    justify-content: center;
  }
  .column .column-liyue{
    display: flex;
    justify-content: center;
  }
  .column-monds img{
    margin-left:0;
  }
  .column-artifacts img{
    height: 100px;
    width: auto;
  }
  .column-left{
    display: none;
  }
  .column-right{
    justify-content: center;
  }
  .column-right img{
    height: 45vh;
  }
  .builds-txt{
    height: 45vh;
    padding: 5%;
  }
  .builds-txt p{
    font-size: 15px;
  }
  .artifacts .column{
  display: inline-block;
}
}
</style>