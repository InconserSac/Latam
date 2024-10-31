/*VALORES OBTENIDOS DE PREGUNTAS*/	
var pregunta1 = sessionStorage.getItem('File1');
var pregunta2 = sessionStorage.getItem('File2');
var pregunta3 = sessionStorage.getItem('File3');
var pregunta4 = sessionStorage.getItem('File4');	
var pregunta5 = sessionStorage.getItem('File5');	
/*var pregunta6 = sessionStorage.getItem('File6');
var pregunta7 = sessionStorage.getItem('File7');
var pregunta8 = sessionStorage.getItem('File8');
var pregunta9 = sessionStorage.getItem('File9');*/
var ActualPregNum = Number(sessionStorage.getItem('PregNum'));
var ActualPuntaje = Number(sessionStorage.getItem('Puntaje'));
	

if(ActualPregNum==0){
	var SigPreg = pregunta1;
}	
if(ActualPregNum==1){
	var SigPreg = pregunta2;
}
if(ActualPregNum==2){
	var SigPreg = pregunta3;
}
if(ActualPregNum==3){
	//var SigPreg = pregunta4;
	var SigPreg = "trivia-cemprotec-final.html";
}
if(ActualPregNum==4){
	//var SigPreg = pregunta5;
	//var SigPreg = "trivia-cemprotec-final.html";
}
/*if(ActualPregNum==5){
	var SigPreg = "trivia-cemprotec-final.html";
}*/
	
ActualPregNum++;
	
/*MENSAJE DE RESPUESTA*/
var presionado=0;
var respuesta=0;
var preguntanum=0;

var element = document.getElementById("explicacion");

//var correcto=0;
//const contentDiv2 = '<div id="pregunta1"><div id="preg"><img src="images/cem-preg02.png" width="800" height="317" alt=""/></div><div class="grow" id="menu"><div><img id="opt01" src="images/cem-opt05.png" width="620" height="162" alt="" onClick="showImage1()" /><div id="check01" class="check01"><img src="images/check.png" width="100" height="98" alt="" /></div></div><div><img id="opt02" src="images/cem-opt06.png" width="620" height="162" alt="" onClick="showImage2()" /><div id="check02" class="check02"><img src="images/check.png" width="100" height="98" alt=""/></div></div><div><img id="opt03" src="images/cem-opt07.png" width="620" height="162" alt="" onClick="showImage3()" /><div id="check03" class="check03"><img src="images/check.png" width="100" height="98" alt=""/></div></div><div><img id="opt04" src="images/cem-opt04.png" width="620" height="162" alt="" onClick="showImage4()" /><div id="check04" class="check04"><img src="images/check.png" width="100" height="98" alt=""/></div></div></div><div id="escorrrecto"><img src="images/buen-trabajo.png"  alt=""/></div></div>';
console.log(ActualPuntaje);	
	
/* FUNCION PARA DETENER EL RELOJ */		
function parar() {
  var canvas = document.getElementById("myCanvas");
  var stage = new createjs.Stage(canvas);
  createjs.Ticker.reset(); // Stop the ticker
  stage.removeAllEventListeners(); // Remove all event listeners
}
/* FUNCION PARA DETENER EL RELOJ */			
	

function showElement(elementId) {
  var element = document.getElementById(elementId);
  element.style.display = "block";
}

function hideElement(elementId) {
  var element = document.getElementById(elementId);
  element.style.display = "none";
}
	
function mensaje(i,resp) {
	
		/*efecto de audio*/
		var audio = document.getElementById("audio");
		audio.play();
		/*fin de efecto de audio*/
	
	if(i==1){
		parar(); //LLAMA FUNCION DETENER EL RELOJ
		//document.getElementById("escorrrecto").style.display ='block';
		if (element) { //corre solo si existe el div explicacion
		showElement("escorrrecto");
  				setTimeout(function() {
    					hideElement("escorrrecto");
				
					/**/
    				showElement("explicacion"); 
    					setTimeout(function() {
      						hideElement("explicacion");
    					}, 9000); // Delay in milliseconds before hiding "nextDiv"
					/**/
  				}, 1000); // Delay in milliseconds before hiding "escorrecto" and showing "nextDiv"
		
		
		setTimeout(() => { /*espera dos segundos */
				sessionStorage.setItem("Puntaje", ActualPuntaje+1);
				sessionStorage.setItem("PregNum", ActualPregNum);
				transitionToPage(''+SigPreg+'');
						 }, 5400 );
		} else {
			
			showElement("escorrrecto");
  				setTimeout(function() {
    					hideElement("escorrrecto");
				
					
  				}, 1900); // Delay in milliseconds before hiding "escorrecto" and showing "nextDiv"
		
		
		setTimeout(() => { /*espera dos segundos */
				sessionStorage.setItem("Puntaje", ActualPuntaje+1);
				sessionStorage.setItem("PregNum", ActualPregNum);
				transitionToPage(''+SigPreg+'');
						 }, 1200 );
			
			
		}
		
	} else {
		parar(); //LLAMA FUNCION DETENER EL RELOJ
		//document.getElementById("esincorrecto").style.display ='block';
				
				if (element) { //corre solo si existe el div explicacion
				showElement("esincorrecto");
  					setTimeout(function() {
    					hideElement("esincorrecto");
					/**/
    				showElement("explicacion");
    				setTimeout(function() {
      					hideElement("explicacion");
    				}, 9000); // Delay in milliseconds before hiding "nextDiv"
					/**/	
						
  				}, 1000); // Delay in milliseconds before hiding "escorrecto" and showing "nextDiv"
		
		
				setTimeout(() => { /*espera dos segundos */
				document.getElementById("respuestaID").value = i;
				sessionStorage.setItem("PregNum", ActualPregNum);
				transitionToPage(''+SigPreg+'');
			
						 }, 5400 )
					
				} // fin if element 
				else {
					
					
					showElement("esincorrecto");
  					setTimeout(function() {
    					hideElement("esincorrecto");
						
  				}, 1900); // Delay in milliseconds before hiding "escorrecto" and showing "nextDiv"
		
		
				setTimeout(() => { /*espera dos segundos */
				document.getElementById("respuestaID").value = i;
				sessionStorage.setItem("PregNum", ActualPregNum);
				transitionToPage(''+SigPreg+'');
			
						 }, 1200 )
					
				}
		
		
		
		
	}
}

	
const showImage1 = () => {
		if(presionado==0){
        //document.getElementById("check01").style.display ='block';
		document.getElementById("press01").style.display ='block';
		presionado =1;
		mensaje(RespOPT1,1);
		}
    }
const showImage2 = () => {
		if(presionado==0){
        //document.getElementById("check02").style.display ='block';
		document.getElementById("press02").style.display ='block';	
		presionado =1;
		mensaje(RespOPT2,2);
		}
    }
const showImage3 = () => {
		if(presionado==0){
        //document.getElementById("check03").style.display ='block';
		document.getElementById("press03").style.display ='block';
		presionado =1;
		mensaje(RespOPT3,3);
		}
    }
const showImage4 = () => {
		if(presionado==0){
        //document.getElementById("check04").style.display ='block';
		document.getElementById("press04").style.display ='block';
		presionado =1;
		mensaje(RespOPT4,4);
		}
    }



/*var audio = new Audio("images/musica.mp3");
audio.play();	*/