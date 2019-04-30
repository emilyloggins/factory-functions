console.log("hi")

// PRACTICE: DOCTORS

const createDoctor = (name, specialty, location) => ({
    "name": name,
    "specialty": specialty,
    "location": location
});

const drLarry = createDoctor("Larry", "Oncology", "Austin, Texas");
console.log(drLarry)

const createPet = (name, breed) => ({
    "name": name,
    "breed": breed
});

const kennel = [];

const dogOne = createPet("Heidi", "Mutt");
const dogTwo = createPet("Mabel", "Pug");
const dogThree = createPet("Buddy", "Golden Retriever");

kennel.push(dogOne, dogTwo, dogThree)

console.log("Dogs in the kennel", kennel)

// PRACTICE: MUSIC ROW

jumpStopRecords = [];
chattenRecords = [];
polarRecords = [];

createCountryArtist = (name, age) => chattenRecords.push({
    "name": name,
    "age": age
})
createPopArtist = (name, age) => polarRecords.push({
    "name": name,
    "age": age
})
createFunkArtist = (name, age) => jumpStopRecords.push({
    "name": name,
    "age": age
})
createBluegrassArtist = (name, age) => chattenRecords.push({
    "name": name,
    "age": age
})
createRapArtist = (name, age) => jumpStopRecords.push({
    "name": name,
    "age": age
})

const artistOne = createCountryArtist("Bruce Atkins", 23);
const artistTwo = createPopArtist("Jensen Brown", 20);
const artistThree = createFunkArtist("Dre Funkz", 25);
const artistFour = createBluegrassArtist("Bartholomew Danielson", 23);
const artistFive = createRapArtist("Dusta Grimes", 21);

