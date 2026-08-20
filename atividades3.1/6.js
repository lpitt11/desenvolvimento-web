const vendas = [450, 600, 300, 850, 500, 200];
let total = 0;
const mediaFixa = 500;

vendas.forEach((venda) => {
  total += venda;
  let desempenho;

  if (venda > mediaFixa) {
    desempenho = "Acima da média";
  } else {
    desempenho = "Abaixo da média";
  }

  console.log(`Venda de R$ ${venda}: ${desempenho}`);
});

console.log(`Total acumulado das vendas: R$ ${total}`);