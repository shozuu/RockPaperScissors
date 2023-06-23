const choice = document.querySelector('.choices');
const result = document.querySelector('.result');
const player = document.querySelector('.playerScore');
const computer = document.querySelector('.computerScore');
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
        player.textContent = 'player score : ' + `${pScore}`;
    }

    else
    {
        cScore++
        computer.textContent = 'computer score : ' + `${cScore}`;
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
                result.textContent = 'You won! rock beats scissors';
                scoreHandler(true);
            }
                
            else if (computerSelection == 'paper')
            {
                result.textContent = 'You lost! rock was beaten by paper';
                scoreHandler(false);
            }

            else
            {
                result.textContent = 'Tie! rock equals rock';
                break;
            }
                

            break;

        case 'paper':

            if (computerSelection == 'rock')
            {
                result.textContent = 'You won! paper beats rock';
                scoreHandler(true);
            }
                

            else if (computerSelection == 'scissors')
            {
                result.textContent = 'You lost! paper was beaten by scissors';
                scoreHandler(false);
            }
                

            else
            {
                result.textContent = 'Tie! paper equals paper';
                break;
            }
                

            break;

        case 'scissors':
            if (computerSelection == 'rock')
            {
                result.textContent = 'You lost! scissors was beaten by rock';
                scoreHandler(false);
            }
                

            else if (computerSelection == 'paper')
            {
                result.textContent = 'You won! scissors beats paper';
                scoreHandler(true);
            }
                

            else
            {
                result.textContent = 'Tie! scissors equals scissors';
                break;
            }
                
            break;

        default :
            result.textContent = 'please enter a valid choice. (e.g. "rock, paper, scissors")';
            break;
    }
}

function game(e)
{
    if (pScore == 5 || cScore == 5)
    {
        if (pScore > cScore)
            result.textContent = 'congrats you won!';
        else   
            result.textContent = 'you lost';

        return;
    }

    else
    {
        const playerChoice = e.target.getAttribute('data-choice');
        playRound(playerChoice, getComputerChoice());
    }
}

choice.addEventListener('click', game)