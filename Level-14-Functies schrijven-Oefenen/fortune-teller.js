// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.
console.log('');
console.log('                     Fortune Teller');
console.log('                  ======================');


console.log('')
const tellFortune = (jobTitle, geographicLocation, partnerName, numberChildren) => {
    console.log(`You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberChildren} kids.`);
}

tellFortune('Programmer', 'Hoogvliet', 'Natasja', 2);
tellFortune('Personal Coach', 'Netherland', 'Natasja', 2);
tellFortune('Miljonaire', 'europe', 'Natasja', 2);
console.log('');