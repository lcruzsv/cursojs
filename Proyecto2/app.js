var valor1 = '', valor2 = '', operador = '';
var limpiar = false;

var inputs = document.getElementsByTagName('button');

for(var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = function(){
        presionarBoton(this);
    };
}


function presionarBoton(boton)
{
  if (limpiar)
  {
    limpiar = false;
    document.getElementById('resultado').value = "";
  }

  if (boton.className == 'operador')
  {
    if (valor1 == '')
    {
      valor1 = document.getElementById('resultado').value
      document.getElementById('resultado').value = "";

    }
    else {
      valor2 = document.getElementById('resultado').value
      document.getElementById('resultado').value = "";
    }

    if ( boton.id != '=' )
    {
      operador = boton.id;
    }

    //Calcular
    if (  valor2 != '' && valor1 != '' )
    {
        console.log( valor1 + ' ' +  operador + ' ' + valor2  );
        switch (operador)
        {
          case '+':
              document.getElementById('resultado').value = parseFloat(valor1) + parseFloat(valor2);
              break;
          case '-':
              document.getElementById('resultado').value = parseFloat(valor1) - parseFloat(valor2);
              break;
          case '/':
              document.getElementById('resultado').value = parseFloat(valor1) / parseFloat(valor2);
              break;
          case '*':
              document.getElementById('resultado').value = parseFloat(valor1) * parseFloat(valor2);
              break;
          default:
        }
        valor1 = document.getElementById('resultado').value;
        limpiar = true;
    }
  }
  else {
    document.getElementById('resultado').value += boton.id;
  }

  if (boton.id == 'C') {
    valor1 = '';
    valor2 = '';
    document.getElementById('resultado').value = '';
    operador = '';

  }

}
