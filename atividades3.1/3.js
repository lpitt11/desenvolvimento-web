const temperaturas = [31, 28, 14, 18, 33, 12, 22];

temperaturas.forEach((temp, index) => {
  let clima;

  if (temp >= 30) {
    clima = "Quente";
  } else if (temp >= 15) {
    clima = "Ameno";
  } else {
    clima = "Frio";
  }

  console.log(`Dia ${index + 1}: ${temp}°C — Clima: ${clima}`);
});