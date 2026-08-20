const frutas = ["Banana", "Maçã", "Uva", "Abacaxi", "Morango"];

//for clássico
console.log("--- 1. Usando for clássico ---");
for (let i = 0; i < frutas.length; i++) {
  const fruta = frutas[i];
  let tamanho;

  if (fruta.length > 5) {
    tamanho = "Nome longo";
  } else {
    tamanho = "Nome curto";
  }

  console.log(`Índice ${i}: ${fruta} — ${tamanho}`);
}

//for...of 
console.log("\n--- 2. Usando for...of ---");
for (const [i, fruta] of frutas.entries()) {
  let tamanho;

  if (fruta.length > 5) {
    tamanho = "Nome longo";
  } else {
    tamanho = "Nome curto";
  }

  console.log(`Índice ${i}: ${fruta} — ${tamanho}`);
}

//forEach
console.log("\n--- 3. Usando forEach ---");
frutas.forEach((fruta, i) => {
  let tamanho;

  if (fruta.length > 5) {
    tamanho = "Nome longo";
  } else {
    tamanho = "Nome curto";
  }

  console.log(`Índice ${i}: ${fruta} — ${tamanho}`);
});

/*
O método `forEach` costuma ser o mais prático quando precisamos tanto do item quanto do índice, 
pois entrega ambos diretamente como parâmetros da callback sem a necessidade de contadores manuais. 
O `for...of` destaca-se pela legibilidade ao percorrer coleções quando o índice não é essencial, 
enquanto o `for` clássico oferece maior controle de fluxo (como usar `break` ou `continue`), porém 
exige uma sintaxe mais verborrágica.
*/