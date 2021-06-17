<template>
  <div :style="{'background-image':'url(img/genshinFondo.jpg)', 'background-size': 'cover'}">
    	<section>
        <div class="speech-bubble">
          <p>Well... Did you see the rest of the project? Really cool, huh?Paimon lent a hand in the project, you know? Yes, I did...uh...you know...that part... Oh would you at the hour! Paimon has to go now, see y'all!</p>
          <p>Wait, don't go! Paimon has something to tell you. This section is still in development, but please don't get angry with Paimon! I assure you the wait will be worth it...</p>
        </div>
        <div class="img-der">
          <img src="img/paimon.png">
        </div>
	</section>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.speech-bubble {
	top: 30vh;
    right: 75vh;
    display: inline-block;
    position: absolute;
    margin: .5em auto;
    padding: 2vh;
    width: 30em;
    height: 15em;
    border-radius: .25em;
    transform: rotate(-180deg) rotateY(0deg);
    background: black;
    font: 2em/4 Century Gothic, Verdana, sans-serif;
    text-align: center;
    animation: 2s fadeIn;
}
.speech-bubble:before, .speech-bubble:after {
  position: absolute;
  z-index: -1;
  content: '';
}
.speech-bubble:after {
  top: 0; right: 0; bottom: 0; left: 0;
  border-radius: inherit;
  transform: rotate(2deg) translate(.35em, -.15em) scale(1.02);
  background: #f4fbfe;
}
.speech-bubble:before {
	border: solid 0 transparent;
   border-right: solid 3.5em black;
   border-bottom: solid .25em black;
   bottom: 2.25em;
   left: -0.75em;
   width: 0;
   height: 1em;
   transform: rotate(-29deg) skewX(80deg);
}

.speech-bubble p{
	font-size: 20px;
    font-family: 'Fauna One', serif;
    transform: rotate(-180deg);
    padding: 30px;
    text-align: justify;
    color: black;
}

/* FIN BOCADILLO PAIMON */

.img-der{
	display: inline-block;
	position: absolute;
	right:20vh;
	margin-top:5vh;
	animation: 2s fly;
	transition: transform 1s ease-out;
	animation-iteration-count: infinite;
	animation-duration: 4s;
}

/*.img-der:hover{
	transform:rotate(5deg);
}*/

@keyframes fly{
	0%{
		top: 100px;
	}
	50%{
		top: 150px;
		transform:rotate(5deg);
	}
	100%{
		top: 100px;
	}
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
}

.img-der img{
	height:75vh;
	width: auto;
}
</style>