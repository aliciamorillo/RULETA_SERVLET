package modelo;

public final class GenerarApuesta {
	
	static int valorNumero;
	
	static int[] rojos = {1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36};
	
	
	public static int aleatorioNumero(){
		
		final int valorNumero = (int)(Math.random() * (36) + 1);
		
		System.out.println(valorNumero);
		
		return valorNumero;		
	}
	
	public static String aleatorioColor(){
				
		boolean esNegro = true;
		String valorColor;
						
		for (int i=0; esNegro && i<rojos.length; i++) {
			
			if(rojos[i] == valorNumero) {
				esNegro = false;
			}
		}
		
		valorColor = esNegro ? "Negro" : "Rojo";
		
		System.out.println(valorColor);
		
		return valorColor;		
	}

	public static String aleatorioParidad(){
			
		String valorParidad;
				
		if (valorNumero % 2 == 0){
			valorParidad = "Par";
		} else { valorParidad = "Impar"; }
	
		return valorParidad;		
	}
	
	
	public static String ficheroXMLApuestas(int valorNumero, String valorColor, String valorParidad) {
		
		String ficheroXML = "<?xml version='1.0' encoding='UTF-8'?>";
		
		ficheroXML += "<juego>";		
		ficheroXML += "<numero>" + valorNumero + "</numero>";
		ficheroXML += "<color>" + valorColor + "</color>";
		ficheroXML += "<parImpar>" + valorParidad + "</parImpar>";
		ficheroXML += "</juego>";
		
		return ficheroXML;
	}
}
