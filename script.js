const inputIdade = document.getElementById("idade");
const btnVerificar = document.getElementById("btnVerificar");
const resultado = document.getElementById("resultado");

btnVerificar.addEventListener("click", () => {
  const valor = inputIdade.value.trim();

  if (valor === "" || Number(valor) < 0) {
    resultado.textContent = "Digite uma idade válida.";
    resultado.className = "menor";
    return;
  }

  const idade = Number(valor);

  if (verificarIdade(idade)) {
    resultado.textContent = "Maior de idade";
    resultado.className = "maior";
  } else {
    resultado.textContent = "Menor de idade";
    resultado.className = "menor";
  }
});
