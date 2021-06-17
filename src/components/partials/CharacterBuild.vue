<template>
  <div class="build">
      <div class="columns">
        <div class="column">
          <div class="cardMain">
            <a :href="'/inConstruction'">
              <h2><b>{{value.title}}</b></h2>
              <!-- <p>{{value.main}}</p> -->
              <img src="img/cards/albedo_135.png" alt="" v-if="value.main === 'Albedo'" >
              <img src="img/cards/amber.png" alt="" v-if="value.main === 'Amber'" >
              <img src="img/cards/barbara_135.png" alt="" v-if="value.main === 'Barbara'" >
              <img src="img/cards/beidou_135.png" alt="" v-if="value.main === 'Beidou'" >
              <img src="img/cards/bennett_135.png" alt="" v-if="value.main === 'Bennett'" >
              <img src="img/cards/chongyun_135.png" alt="" v-if="value.main === 'Chongyun'" >
              <img src="img/cards/diluc_135.png" alt="" v-if="value.main === 'Diluc'" >
              <img src="img/cards/diona_135.png" alt="" v-if="value.main === 'Diona'" >
              <img src="img/cards/eula_135.png" alt="" v-if="value.main === 'Eula'" >
              <img src="img/cards/feiyan_135.png" alt="" v-if="value.main === 'Yanfei'" >
              <img src="img/cards/fischl_135.png" alt="" v-if="value.main === 'Fischl'" >
              <img src="img/cards/ganyu_135.png" alt="" v-if="value.main === 'Ganyu'" >
              <img src="img/cards/hutao_135.png" alt="" v-if="value.main === 'HuTao'" >
              <img src="img/cards/jean_135.png" alt="" v-if="value.main === 'Jean'" >
              <img src="img/cards/kaeya_135.png" alt="" v-if="value.main === 'Kaeya'" >
              <img src="img/cards/keqing_135.png" alt="" v-if="value.main === 'Keqing'" >
              <img src="img/cards/klee_135.png" alt="" v-if="value.main === 'Klee'" >
              <img src="img/cards/lisa_135.png" alt="" v-if="value.main === 'Lisa'" >
              <img src="img/cards/mona_135.png" alt="" v-if="value.main === 'Mona'" >
              <img src="img/cards/ningguang_135.png" alt="" v-if="value.main === 'Ningguang'" >
              <img src="img/cards/noelle_135.png" alt="" v-if="value.main === 'Noelle'" >
              <img src="img/cards/qiqi_135.png" alt="" v-if="value.main === 'Qiqi'" >
              <img src="img/cards/razor_135.png" alt="" v-if="value.main === 'Razor'" >
              <img src="img/cards/rosaria_135.png" alt="" v-if="value.main === 'Rosaria'" >
              <img src="img/cards/tartaglia_135.png" alt="" v-if="value.main === 'Tartaglia'" >
              <img src="img/cards/venti_135.png" alt="" v-if="value.main === 'Venti'" >
              <img src="img/cards/xiangling_135.png" alt="" v-if="value.main === 'Xiangling'" >
              <img src="img/cards/xiao_135.png" alt="" v-if="value.main === 'Xiao'" >
              <img src="img/cards/xingqiu_135.png" alt="" v-if="value.main === 'Xingqiu'" >
              <img src="img/cards/xinyan_135.png" alt="" v-if="value.main === 'Xinyan'" >
              <img src="img/cards/zhongli_135.png" alt="" v-if="value.main === 'Zhongli'" >


            <!-- <img :src="value.main" alt=""> -->
            </a>
          </div>
        </div>
        <div class="column column-artifacts">
          <div class="build-content">
            <div class="artifacts-container">
              <div class="flower">
                <img src="img/artifacts/noblesse/flower.png" alt="" v-if="value.flower === 'noblesse'" >
                <img src="img/artifacts/chivalry/flower.png" alt="" v-if="value.flower === 'chivalry'" >
                <img src="img/artifacts/thundering/flower.png" alt="" v-if="value.flower === 'thundering'" >
                <img src="img/artifacts/crimsonWitch/flower.png" alt="" v-if="value.flower === 'crimson'" >
                <img src="img/artifacts/gladiator/flower.png" alt="" v-if="value.flower === 'gladiator'" >
              </div>
              <div class="plume">
                <img src="img/artifacts/noblesse/plume.png" alt="" v-if="value.feather === 'noblesse'" >
                <img src="img/artifacts/chivalry/plume.png" alt="" v-if="value.feather === 'chivalry'" >
                <img src="img/artifacts/thundering/plume.png" alt="" v-if="value.feather === 'thundering'" >
                <img src="img/artifacts/crimsonWitch/plume.png" alt="" v-if="value.feather === 'crimson'" >
                <img src="img/artifacts/gladiator/plume.png" alt="" v-if="value.feather === 'gladiator'" >
              </div>
              <div class="hourglass">
                <img src="img/artifacts/noblesse/hourglass.png" alt="" v-if="value.hourglass === 'noblesse'" >
                <img src="img/artifacts/chivalry/hourglass.png" alt="" v-if="value.hourglass === 'chivalry'" >
                <img src="img/artifacts/thundering/hourglass.png" alt="" v-if="value.hourglass === 'thundering'" >
                <img src="img/artifacts/crimsonWitch/hourglass.png" alt="" v-if="value.hourglass === 'crimson'" >
                <img src="img/artifacts/gladiator/hourglass.png" alt="" v-if="value.hourglass === 'gladiator'" >
              </div>
              <div class="goblet">
                <img src="img/artifacts/noblesse/goblet.png" alt="" v-if="value.goblet === 'noblesse'" >
                <img src="img/artifacts/chivalry/goblet.png" alt="" v-if="value.goblet === 'chivalry'" >
                <img src="img/artifacts/thundering/goblet.png" alt="" v-if="value.goblet === 'thundering'" >
                <img src="img/artifacts/crimsonWitch/goblet.png" alt="" v-if="value.goblet === 'crimson'" >
                <img src="img/artifacts/gladiator/goblet.png" alt="" v-if="value.goblet === 'gladiator'" >
              </div>
              <div class="crown">
                <img src="img/artifacts/noblesse/crown.png" alt="" v-if="value.crown === 'noblesse'" >
                <img src="img/artifacts/chivalry/crown.png" alt="" v-if="value.crown === 'chivalry'" >
                <img src="img/artifacts/thundering/crown.png" alt="" v-if="value.crown === 'thundering'" >
                <img src="img/artifacts/crimsonWitch/crown.png" alt="" v-if="value.crown === 'crimson'" >
                <img src="img/artifacts/gladiator/crown.png" alt="" v-if="value.crown === 'gladiator'" >
              </div>
              <!-- <h1 v-if="value.main === 'Albedo'">HI</h1> -->
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
.flower, .plume, .hourglass, .goblet, .crown{
  display: inline-block;
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