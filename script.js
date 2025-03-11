const choices = document.querySelectorAll(".choice");
const userChoiceElement = document.getElementById("user-choice");
const computerChoiceElement = document.getElementById("computer-choice");
const resultElement = document.getElementById("result");

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.id;
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);

    userChoiceElement.textContent = `Your choice: ${userChoice}`;
    computerChoiceElement.textContent = `Computer's choice: ${computerChoice}`;
    resultElement.textContent = `Result: ${result}`;
  });
});


function getComputerChoice(){
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(userChoice, computerChoice){
  if(userChoice === computerChoice){
    return "It's a tie!";
  } 
  
  else if(
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") || 
    (userChoice === "scissors" && computerChoice === "paper")
  )
  {
    return "You won!";
  }

  else {
    return "You lost!";
  }
}