const fetchCep = require("../js/utils/fetchCep");

test("testar fetch do cep", async () => {
  const dados = await fetchCep(51250260);
  expect(dados).toEqual({
    endereco: "Rua Ubyracy",
    bairro: "Jordão",
    cidade: "Recife",
    uf: "PE",
  });
});
