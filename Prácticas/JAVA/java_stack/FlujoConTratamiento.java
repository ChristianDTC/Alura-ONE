package java_stack;

public class FlujoConTratamiento {

	public static void main(String[] args) {
		System.out.println("Inicio del main");
		try {
			metodo1();
		} catch (ArithmeticException | NullPointerException ex) {
			String msg = ex.getMessage();
			System.out.println("ArithmeticException " + msg);
			ex.printStackTrace();
		}
		System.out.println("Fin del main");
	}

	private static void metodo1() {
		System.out.println("Inicio del metodo1");
		metodo2();
		System.out.println("Fin del metodo1");
	}

	private static void metodo2() {
		System.out.println("Inicio del metodo2");
		//ArithmeticException exception = new ArithmeticException();
		//throw exception;
		throw new ArithmeticException("Surgio un Error");
	}
	
}
