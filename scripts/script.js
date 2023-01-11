let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let btns = document.querySelectorAll("#btn-container button");
let message = document.querySelector("#message");
let messageText = document.querySelector("#message p");

// Identificando o jogador
function verifyPlayer(player1, player2) {
  if(player1 === player2) {
    // X
    return x;
  } else {
    // O
    return o;
  }
}

// Computando jogada
function verifyMove(player1, player2,) {
  let element;

  if(player1 === player2) {
    // X
    player1++;
  } else {
    // O
    element = o;
  }

  return element;
}

let secondPlayer;

// Contador de jogadas
let player1 = 0;
let player2 = 0;

// Adicionar evento de click aos boxes
for(let i = 0; i < boxes.length; i++) {
  
  // Quando alguém clica na caixa (box)
  boxes[i].addEventListener("click", function() {
    let element = verifyPlayer(player1, player2);

    // Se o box ainda não tiver marcado
    if(this.childNodes.length === 0) {
      let cloneElement = element.cloneNode(true);

      this.appendChild(cloneElement);

      // Computando jogada
      if(player1 === player2) player1++;
      else player2++;
    }
  });
}