<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML>

<html>

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>MASTER JAVA</title>
		
		<script type="text/javascript" src = "js/ficheroExternoJS.js"></script>
        <link rel="stylesheet" type="text/css" href="css/styles.css"/>
        
	</head>
	
	<body onload="iniciar();" style="background-image: url('imagenes/grey.jpg');">
	
		<div align="center" class="mainPage">
		
			<h1 id="h1">RULETA XML</h1>
			
			<div class="mainPicture">
				<img src="imagenes/ruleta.jpg">
				
				<div id="capaResultado"></div>
			</div>
			
			<div id="mensaje"></div>
			
				<aside class="aside">
				
					<div class="cashCounter" id="cashCounter"></div>
					
					<div class="randomNumber" id="randomNumber"></div>
					
					<div class="radioButton" id="radioButton">
					
						<label>AL NUMERO
							<input type="radio" name="option" value="inputNumber" id="number" checked
								onclick="mostrarCamposApuesta(event);"/>
						</label>
						
						<br/>
						
						<label> AL COLOR
							<input type="radio" name="option" value="inputColor" id="color"
								onclick="mostrarCamposApuesta(event);"/>
						</label>
						
						<br/>
								
						<label> AL PAR/IMPAR
							<input type="radio" name="option" value="inputEvenOrOdd" id="evenOrOdd"
								onclick="mostrarCamposApuesta(event)"/>
						</label>
						
					</div>
					
					<div class="inputNumber" id="inputNumber">
						<p>ELIGE NUMERO [1..36]</p>
							<input type="number" name="" value="" id="enterNumber" onkeyup="limitarNumero(); rangoNumeros();"
									title="Introduce un valor entre 1 y 36" maxlength=2 min="1" max="36" step="1"/>
									
					</div>
					
					<div class="inputNumber" id="inputColor">
						<p>ELIGE COLOR [ROJO O NEGRO]</p>
							ROJO <input type="radio" name="color" value="" id="enterColorRed"/>
							<br/>
							NEGRO <input type="radio" name="color" value="" id="enterColorBlack"/>
					</div>
					
					<div class="inputNumber" id="inputEvenOrOdd">
						<p>ELIGE PAR O IMPAR</p>
							PAR <input type="radio" name="color" value="enterEven" id="enterEven"/>
							<br/>
							IMPAR <input type="radio" name="color" value="enterOdd" id="enterOdd"/>
					</div>
					
					<div class="button">
						<button onclick="play();" id="btPlay">JUGAR</button>
					</div>
				
				</aside>
							
		</div>
	
	</body>
	
</html>