const { ObjectId } = require('mongodb')
const Pet = require('../src/models/petsModel')


/*
describe('POST route test', () => {
    const pet = new Pet ({
      species: "Gato",
      name: "Mimi",
      age: 2,
      sex: "F",
      description: "Gatinha na cor marrom",
      ONG: ObjectId()
    })    
    
    it('Deve salvar uma nova instancia de pet', () => {
      pet.save().then((item) => {
        expect(item.name).toBe(pet.name);
      });
    });
});
*


describe('GET route test', () => {
  const pet = new Pet({
    species: "Gato",
    name: "Mimi",
    age: 2,
    sex: "F",
    description: "Gatinha na cor marrom",
    ONG: ObjectId()
  })

  it('Deve chamar o schema e retornar o nome correto do pet', () => {
      expect(pet.name).toBe('Mimi');      
  });
});


/*
const { ObjectId } = require('mongodb')
const Pet = require('../src/models/petsModel')
jest.setTimeout(30000);

describe('Pet Models', () => {    
    it('Deve salvar uma nova instancia de pet', async () => {

      const pet = {
        species: "Gato",
        name: "Mimi",
        age: 2,
        sex: "F",
        description: "Gatinha na cor marrom",
        ONG: "62d9939be55d8dcfb57ca5da"
      }

      const newPet = new Pet(pet);
      const savedPet = await newPet.save();

      expect(savedPet.name).toEqual(pet.name);
    });
});
*/




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
  


/*
//Codigo de andreza:
const Doula = require("../src/models/doulasModels.js");

describe("Teste de models", () => {
  const doulas = new Doula({
    id: " 5 ",
    nome: "Andreza",
    cidade: "Recife",
    estado: "Pernambuco",
    contato: 987526987,
    email: "andreza@gmail.com",
  });

  it("Nova doula", () => {
    expect(doulas.nome).toBe("Andreza");
  });
  it("testar cidade", () => {
    expect(doulas.cidade).toBe("Recife");
  });
  it("testar estado", () => {
    expect(doulas.estado).toBe("Pernambuco");
  });
  it("testar contato", () => {
    expect(doulas.contato).toStrictEqual(987526987);
  });
  it("testar email", () => {
    expect(doulas.email).toBe("andreza@gmail.com");
  });
  it("Nova doula no banco de dados", () => {
    doulas.save().then((dados) => {
      expect(dados.title).toBe(" ");
    });
  });
});

*/