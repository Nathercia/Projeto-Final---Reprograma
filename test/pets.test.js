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




describe("Testes de GET, POST, PUT, DELETE do model de pets", () => {
  const pet = new Pet({
    species: "Gato",
    name: "Mimi",
    age: 2,
    sex: "F",
    description: "Gatinha na cor marrom",
    ONG: ObjectId()
  });

  it("Deve chamar o schema e retornar um pet com esse nome", () => {
    expect(pet.name).toBe("Mimi");
  });

  it("Deve chamar o schema e retornar um pet dessa espécie", () => {
    expect(pet.species).toBe("Gato");
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

