const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

var conteo=0;
//conteo=0;
var audiobien = new Audio('sounds/_391539__mativve__electrowinsoundwav.mp3');
var audioganaste = new Audio('sounds/_243801__xtrgamr__awwwthanapplauseandcheeringwav.mp3');

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  lockBoard = true;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? disableCards() : unflipCards();
	
}


/*function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}*/



function disableCards() {
  //firstCard.removeEventListener('touchstart tab click', flipCard);
  //secondCard.removeEventListener('touchstart tab click', flipCard);
	
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
	
  resetBoard();

  audiobien.play();
	
	conteo=conteo+1;
	var es = $('#seconds_timer');
	//var audio = new Audio('audio_file.mp3');
	if(conteo==8){
		/*sleep(1500);
		window.location.href = "http://www.w3schools.com";*/
		//jQuery("#seconds_timer").countdowntimer("stop", "stop");
		/*jQuery("#seconds_timer").countdowntimer("pause", "pause");
		jQuery("#seconds_timer").countdowntimer("stop", "stop");
		jQuery("#seconds_timer").countdowntimer("destroy");*/
		$('#GANASTE').popup('show');
		document.getElementById("PERDISTE").setAttribute("id", "PERDISTE2");
		audioganaste.play();
		//audio.play();
		/*jQuery("#seconds_timer").countdowntimer("stop", "stop");*/
		//jQuery("#seconds_timer").countdowntimer("pause");
		//jQuery("#seconds_timer").countdowntimer("destroy");
		//clearInterval(es); 		
	}
	else{
		$('#JPO').popup('show');
	}
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}

(function shuffle() {
  cards.forEach(card => {
    let ramdomPos = Math.ceil(Math.random() * 16);
    card.style.order = ramdomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
