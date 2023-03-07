
public class CuentaCorriente extends Cuenta {

	public CuentaCorriente( int agencia, int numero) {
		super(agencia, numero);
	}
	
	@Override
	public void saca(double valor)throws SaldoInsuficienteException {
		double valorASacar = valor + 0.2;
		super.saca(valorASacar);
	}

	@Override
	public void deposita(double valor) {
		// TODO Auto-generated method stub
		
	}
	
}