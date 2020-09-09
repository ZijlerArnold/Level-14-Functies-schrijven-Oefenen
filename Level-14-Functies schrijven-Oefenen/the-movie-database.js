// function printMovie(movie) {
// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: 
// title (a string), duration (a number), and stars (an array of strings).

// Create a function to print out the movie information like so: 
// "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
console.log('');
console.log('                          Movie dataBase');
console.log('                         ==================');
console.log('')

const myMovies = {
    title: 'Snooperman',
    duration: 45,
    stars: ['Bathman', 'Breadman', 'Boy no Wonder']
};

function printMovie(movie) {
    console.log(`${movie.title} lasts for ${movie.duration} minutes`);
    console.log(`stars ${movie.stars.join(', ')}`);
}
printMovie(myMovies);
console.log('')















// function printMovie(movie) {
//     console.log(`${movie.title} lasts for ${movie.duration} minutes.`);

//     let starsList = 'stars: ';
//     for (i = 0; i < movie.stars.length; i++) {
//         starsList += movie.stars[i];
//         if (i != movie.stars.length - 1) {
//             starsList += ', ';
//         }
//     }
//     console.log(starsList); // arry inhoud van stars
// }

// printMovie(myMovies);



