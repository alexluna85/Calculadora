function convertToFahrenheit() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");

    // Realizar la conversión de Celsius a Fahrenheit
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9/5) + 32;

    // Mostrar el resultado en el campo de Fahrenheit
    fahrenheitInput.value = fahrenheit.toFixed(2);
  }

  function convertToBar() {
    var pascalInput = document.getElementById("pascal");
    var barInput = document.getElementById("bar");

    var pascal = parseFloat(pascalInput.value);
    var bar = (pascal/100000);

    barInput.value = bar;
  }

  function convertToGramos() {
    var kilosInput = document.getElementById("Kilos");
    var gramosInput = document.getElementById("gramos");

    var Kilos = parseFloat(kilosInput.value);
    var gramos = (Kilos*1000);

    gramosInput.value = gramos;
  }