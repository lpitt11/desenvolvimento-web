const notas = [7.5, 5.0, 8.2, 4.5, 9.0, 6.0];

for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  let situacao;

  if (nota >= 6) {
    situacao = "Aprovado";
  } else {
    situacao = "Reprovado";
  }

  console.log(`Posição ${i}: Nota ${nota} — Situação: ${situacao}`);
}