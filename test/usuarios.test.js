const Usuario = require('../src/models/usuarioModel')

describe("Testes de GET, POST, PUT, DELETE do model de usuarios", () => {
  const usuario = new Usuario({
    name: "Usuario teste",
    email: "usuario@gamail.com",
    password: "12345678",
    type: "usuario"
  })
  
  it("Deve chamar o schema e retornar um usuario com esse nome", () => {
    expect(usuario.name).toBe("Usuario teste");
  });
  
  it("Deve chamar o schema e retornar um usuario com esse email", () => {
    expect(usuario.email).toBe("usuario@gamail.com");
  });

  it("Deve salvar no banco de dados o novo abrigo", () => {
    usuario.save().then((dados) => {
      expect(dados.name).toBe("Usuario teste");
    });
  });
  
  it("Deve alterar o dado e salvar no banco de dados", () => {
    usuario.name = "Novo nome"
    usuario.save().then((dados) => {
      expect(dados.name).toBe("Novo nome");
    })
  });
  
  it("Deve deletar um dado no banco de dados", () => {
    usuario.save().then((dados) => {
      usuario.delete().then((novosdados) =>{
        expect(dados.name).toBe(null);
      })
    })
  });
});


