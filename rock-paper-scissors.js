const prompt = require('prompt-sync')({sigint: true});

const RPSObj = {
    "rock":1,
    "paper":2,
    "scissors":3,
}

let p1 = prompt('Player 1, enter "rock", "paper", or "scissors": ').toLowerCase()
let p2 = prompt('Player 2, enter "rock", "paper", or "scissors": ').toLowerCase()

if(!Object.keys(RPSObj).includes(p1) || !Object.keys(RPSObj).includes(p2)){
    console.log("Invalid input")
}else{
    if(p1 === p2){
        console.log("Tie")
    }else if(RPSObj[p1] - RPSObj[p2] === 2 || RPSObj[p1] - RPSObj[p2] === -1){
        console.log("Player 2 wins")
    }else{
        console.log("Player 1 wins")
    }
}
