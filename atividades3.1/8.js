const estoque = [
  { item: "Caderno", quantidade: 15 },
  { item: "Caneta", quantidade: 5 },
  { item: "Borracha", quantidade: 8 },
  { item: "Mochila", quantidade: 12 }
];

for (const produto of estoque) {
  let acao;

  if (produto.quantidade < 10) {
    acao = "Repor estoque";
  } else {
    acao = "Estoque OK";
  }

  console.log(`Item: ${produto.item} | Quantidade disponível: ${produto.quantidade} | Status: ${acao}`);
}