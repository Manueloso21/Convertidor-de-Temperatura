function convertirTemperatura() {
    const valor = parseFloat(document.getElementById('inputValue').value);
    const unidadEntrada = document.getElementById('inputUnit').value;
    const unidadSalida = document.getElementById('outputUnit').value;
    let resultado = 0;
    let valorEnCelsius = 0;
    if (unidadEntrada === 'C') {
      valorEnCelsius = valor;
    } else if (unidadEntrada === 'F') {
      valorEnCelsius = (valor - 32) * 5 / 9;
    } else if (unidadEntrada === 'K') {
      valorEnCelsius = valor - 273.15;
    } else if (unidadEntrada === 'R') {
      valorEnCelsius = (valor - 491.67) * 5 / 9;
    }
    if (unidadSalida === 'C') {
      resultado = valorEnCelsius;
    } else if (unidadSalida === 'F') {
      resultado = (valorEnCelsius * 9 / 5) + 32;
    } else if (unidadSalida === 'K') {
      resultado = valorEnCelsius + 273.15;
    } else if (unidadSalida === 'R') {
      resultado = (valorEnCelsius * 9 / 5) + 491.67;
    }
  
    document.getElementById('result').textContent = resultado.toFixed(2);
  }