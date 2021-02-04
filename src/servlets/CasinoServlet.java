package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import modelo.GenerarApuesta;

public class CasinoServlet extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		
		procesarPeticion(request, response);
		}
		
	
	private void procesarPeticion(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		
		int numero = GenerarApuesta.aleatorioNumero();
		
		String color = GenerarApuesta.aleatorioColor();
		
		String paridad = GenerarApuesta.aleatorioParidad();
		
		//System.out.println(numero);
		//System.out.println(color);
		//System.out.println(paridad);
		
		
		String ficheroXML = GenerarApuesta.ficheroXMLApuestas(numero, color, paridad);
		
		response.setContentType("text/xml");
		
		PrintWriter escritor = response.getWriter();
		
		escritor.print(ficheroXML);
		
		escritor.flush();
		escritor.close();
		
	}
}
