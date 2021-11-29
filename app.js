// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const winsEl = document.getElementById('wins');
const losesEl = document.getElementById('losses');

// initialize state
const hidingPlaces = [
    'tree',
    'shed',
    'boulder'
];

let correctGuesses = 0;
let totalGuesses = 0;
let lost = 0;



function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);

    return arr[index];
}



function handleGuess(userGuess, correctSpot) {
    // should reset the styles
    resetStyles();
    // then increment the guesses
    totalGuesses++;
    // then grab the appropriate container element for the correct guess from the DOM
    // correctSpot = correctGuess
    // console.log(correctSpot, 'correct ANswer');
    // then add the face class to that element so that the face shows up
    document.getElementById(`${correctSpot}-container`).classList.add('face');


    // getElementById(hidingPlaces[correctSpot+${})
    // then if the user guess is correct, increment the correct guesses
    if (userGuess === correctSpot) {
        correctGuesses++;

    }
    else {
        lost++;
    }
    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
    totalEl.textContent = totalGuesses;
    winsEl.textContent = correctGuesses;
    losesEl.textContent = lost;
}

function resetStyles() {
    // should remove the face class from all containers
    shedContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
}

shedButton.addEventListener('click', () => {
    // should get a random item to call the 'correct spot'
    let randNum = getRandomItem(hidingPlaces);

    // console.log(randNum);
    // then use that correct spot to 'handle the guess' using the handleGuess function
    handleGuess(hidingPlaces[1], randNum);
});

treeButton.addEventListener('click', () => {
    // should get a random item to call the 'correct spot'
    let randNum = getRandomItem(hidingPlaces);  
      // then use that correct spot to 'handle the guess' using the handleGuess function
    // console.log(randNum, 'tree btn randNum');
    // console.log(hidingPlaces[0], 'Hiding');
    // console.log(correctGuess, 'Coreect Guess Tree');
    handleGuess(hidingPlaces[0], randNum);
});

boulderButton.addEventListener('click', () => {
    // should get a random item to call the 'correct spot'
    let randNum = getRandomItem(hidingPlaces);    // then use that correct spot to 'handle the guess' using the handleGuess function
    // console.log(randNum);

    handleGuess(hidingPlaces[2], randNum);
});
