const choice = document.querySelector('.choices-container');
const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');
const player = document.querySelector('.playerScore');
const computer = document.querySelector('.computerScore');
const playerSign = document.querySelector('.playerSign');
const computerSign = document.querySelector('.computerSign');
const modal = document.querySelector('.show-modal');
const prompt = document.querySelector('.prompt')
const playAgain = document.querySelector('.playAgain');
const modalEffect = document.querySelector('.modal-effect');
let pScore = 0;
let cScore = 0;

function getComputerChoice()
{
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choices.length); //since math.random generates random number between 0 and 1, multiplying it to the number of indexes of the string and rounding it down using math.floor generates random number from 0 up to the string length (3)
    return choices[random];
}

function scoreHandler(flag)
{
    if (flag)
    {
        pScore++;
        player.textContent = 'Player:  ' + `${pScore}`;
    }

    else
    {
        cScore++
        computer.textContent = 'Computer:  ' + `${cScore}`;
    }

    if (pScore == 5 || cScore == 5)
    {
        modal.classList.remove('hide-modal');
        modalEffect.classList.add('active');
        choice.removeEventListener('click', game);

        if (pScore > cScore) 
            prompt.textContent = 'You won!'; //you won
        else   
            prompt.textContent = 'You lost!'; //you lost
    }
}

function playRound(playerSelection, computerSelection)
{
    let flag = false;

    switch(playerSelection)
    {
        case 'rock':
            if (computerSelection == 'scissors')
            {
                playerSign.textContent = '✊';
                computerSign.textContent = '✌';
                text1.textContent = 'You won!';
                text2.textContent = 'Rock beats scissors';
                scoreHandler(true);
            }
                
            else if (computerSelection == 'paper')
            {
                playerSign.textContent = '✊';
                computerSign.textContent = '✋';
                text1.textContent = 'You lost!';
                text2.textContent = 'Rock was beaten by paper';
                scoreHandler(false);
            }

            else
            {
                playerSign.textContent = '✊';
                computerSign.textContent = '✊';
                text1.textContent = "It's a tie!";
                text2.textContent = 'Rock ties rock';
                break;
            }

            break;

        case 'paper':
            if (computerSelection == 'rock')
            {
                playerSign.textContent = '✋';
                computerSign.textContent = '✊';
                text1.textContent = 'You won!';
                text2.textContent = 'Paper beats rock';
                scoreHandler(true);
            }

            else if (computerSelection == 'scissors')
            {
                playerSign.textContent = '✋';
                computerSign.textContent = '✌';
                text1.textContent = 'You lost!';
                text2.textContent = 'Paper was beaten by scissors';
                scoreHandler(false);
            }

            else
            {
                playerSign.textContent = '✋';
                computerSign.textContent = '✋';
                text1.textContent = "It's a tie!";
                text2.textContent = 'Paper ties paper';
                break;
            }
                
            break;

        case 'scissors':
            if (computerSelection == 'rock')
            {
                playerSign.textContent = '✌';
                computerSign.textContent= '✊';
                text1.textContent = 'You lost!';
                text2.textContent = 'Scissors was beaten by rock';
                scoreHandler(false);
            }

            else if (computerSelection == 'paper')
            {
                playerSign.textContent = '✌';
                computerSign.textContent = '✋';
                text1.textContent = 'You won!';
                text2.textContent = 'Scissors beats paper';
                scoreHandler(true);
            }   

            else
            {
                playerSign.textContent = '✌';
                computerSign.textContent = '✌';
                text1.textContent = "It's a tie!";
                text2.textContent = 'Scissors ties scissors';
                break;
            }
            break;
    }
}

function game(e)
{
    const playerChoice = e.target.getAttribute('data-choice');
    playRound(playerChoice, getComputerChoice());
}

function reset()
{
    modal.classList.add('hide-modal');
    modalEffect.classList.remove('active');
    pScore = 0;
    cScore = 0;
    playerSign.textContent = '❔';
    computerSign.textContent = '❔';
    text1.textContent = 'Choose your weapon';
    text2.textContent = 'First to score 5 points wins the game';
    player.textContent = 'Player:  ' + `${pScore}`;
    computer.textContent = 'Computer:  ' + `${cScore}`;
    choice.addEventListener('click', game)
}

choice.addEventListener('click', game)
playAgain.addEventListener('click', reset);