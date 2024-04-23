let Player = 'X';
let posicao = [ ['','',''],['','',''],['','',''] ];
let winX = 0;
let winO = 0;
let control = false;

function Posicao(coluna, linha) {
  if(posicao[coluna][linha] == '') {
    posicao[coluna][linha] = Player;
    document.getElementsByClassName('jg')[coluna * 3 + linha].innerHTML = Player;
    document.getElementsByClassName('jg')[coluna * 3 + linha].classList.add(Player);
    if (Vitoria(Player)) {
      document.getElementById('status').innerHTML = "O jogador "+Player+" venceu!";
      if (control==false) {
        if (Player=="X") {
          winX+=1
          document.getElementById('WinX').innerHTML = "Vitorias do player X: "+winX;
        }else{
          winO+=1
          document.getElementById('WinO').innerHTML = "Vitorias do player O: "+winO;
        }
        control=true;
      }
      return;
    }
    if (Empate()) {
      document.getElementById('status').innerHTML = "Empate!";
      Player = 'X';
      return;
    }
    Player = Player == 'X' ? 'O' : 'X';
    document.getElementById('status').innerHTML = "Vez do jogador "+Player;
  }
}

function Vitoria(player) {
    for (let i=0; i<3; i++) {
        if (posicao[i][0] == player && posicao[i][1] == player && posicao[i][2] == player) {
          return true;
        }
        if (posicao[0][i] == player && posicao[1][i] == player && posicao[2][i] == player) {
          return true;
        }
    }
    if (posicao[0][0] == player && posicao[1][1] == player && posicao[2][2] == player) {
      return true;
    }
    if (posicao[0][2] == player && posicao[1][1] == player && posicao[2][0] == player) {
      return true;
    }
    return false;
}

function Empate() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (posicao[i][j] == '') {
        return false;
      }
    }
  }
  return true;
}

function Reset() {
  Player = Player == 'X' ? 'O' : 'X';
  control=false;
  document.getElementById('status').innerHTML = "Vez do jogador "+Player;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      posicao[i][j] = '';
      document.getElementsByClassName('jg')[i * 3 + j].innerHTML = '';
      document.getElementsByClassName('jg')[i * 3 + j].classList.remove("X");
      document.getElementsByClassName('jg')[i * 3 + j].classList.remove("O");
    }
  }
}