// Intiallizing important variables 
const boxes = document.querySelectorAll('.boxes');
const turnText = document.querySelector(".turn-text");
const tingMusic = new Audio('musics/ting.wav');
const resetBtn = document.querySelector(".reset");
const crossLine = document.querySelector(".cross-line");
const win_Gif = document.querySelector(".win-gif");

let isGameOver = false;

let turn = "X";

// Iterating on boxes
boxes.forEach((itm) => {
     itm.addEventListener("click", () => {
          tingMusic.play();
          if (itm.innerHTML === "") {
               itm.innerHTML = turn;
               turn = changeTurn();
               checkWin();
               if (!isGameOver) {
                    turnText.innerHTML = `<h1>Turn for ${turn}</h1>`;
               }
          }
     });
});


// changeTurn Function
const changeTurn = () => {
     return turn === "X" ? "O" : "X";
}


// checkWin function 
const checkWin = () => {
     let winsCondition = [
          [0, 1, 2, parseInt("-94px"), 0, 0],
          [3, 4, 5, 0, 0, 0],
          [6, 7, 8, 97, 0, 13],
          [0, 3, 6, 10, 6, 10],
          [1, 4, 7, 0, 90, 0],
          [2, 5, 8, 0, 90, 0],
          [0, 4, 8, 0, 46, 0],
          [2, 4, 6, 0, 135, 0],
     ];

     winsCondition.forEach((e) => {
          if (
               (boxes[e[0]].innerHTML == boxes[e[1]].innerHTML) && (boxes[e[2]].innerHTML == boxes[e[1]].innerHTML) && (boxes[e[0]].innerHTML !== "")
          ) {

               crossLine.style.transform = `translateY(${e[3]}px) scale(1) rotate(${e[4]}deg)  translateX(${e[5]}px`;
 

               win_Gif.classList.add('display-gif');
               turnText.innerHTML = `<h1> Player ${boxes[e[0]].innerHTML} wins..</h1>`;
               isGameOver = true;
          }
     })
};







// Reset button eventListener
resetBtn.addEventListener("click", () => {
     boxes.forEach((e) => {
          e.innerHTML = "";
     });
     turn = "X";
     crossLine.style.transform = `translateY(0px) scale(0) rotate(0deg)  translateX(0px)`;
     isGameOver = false;
     win_Gif.classList.remove('display-gif');
     turnText.innerHTML = `<h1>Turn for ${turn}</h1>`;
});