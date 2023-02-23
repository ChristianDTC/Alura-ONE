
public class TestClaseCuenta {

	public static void main(String[] args) {

        Cuenta miCuenta = new Cuenta(2, 2);
        miCuenta.deposita(500);
        Cuenta otraCuenta = miCuenta;
        otraCuenta.deposita(1000);

        System.out.println(miCuenta.getSaldo());
    }
	
}
