<template>
  <div class="world">
    <section class="regions">
      <div class="columns">
        <div class="column" :style="{'background-image':'url(img/mondstadt.jpg)'}">
          <div class="region-info">
            <div>
                <a href="#Mond">
                  <img src="img/Emblema_Mondstadt.png" alt="Emblema-Mondstadt">
                  </a>
              </div>
              <h2>Mondstadt</h2>
          </div>
        </div>
        <div class="column" :style="{'background-image':'url(img/Liyue.png)'}">
          <div class="region-info">
            <div>
              <a href="#Liyue">
                <img src="img/Emblema_Liyue.png" alt="Emblema-Liyue">
              </a>
            </div>
            <h2>Liyue</h2>
          </div>
        </div>
      </div>
    </section>
    <section id="Mond" class="monds-section" :style="{'background-image':'url(img/mondstadt.jpg)'}">
      <div class="bg">
        <div class="region-logo">
          <img src="img/Emblema_Mondstadt.png" alt="Emblema-Liyue">
        </div>
        <h2>Mondstadt</h2>
        <p>As described by Venti in his Story Quest, Mondstadt was once ruled by a tyrant leader that oppressed his people. This ruler was Decarabian, the previous Anemo Archon before Barbatos.

        Mondstadt during this time was a cold and harsh land. To protect his people, Decarabian surrounded the old city of Mondstadt in a powerful vortex, keeping the encroaching cold from entering and his people from leaving. Judging by the sources on his rule, Decarabian seemed unaware that his people held him in contempt.

        At one point The King of the North Wind, Lupus Boreas, declared war on Decrabian but was unsuccessful in even penetrating the defensive winds.

        With the help of Mondstadt's oppressed people and even Decarabian's lover, Amos, the wind spirit Barbatos was able to overthrow the tyrant Lord of Storms and free the people of Mondstadt. Though Lupus Boreas had the right to become the next Anemo Archon, he relinquished the right to Barbatos. Thus Barbatos became the new Anemo Archon of Mondstadt.

        Using the power of the Four Winds, Barbatos blew away the snow and ice from the land and reformed the geography of Mondstadt completely. After that, he established a new city of Mondstadt where it still stands to this day.

        Rather than rule as Decarabian did, Barbatos instead chose to fully embrace the ideal of freedom and left Mondstadt to be governed by the people.
        </p>
      </div>

    </section>
    <section id="Liyue" class="liyue-section" :style="{'background-image':'url(img/Liyue.png)'}">
      <div class="bg">
        <div class="region-logo">
          <img src="img/Emblema_Liyue.png" alt="Emblema-Liyue">
        </div>
        <h2>Liyue</h2>
        <p>As described by Venti in his Story Quest, Mondstadt was once ruled by a tyrant leader that oppressed his people. This ruler was Decarabian, the previous Anemo Archon before Barbatos.

        Mondstadt during this time was a cold and harsh land. To protect his people, Decarabian surrounded the old city of Mondstadt in a powerful vortex, keeping the encroaching cold from entering and his people from leaving. Judging by the sources on his rule, Decarabian seemed unaware that his people held him in contempt.

        At one point The King of the North Wind, Lupus Boreas, declared war on Decrabian but was unsuccessful in even penetrating the defensive winds.

        With the help of Mondstadt's oppressed people and even Decarabian's lover, Amos, the wind spirit Barbatos was able to overthrow the tyrant Lord of Storms and free the people of Mondstadt. Though Lupus Boreas had the right to become the next Anemo Archon, he relinquished the right to Barbatos. Thus Barbatos became the new Anemo Archon of Mondstadt.

        Using the power of the Four Winds, Barbatos blew away the snow and ice from the land and reformed the geography of Mondstadt completely. After that, he established a new city of Mondstadt where it still stands to this day.

        Rather than rule as Decarabian did, Barbatos instead chose to fully embrace the ideal of freedom and left Mondstadt to be governed by the people
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap');

/* TWO REGIONS  */

.regions .columns, .regions .columns .column{
  height: 90vh;
}
.column{
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

h2{
  font-family: 'Crimson Text', serif;
  text-align: center;
  color: white;
}

/* MONDSTADT SECTION */

.bg{
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.164);
  padding: 10%;
}

.monds-section{
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}
.region-logo{
  display: flex;
  justify-content: center;
}

.round{
  height: 25px;
  width: 25px;
  background-color: rgba(0, 0, 0, 0.39);
}

/* LIYUE SECTION */
.liyue-section{
  background-repeat: no-repeat;
  background-size: cover;
}

@media(max-width: 480px){
  .regions .columns{
    display: flex;
    flex-direction: column;
  }
  .region-info img{
    height: 200px;
  }
  .columns{
    margin-left: 0;
    margin-right: 0;
  }
  .region-logo img{
    height: 150px;
  }
  .bg{
    padding: 5%;
  }
  .monds-section p, .liyue-section p{
    font-size: 14px;
  }
}
</style>