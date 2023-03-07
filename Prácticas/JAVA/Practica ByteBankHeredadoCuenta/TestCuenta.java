
public class TestCuenta {
	
	public static void main(String[] args) {
		

	    CuentaCorriente cc = new CuentaCorriente(111, 111);
	    cc.deposita(100.0);

	    CuentaAhorro cp = new CuentaAhorro(222, 222);
	    cp.deposita(100.0);
	    
	    cc.transfiere(10.0, cp);
	    System.out.println("CC: " + cc.getSaldo());
	    System.out.println("CP: " + cp.getSaldo());
		
	}

}
