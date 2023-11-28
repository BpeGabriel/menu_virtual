const fetchCep = async (cep) => {
  if (cep != "") {
    // Expressao regular para validar o CEP
    var validaCep = /^[0-9]{8}$/;

    if (validaCep.test(cep)) {
      const response = await fetch("https://viacep.com.br/ws/" + cep + "/json");
      const dados = await response.json();
      if (!dados.erro) {
        return {
          endereco: dados.logradouro,
          bairro: dados.bairro,
          cidade: dados.localidade,
          uf: dados.uf,
        };
      } else {
        throw new Error(
          "CEP não encontrado. Preencha as informações manualmente."
        );
      }
    } else {
      throw new Error("Formato do CEP inválido.");
    }
  } else {
    throw new Error("Informe o CEP, por favor.");
  }
};

module.exports = fetchCep;
