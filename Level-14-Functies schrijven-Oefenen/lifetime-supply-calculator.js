// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.
console.log('');
console.log('                   The Lifetime Supply Calculator');
console.log('                  ================================');
console.log('')

const calculateSupply = (age, amountPerDay) => {
    const maxAge = 100;
    let supplyNeeded = (Math.floor(amountPerDay) * 365) * (maxAge - age);
    console.log(`You will need ${supplyNeeded} theebags to last you until the ripe old age of ${age}`);

}
calculateSupply(52.5, 2);
console.log('');