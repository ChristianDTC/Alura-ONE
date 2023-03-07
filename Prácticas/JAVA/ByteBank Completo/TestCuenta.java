
public class TestCuenta {

	public static void main(String[] args) throws SaldoInsuficienteException  {
		CuentaCorriente cc = new CuentaCorriente (111, 111);
        cc.deposita(100.0);

        CuentaAhorros ca = new CuentaAhorros(222, 222);
        ca.deposita(200.0);

        cc.transfiere(110.0, ca);

        System.out.println("CC: " + cc.getSaldo());
        System.out.println("CA: " + ca.getSaldo());
	}
	
}