const { ObjectId } = require('mongodb')
const Pet = require('../src/models/petsModel')


describe("Testes de model de pets", () => {
  const ongId = ObjectId()
  const pet = new Pet({
    species: "Gato",
    name: "Mimi",
    age: 2,
    sex: "F",
    description: "Gatinha na cor marrom",
    ONG: ongId
  });
  
  it("Testa o nome", () => {
    expect(pet.species).toBe("Gato");
  });
  
  it("Testa a espécie", () => {
    expect(pet.name).toBe("Mimi");
  });
  
  it("Testa a idade", () => {
    expect(pet.age).toBe(2);
  });
  
  it("Testa o sexo", () => {
    expect(pet.sex).toBe("F");
  });
  
  it("Testa a descrição", () => {
    expect(pet.description).toBe("Gatinha na cor marrom");
  });
  
  it("Testa a ONG", () => {
    expect(pet.ONG).toBe(ongId);
  });  
  
  it("Deve salvar no banco de dados o novo pet", () => {
    pet.save().then((dados) => {
      expect(dados.name).toBe("Mimi");
    });
  });
  
  it("Deve alterar o dado e salvar no banco de dados", () => {
    pet.name = "Novo nome"
    pet.save().then((dados) => {
      expect(dados.name).toBe("Novo nome");
    })
  });
  
  it("Deve deletar um dado no banco de dados", () => {
    pet.save().then((dados) => {
      pet.delete().then((novosdados) =>{
        expect(dados.name).toBe(null);
      })
    })
  });
})  

