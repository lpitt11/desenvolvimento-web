let numeros = [12, 7, 3, 20, 15, 8, 44, 91, 10, 5];

for (let i = 0; i < numeros.length; i++) {
  const num = numeros[i];
  let tipo;

  if (num % 2 === 0) {
    tipo = "par";
  } else {
    tipo = "ímpar";
  }

  console.log(`O número ${num} é ${tipo}`);
}