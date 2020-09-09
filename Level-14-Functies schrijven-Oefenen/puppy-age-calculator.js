// You know how old your dog is in human years, but what about dog years? Calculate it!

// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
console.log('');
console.log('                   The Puppy Age Calculator');
console.log('                  ============================');
console.log('')

const calculateDogAge = (age) => {
    let dogAge = age * 7;
    let humanAge = dogAge / 7;
    console.log(`The age of Ness(my dog) in Human years is ${dogAge} years old. that is in Human Years ${humanAge}.`);
}

calculateDogAge(4);
calculateDogAge(5);
calculateDogAge(10);
console.log('');