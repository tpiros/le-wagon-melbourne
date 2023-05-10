const readline = require('readline');

const Game = require('./game.js');
const game = new Game();
game.playFirstCardToTable();

const p1Hand = game.drawCard(5);
const p2Hand = game.drawCard(5);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function info() {
  console.log(`Your hand: ${p1Hand}`);
  console.log(`Last card on table: ${game.lastCardOnTable()}`);
}

function playCard() {
  rl.question('Which card would you like to play? ', (card) => {
    if (card === 0 || card === '0') {
      game.drawCard(1, p1Hand);
      info();
      playCard();
    } else {
      if (game.isCardPlayable(card, p1Hand, game.lastCardOnTable())) {
        game.playCard(p1Hand.indexOf(card), p1Hand, game.table.cards);
        info();
        playCard();
      } else {
        console.log(`Invalid, you can't play ${card}`);
        playCard();
      }
    }
  });
}

info();
playCard();
