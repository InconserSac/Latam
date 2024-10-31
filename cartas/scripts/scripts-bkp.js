const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

var conteo;

conteo=0; 

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
  checkForMatch();
	
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
  //isMatch ? contando();
}

/*function contando() {
	conteo=conteo+1;
	if(conteo==3){
		window.location.href = "http://www.w3schools.com";
	}
}*/



function disableCards() {
  firstCard.removeEventListener('touchstart tab click', flipCard);
  secondCard.removeEventListener('touchstart tab click', flipCard);

  resetBoard();
	
	conteo=conteo+1;
	
	if(conteo==8){
		/*sleep(1500);
		window.location.href = "http://www.w3schools.com";*/
		$('#GANASTE').popup('show');
		/*jQuery("#seconds_timer").countdowntimer("stop", "stop");*/
		//jQuery("#seconds_timer").countdowntimer("pause");
		jQuery("#seconds_timer").countdowntimer("destroy");
	}
	else{
		$('#JPO').popup('show');
	}
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
	
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
	
	
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
})();

//card.addEventListener('click', () => {});

cards.forEach(card => card.addEventListener('touchstart tab click', flipCard));