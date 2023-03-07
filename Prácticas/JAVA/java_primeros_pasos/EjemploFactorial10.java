package java_primeros_pasos;

public class EjemploFactorial10 {
	
	public static void main(String[] args) {
		
		int factorial = 10;
		int acumulador = 1;
		
		for (int indice = 1; indice <= factorial; indice++) {
			
			acumulador *= indice;
			System.out.println("Factorial de " + indice + " = " + acumulador);
			
		}
		
	}

}
