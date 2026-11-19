const verificarIdade = require("./idade");

describe("Testes da função verificarIdade", () => {
  test("deve retornar true para uma idade adulta (25)", () => {
    expect(verificarIdade(25)).toBe(true);
  });

  test("deve retornar false para um menor de idade (15)", () => {
    expect(verificarIdade(15)).toBe(false);
  });

  test("deve retornar true para a idade limite (18)", () => {
    expect(verificarIdade(18)).toBe(true);
  });
});