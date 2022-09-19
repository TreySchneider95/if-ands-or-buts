const prompt = require('prompt-sync')({sigint: true});

const RPSObj = {
    "rock":1,
    "paper":2,
    "scissors":3,
}

console.log('Welcome to rock paper scissors! Type "end" any time to end the game.')


let p1Score = 0
let p2Score = 0
let endGame = true


while(endGame){
    // Game inputs
    let p1 = prompt('Player 1, enter "rock", "paper", or "scissors": ').toLowerCase()
    let p2 = prompt('Player 2, enter "rock", "paper", or "scissors": ').toLowerCase()
    if(p1 === 'end' || p2 === 'end'){
        // Checks if either player is ready to end the game If one is it will then jump to telling the score and end the loop
        endGame = false
    }else if(!Object.keys(RPSObj).includes(p1) || !Object.keys(RPSObj).includes(p2)){
        // Checks if the input is valid by getting the keys of the rps object and checking if that includes the input
        console.log("Invalid input")
    }else{
        if(p1 === p2){
            // Checks for a tie by seeing if they are the same
            console.log("Tie")
        }else if(RPSObj[p1] - RPSObj[p2] === 2 || RPSObj[p1] - RPSObj[p2] === -1){
            // Subtracts the p1 input from the p2 input and checks the two posible outputs that would allow p2 to win
            console.log("Player 2 wins")
            p2Score += 1
        }else{
            // If your not tied or p2 couldnt win that means p1 will win
            console.log("Player 1 wins")
            p1Score += 1
        }
    }
    console.log(`Score: p1 - ${p1Score}, p2 - ${p2Score}`)
}
