// Arrays of possible titles and names
const titles = ['Dr.', 'Missus', 'Ms.', 'Sir', 'Mr.', 'Miss', 'Lord', 'Lady', 'Ma', 'Lil'];
const firstNames = ['Bodkin', 'Susie', 'Billy', 'Tim', 'Jimmeroo', 'Bob', 'Cathy', 'Leonard', 'Yurmy'];
const lastNames = ['Van Winklehorn', 'Ba Borkin', 'McLarter', 'Van Yaxley', 'Winkelvoss', 'De Gambo', 'Lalorna'];

//Function to select a random title or name
function getRandomItem(arr) {
    const num = Math.floor(Math.random() * arr.length);
    return arr[num];
};

// selects title, first name, and last and prints to console.
const title = getRandomItem(titles);
const firstName = getRandomItem(firstNames);
const lastName = getRandomItem(lastNames);

console.log(`Your Dr. Suess name is ${title} ${firstName} ${lastName}!`);