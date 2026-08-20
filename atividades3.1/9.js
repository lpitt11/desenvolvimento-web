const idades = [8, 15, 21, 12, 17, 45, 13];

idades.forEach((idade) => {
  let categoria;

  if (idade <= 12) {
    categoria = "Criança";
  } else if (idade <= 17) {
    categoria = "Adolescente";
  } else {
    categoria = "Adulto";
  }

  console.log(`Idade: ${idade} anos — Classificação: ${categoria}`);
});