const senhas = ["123456", "senhaSegura123", "abc", "minhasenha", "1234567"];

for (let i = 0; i < senhas.length; i++) {
  const senha = senhas[i];

  if (senha.length >= 8) {
    console.log(`A senha "${senha}" é válida`);
  } else {
    console.log(`A senha "${senha}" é inválida`);
  }
}