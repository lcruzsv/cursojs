var valor1 = 0, varlor2 = 0, operador = '';

function presionarBoton(boton)
{

  if (boton.className == 'operador')
  {
    if (valor1 == 0)
    {
      valor1 = document.getElementById('resultado').value
    }
    else {
      valor2 = document.getElementById('resultado').value
    }

    if (boton.value == '=')
    {
        document.getElementById('resultado').value = valor1 + valor2;
    }
  }
  else {
    document.getElementById('resultado').value += 7;
  }
}
