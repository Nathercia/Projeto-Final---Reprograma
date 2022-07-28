const Abrigo = require('../src/models/abrigosModel')

describe("Testes de GET, POST, PUT, DELETE do model de abrigos", () => {
  const abrigo = new Abrigo({
    name: "abrigo para teste",
    address: {
        city: "Fortaleza",
        district: "Cambeba",
        street: "Rua Nossa Senhora do Socorro"
    },
    contact: "9999-9999",
    description: "Somos uma ong que abriga cães e gatos",
    forms_of_donation: {
        pix: "999999999",
        donations: "racao"
    },
    email: "abrigo_teste_auth@gmail.com",
    password: "12345678",
    type: "Abrigo"
  });

  it("Deve chamar o schema e retornar um abrigo com esse nome", () => {
    expect(abrigo.name).toBe("abrigo para teste");
  });

  it("Deve chamar o schema e retornar um abrigo com essa cidade", () => {
    expect(abrigo.address.city).toBe("Fortaleza");
  });

  it("Deve chamar o schema e retornar um abrigo com esse telefone", () => {
    expect(abrigo.contact).toBe("9999-9999");
  });

  it("Deve chamar o schema e retornar um abrigo com essa descrição", () => {
    expect(abrigo.description).toBe("Somos uma ong que abriga cães e gatos");
  });

  it("Deve chamar o schema e retornar um abrigo com essa forma de doação", () => {
    expect(abrigo.forms_of_donation.pix).toBe("999999999");
  });

  it("Deve chamar o schema e retornar um abrigo com esse email", () => {
    expect(abrigo.email).toBe("abrigo_teste_auth@gmail.com");
  });
  
  it("Deve salvar no banco de dados o novo abrigo", () => {
    abrigo.save().then((dados) => {
      expect(dados.name).toBe("abrigo para teste");
    });
  });

  it("Deve alterar o dado e salvar no banco de dados", () => {
    abrigo.name = "Novo nome"
      abrigo.save().then((dados) => {
        expect(dados.name).toBe("Novo nome");
    })
  });

  it("Deve deletar um dado no banco de dados", () => {
    abrigo.save().then((dados) => {
      abrigo.delete().then((novosdados) =>{
          expect(dados.name).toBe(null);
      })
    })
  });

})


