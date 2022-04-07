var myStr = "Paragon is the best!";

function useMethods(str) {
    var myReverse;
       var mojaRijec = str.split('');
       var mojaNovaRijec = mojaRijec.reverse();
       var mojaZadnjaRijec = mojaNovaRijec.join('');
       myReverse = mojaZadnjaRijec;
       
       
       var countCharacters = myReverse.map(str=> str.length)
    return {myReverse, countCharacters};
};

console.log(useMethods(myStr));


// Create a string named myStr with Paragon is the best! text value.
// Create a function named useMethods with a parameter str.
// Inside the function useMethods,
// ● use necessary methods to get the reverse input string stored into the myReverse variable;
// ● use necessary methods to get the number of characters in each word stored into the
// countCharacters variable.
// The function useMethods must return an object with the myReverse and countCharacters variables.
// Have the following setup as the step 1 for the index.js file:


// Have the folder ex02 on Repo11 public repository, containing folder src with the file index.js;
// ● Do not change the code located below/above the specified comment;
// ● Use .split() to splits a string into an array of substrings;
// ● Use .reverse() to reverses the order of the elements in an string;
// ● Use .join() to returns an array as a string with separator “”;
// ● Use .map() to count characters in every word;
// ● useMethods should return the object with the myReverse and countCharacters variables;
// Example: { myReverse: '!tseb eht si nogaraP', countCharacters: [ 5, 3, 2, 7 ] }