const Pet = require('../src/models/petsModel')
const { ObjectId } = require('mongodb')


test('Deve criar um pet', async () => {
  
  const pet = {
    species: "Gato",
    name: "Mimi",
    age: 2,
    sex: "F",
    description: "Gatinha na cor marrom",
    ONG: ObjectId()
  }

  console.log(pet)

  const newPet = new Pet(pet)    
  const savedPet = await newPet.save()

  await expect(savedPet.name).resolves.toBe(newPet.name)  
})