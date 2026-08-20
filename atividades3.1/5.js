const usuarios = [
  { nome: "Ana", idade: 22 },
  { nome: "Carlos", idade: 15 },
  { nome: "Beatriz", idade: 18 },
  { nome: "João", idade: 10 }
];

for (const usuario of usuarios) {
  let situacao;

  if (usuario.idade >= 18) {
    situacao = "Maior de idade";
  } else {
    situacao = "Menor de idade";
  }

  console.log(`Usuário: ${usuario.nome}, Idade: ${usuario.idade} anos — ${situacao}.`);
}