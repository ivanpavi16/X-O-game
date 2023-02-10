xPlayer = prompt("Enter your name: ");
yPlayer = prompt("Enter your name: ");

const cells = document.querySelectorAll(".cell");
const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let option = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let runningGame = false;

startGame();

function startGame() {
    cells.forEach(cell => cell.addEventListener("click", cellClicked))
    runningGame = true;
}
function cellClicked() {
    const cellIndex = this.getAttribute("cellInex");
    if (option[cellIndex] != "" || !runningGame) {
        return;
    }
    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index) {
    option[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer() {
    if(currentPlayer == "X") {
        currentPlayer = "O"
    }
    else {
        currentPlayer = "X"
    }
}
function checkWinner() {
    let winner = false;

    for(let i = 0; i < winningCombinations.length; i++) {
        const combination = winningCombinations[i];
        const cellA = option[combination[0]];
        const cellB = option[combination[1]];
        const cellC = option[combination[2]];

        if(cellA == "" || cellB == "" || cellC == "") {
            continue;
        }
        if(cellA == cellB && cellA == cellC) {
            winner = true;
            break;
        }
    }
    if(winner) {
        if (currentPlayer == "X") {
            alert(`${xPlayer} is the winner!`)
        }
        else {alert(`${yPlayer} is the winner!`) }
        
        restartGame();
    }
    else if(!option.includes("")){
        alert("It is draw!");
        restartGame();
    }else {
        changePlayer();
    }
}
function restartGame() {
    return document.location.reload();
}