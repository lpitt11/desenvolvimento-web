const produtos = [
  { nome: "Teclado", preco: 120.00 },
  { nome: "Mousepad", preco: 35.00 },
  { nome: "Fone de Ouvido", preco: 85.00 },
  { nome: "Cabo HDMI", preco: 25.00 }
];

for (const produto of produtos) {
  let classificacao;

  if (produto.preco < 50) {
    classificacao = "Barato";
  } else {
    classificacao = "Caro";
  }

  console.log(`O produto ${produto.nome} custa R$ ${produto.preco.toFixed(2)} e é classificado como ${classificacao}.`);
}