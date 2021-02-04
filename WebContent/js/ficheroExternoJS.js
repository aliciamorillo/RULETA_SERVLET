/// JAVASCRIPT 

var negociador;

var cashCounter = 3;

var inputNumber;
var inputColor;
var inputEvenOrOdd;

var radioNumber;
var radioColor;
var radioParidad;

var randomNumber;
var btPlay;

var capaResultado = document.getElementById("capaResultado");

function play() {
 
	negociador = new XMLHttpRequest();
	
	var apuestaNumero = document.getElementById("enterNumber").value
	var apuestaColor = document.getElementById("enterColorRed").checked ? "Rojo" : "Negro";
	var apuestaParidad = document.getElementById("enterEven").checked ? "Par" : "Impar";

	
	negociador.open("GET", "CasinoServlet");

	negociador.onreadystatechange = function() {
			    
		if (negociador.readyState===4 && negociador.status===200) {
	    	
	    	var xml = negociador.responseXML;
	    	
	    	//var arrayResultados = xml.getElementsByTagName("resultados");
	    	//var number = arrayResultados[0].firstChild;
	    	//console.log(number)
	    
	    	var numero = xml.getElementsByTagName("numero");
	    	var numeroGanador = numero[0].firstChild.data;
	    	
	    	var color = xml.getElementsByTagName("color");
	    	var colorGanador = color[0].firstChild.data;
	    	
	    	var parImpar = xml.getElementsByTagName("parImpar");
	    	var paridadGanador = parImpar[0].firstChild.data;
	    	
	    	if(radioNumber.checked) {
	    		compararNumero(apuestaNumero, numeroGanador);
	    	} else if (radioColor.checked) {
	    		compararColor(apuestaColor, colorGanador)
	    	} else {
	    		compararParidad(apuestaParidad, paridadGanador)
	    	}
	    	
	    	document.getElementById("capaResultado").innerHTML = "NUMERO GANADOR _ " + numeroGanador + "_ " + colorGanador;
	    	
	    }	    
	}
	negociador.send(null);
}


function compararNumero(apuestaNumero, numeroGanador){
	
	
	
	if(apuestaNumero == numeroGanador){
		randomNumber.innerHTML = "GANASTE NUMERO";
		cashCounter += 5;
		console.log(cashCounter);
	} else {
		randomNumber.innerHTML = "PERDISTE NUMERO";
		cashCounter -= 1;
		console.log(cashCounter);
	}
	
	document.getElementById("cashCounter").innerHTML = cashCounter;
	
	if(cashCounter <= 0){
		//alert("FIN DEL JUEGO. RECARGA LA PÁGINA");
		document.getElementById("mensaje").innerHTML =
			"!!! SE ACABO EL JUEGO. RECARGA LA PAGINA !!! />";
		document.getElementById("btPlay").disabled = true;
	}
	
	console.log(apuestaNumero);
	console.log(numeroGanador);
}

function compararColor(apuestaColor, colorGanador){
	if(apuestaColor == colorGanador){
		randomNumber.innerHTML = "GANASTE COLOR";
		cashCounter += 2;
		console.log(cashCounter);
	} else {
		randomNumber.innerHTML = "PERDISTE COLOR";
		cashCounter -= 1;
		console.log(cashCounter);
	}
	
	document.getElementById("cashCounter").innerHTML = cashCounter;
	
	if(cashCounter == 0){
		//alert("FIN DEL JUEGO. RECARGA LA PÁGINA");
		document.getElementById("btPlay").disabled = true;
	}
	
	console.log(apuestaColor);
	console.log(colorGanador);
}

function compararParidad(apuestaParidad, paridadGanador){
	if(apuestaParidad == paridadGanador){
		randomNumber.innerHTML = "GANASTE PARIDAD";
		cashCounter += 2;
		console.log(cashCounter);
	} else {
		randomNumber.innerHTML = "PERDISTE PARIDAD";
		cashCounter -= 1;
		console.log(cashCounter);
	}
	
	document.getElementById("cashCounter").innerHTML = cashCounter;
	
	if(cashCounter <= 0){
		//alert("FIN DEL JUEGO. RECARGA LA PÁGINA");
		document.getElementById("btPlay").disabled = true;
	}
	
	console.log(apuestaParidad);
	console.log(paridadGanador);
}


function iniciar() {
	
	randomNumber = document.getElementById("randomNumber");
	
	radioNumber = document.getElementById("number");
	radioColor = document.getElementById("color");
	radioParidad = document.getElementById("evenOrOdd");
		
	inputNumber = document.getElementById("inputNumber");
	inputColor = document.getElementById("inputColor");
	inputEvenOrOdd = document.getElementById("inputEvenOrOdd");
	
	inputNumber.style.display = "block";
	inputColor.style.display = "none";
	inputEvenOrOdd.style.display = "none";
	
	document.getElementById("cashCounter").innerHTML = "Saldo disponible: <br/>" + cashCounter;
	
	document.getElementById("capaResultado").innerHTML = "INICIA LA RULETA !!";
	 
}


function mostrarCamposApuesta(event){
	
	var selectedValue = event.target.value;
		
	if(selectedValue == inputNumber.id){
		inputNumber.style.display = "block";
		inputColor.style.display = "none";
		inputEvenOrOdd.style.display = "none";

	} else if(selectedValue == inputColor.id){
		inputNumber.style.display = "none";
		inputColor.style.display = "block";
		inputEvenOrOdd.style.display = "none";
		
	} else {
		inputNumber.style.display = "none";
		inputColor.style.display = "none";
		inputEvenOrOdd.style.display = "block";
	}
}

function limitarNumero(){
    	        	
	var contenido = document.getElementById("enterNumber").value;
		        	
	if(contenido.length > 2){
		        		
		alert("ERROR: Solo puedes introducir un numero entre el 1 y el 36");
			        		
		var contenidoRecortado = contenido.substr(0,2);		        		
			 document.getElementById("enterNumber").value = contenidoRecortado;
			 }
}

function rangoNumeros(){
	
	var numero = parseInt(document.getElementById("enterNumber").value);
	//console.log(numero);
	
	if (numero >= 37){
		alert("ERROR: Solo puedes introducir un numero entre el 1 y el 36");
		
		var resetNumero = "";		        		
		 document.getElementById("enterNumber").value = resetNumero;
	}
}