var myPetsArray = ["Dog", "Cat"];

function myArrayFunction(myPets) {
     var myNewPets = myPets;
      myNewPets.push("Bird", "Fish");
    
      
      var firstPet = myNewPets.shift()
         myPets.unshift("Lion");
      var lastPet = myNewPets.pop();
      
      console.log(typeof(myNewPets));
      console.log(firstPet, lastPet);
      
      return myNewPets;
}

console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;