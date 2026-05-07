const btns = document.querySelectorAll("button");
const display = document.querySelector("h2");
const userC = document.querySelector(".userc")
const computerC = document.querySelector(".computerc")


 btns.forEach((btn) =>{
    btn.addEventListener("click", ()=>{

        let userChoice = btn.id;
        console.log(userChoice);

        let choice = ["rock", "paper", "scissor"];
        let randomInx = Math.floor(Math.random()*3);
        let computerChoice = choice[randomInx];

        if(userChoice === computerChoice){
            display.innerText = "Draw🥷";
        } 
        else if(userChoice === "rock" && computerChoice === "scissor" ||
            userChoice === "paper" && computerChoice === "rock" || 
            userChoice === "scissor" && computerChoice === "paper"){
             display.innerText = "you🎆Win🎊";
        }
        else{
            display.innerText = "Computer Wins";
        }

        userC.innerText = `You Choose: ${userChoice}`;
        computerC.innerText = `Computer Choose: ${computerChoice}`;

    

        
    });
 });