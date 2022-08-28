let maximum = parseInt(prompt("Enter maximum number"));

while(!maximum){
    maximum = parseInt(prompt("Enter a valid number !!!"));
}

let targetNum = Math.floor(Math.random() * maximum) + 1;

console.log(targetNum);

let guess = parseInt(prompt("Enter your guess !"));

let attempt = 1;

while(guess !== targetNum) {

    attempt++;

    if(guess == 'q') break;

    if(guess > targetNum) {
        guess = parseInt(prompt("Too high !!! guess again !"));
    }
    else if(guess < targetNum) {
        guess = parseInt(prompt("Too low !!! guess again"));
    }
    else {
        guess = parseInt(prompt("Oops !! enter a number only !"));
    }
}

console.log(`It took you ${attempt} guesses.`);