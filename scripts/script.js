let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let btns = document.querySelectorAll("#btn-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");

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

    // Verificando o vencedor
    verifyWinner();
  });
}

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

function verifyWinner() {
  let block1 = document.getElementById("block-1");
  let block2 = document.getElementById("block-2");
  let block3 = document.getElementById("block-3");
  let block4 = document.getElementById("block-4");
  let block5 = document.getElementById("block-5");
  let block6 = document.getElementById("block-6");
  let block7 = document.getElementById("block-7");
  let block8 = document.getElementById("block-8");
  let block9 = document.getElementById("block-9");

  // Horizontal
  if(
    block1.childNodes.length > 0 &&
    block2.childNodes.length > 0 &&
    block3.childNodes.length > 0
  ) {
    let block1Child = block1.childNodes[0].className;
    let block2Child = block2.childNodes[0].className;
    let block3Child = block3.childNodes[0].className;

    if(
      block1Child === "x" &&
      block2Child === "x" &&
      block3Child === "x"
    ) {
      // X venceu
      declareWinner("x");
    } else if(
      block1Child === "o" &&
      block2Child === "o" &&
      block3Child === "o"
    ) {
      // O venceu
      declareWinner("o");
    }
  }

  if(
    block4.childNodes.length > 0 &&
    block5.childNodes.length > 0 &&
    block6.childNodes.length > 0
  ) {
    let block4Child = block4.childNodes[0].className;
    let block5Child = block5.childNodes[0].className;
    let block6Child = block6.childNodes[0].className;

    if(
      block4Child === "x" &&
      block5Child === "x" &&
      block6Child === "x"
    ) {
      // X venceu
      declareWinner("x");
    } else if(
      block4Child === "o" &&
      block5Child === "o" &&
      block6Child === "o"
    ) {
      // O venceu
      declareWinner("o");
    }
  }

  if(
    block7.childNodes.length > 0 &&
    block8.childNodes.length > 0 &&
    block9.childNodes.length > 0
  ) {
    let block7Child = block7.childNodes[0].className;
    let block8Child = block8.childNodes[0].className;
    let block9Child = block9.childNodes[0].className;

    if(
      block7Child === "x" &&
      block8Child === "x" &&
      block9Child === "x"
    ) {
      // X venceu
      declareWinner("x");
    } else if(
      block7Child === "o" &&
      block8Child === "o" &&
      block9Child === "o"
    ) {
      // O venceu
      declareWinner("o");
    }
  }

  // Vertical
  if(
    block1.childNodes.length > 0 &&
    block4.childNodes.length > 0 &&
    block7.childNodes.length > 0
  ) {
    let block1Child = block1.childNodes[0].className;
    let block4Child = block4.childNodes[0].className;
    let block7Child = block7.childNodes[0].className;

    if(
      block1Child === "x" &&
      block4Child === "x" &&
      block7Child === "x"
    ) {
      // X venceu
      declareWinner("x");
    } else if(
      block1Child === "o" &&
      block4Child === "o" &&
      block7Child === "o"
    ) {
      // O venceu
      declareWinner("o");
    }
  }

  if(
    block2.childNodes.length > 0 &&
    block5.childNodes.length > 0 &&
    block8.childNodes.length > 0
  ) {
    let block2Child = block2.childNodes[0].className;
    let block5Child = block5.childNodes[0].className;
    let block8Child = block8.childNodes[0].className;

    if(
      block2Child === "x" &&
      block5Child === "x" &&
      block8Child === "x"
    ) {
      // X venceu
      declareWinner("x");
    } else if(
      block2Child === "o" &&
      block5Child === "o" &&
      block8Child === "o"
    ) {
      // O venceu
      declareWinner("o");
    }
  }

  if(
    block3.childNodes.length > 0 &&
    block6.childNodes.length > 0 &&
    block9.childNodes.length > 0
  ) {
    let block3Child = block3.childNodes[0].className;
    let block6Child = block6.childNodes[0].className;
    let block9Child = block9.childNodes[0].className;

    if(
      block3Child === "x" &&
      block6Child === "x" &&
      block9Child === "x"
    ) {
      // X venceu
      declareWinner("x");
    } else if(
      block3Child === "o" &&
      block6Child === "o" &&
      block9Child === "o"
    ) {
      // O venceu
      declareWinner("o");
    }
  }

  // Diagonal
  if(
    block1.childNodes.length > 0 &&
    block5.childNodes.length > 0 &&
    block9.childNodes.length > 0
  ) {
    let block1Child = block1.childNodes[0].className;
    let block5Child = block5.childNodes[0].className;
    let block9Child = block9.childNodes[0].className;

    if(
      block1Child === "x" &&
      block5Child === "x" &&
      block9Child === "x"
    ) {
      // X venceu
      declareWinner("x");
    } else if(
      block1Child === "o" &&
      block5Child === "o" &&
      block9Child === "o"
    ) {
      // O venceu
      declareWinner("o");
    }
  }

  if(
    block3.childNodes.length > 0 &&
    block5.childNodes.length > 0 &&
    block7.childNodes.length > 0
  ) {
    let block3Child = block3.childNodes[0].className;
    let block5Child = block5.childNodes[0].className;
    let block7Child = block7.childNodes[0].className;

    if(
      block3Child === "x" &&
      block5Child === "x" &&
      block7Child === "x"
    ) {
      // X venceu
      declareWinner("x");
    } else if(
      block3Child === "o" &&
      block5Child === "o" &&
      block7Child === "o"
    ) {
      // O venceu
      declareWinner("o");
    }
  }

  // Deu velha
  let counter = 0;

  for(let i = 0; i < boxes.length; i++) {
    if(boxes[i].childNodes[0] !== undefined) {
      counter++;
    }
  }

  if(counter == 9) {
    declareWinner();
  }
}

// Limpa o jogo, declara o vencedor e atualiza o placar
function declareWinner(winner="") {
  let scoreboardX = document.querySelector("#scoreboard-1");
  let scoreboardO = document.querySelector("#scoreboard-2");
  let message = "";

  if(winner === "x") {
    scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
    message = "Jogador 1 vencer!";
  } else if(winner === "o") {
    scoreboardO.textContent = parseInt(scoreboardX.textContent) + 1;
    message = "Jogador 2 vencer!";
  } else {
    message = "Deu velha!";
  }

  messageText.innerHTML = message;
  messageContainer.classList.remove("hide");

  setTimeout(function() {
    messageContainer.classList.add("hide");
  }, 2000);

  // Zerando as jogadas
  player1 = 0, player2 = 0;

  // Removendo as jogadas
  let boxesToRemove = document.querySelectorAll(".box div");

  for(let i = 0; i < boxesToRemove.length; i++) {
    // Removendo a filha do pai
    boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
  }
}
