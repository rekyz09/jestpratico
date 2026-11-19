function verificarIdade(idade) {
  return idade >= 18;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = verificarIdade;
}
