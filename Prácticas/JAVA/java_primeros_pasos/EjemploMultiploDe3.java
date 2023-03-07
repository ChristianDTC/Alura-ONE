package java_primeros_pasos;

public class EjemploMultiploDe3 {

	public static void main(String[] args) {

		// ejemplo1 con for
		for (int x = 1; x <= 100; x++) {

			if (x % 3 == 0) {
				System.out.print(x);
				System.out.print(" ");
			}
		}

		System.out.println();

		// ejemplo2 con for
		for (int x = 3; x <= 100; x += 3) {

			System.out.print(x);
			System.out.print(" ");
		}

		System.out.println();

		// ejemplo1 con while
		int contador = 1;
		while (contador <= 100) {

			if ((contador % 3) == 0) {
				System.out.print(contador);
				System.out.print(" ");
			}
			contador++;
		}

		System.out.println();

		// ejemplo2 con while
		contador = 3;
		while (contador <= 100) {

			System.out.print(contador);
			System.out.print(" ");

			contador += 3;
		}

		System.out.println();
	}

}
