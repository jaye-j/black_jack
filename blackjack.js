
let deck = [{suit: "Diamonds", value: 2, imageURL: "JPEG/2D.jpg"},
{suit: "Diamonds", value: 3, imageURL: "JPEG/3D.jpg"},
{suit: "Diamonds", value: 4, imageURL: "JPEG/4D.jpg"},
{suit: "Diamonds", value: 5, imageURL: "JPEG/5D.jpg"},
{suit: "Diamonds", value: 6, imageURL: "JPEG/6D.jpg"},
{suit: "Diamonds", value: 7, imageURL: "JPEG/7D.jpg"},
{suit: "Diamonds", value: 8, imageURL: "JPEG/8D.jpg"},
{suit: "Diamonds", value: 9, imageURL: "JPEG/9D.jpg"},
{suit: "Diamonds", value: 10, imageURL: "JPEG/10D.jpg"},
{suit: "Diamonds", value: 11, imageURL: "JPEG/AD.jpg"},
{suit: "Diamonds", value: 10, imageURL: "JPEG/JD.jpg"},
{suit: "Diamonds", value: 10, imageURL: "JPEG/QD.jpg"},
{suit: "Diamonds", value: 10, imageURL: "JPEG/KD.jpg"},
{suit: "Hearts", value: 2, imageURL: "JPEG/2H.jpg"},
{suit: "Hearts", value: 3, imageURL: "JPEG/3H.jpg"},
{suit: "Hearts", value: 4, imageURL: "JPEG/4H.jpg"},
{suit: "Hearts", value: 5, imageURL: "JPEG/5H.jpg"},
{suit: "Hearts", value: 6, imageURL: "JPEG/6H.jpg"},
{suit: "Hearts", value: 7, imageURL: "JPEG/7H.jpg"},
{suit: "Hearts", value: 8, imageURL: "JPEG/8H.jpg"},
{suit: "Hearts", value: 9, imageURL: "JPEG/9H.jpg"},
{suit: "Hearts", value: 10, imageURL: "JPEG/10H.jpg"},
{suit: "Hearts", value: 11, imageURL: "JPEG/AH.jpg"},
{suit: "Hearts", value: 10, imageURL: "JPEG/JH.jpg"},
{suit: "Hearts", value: 10, imageURL: "JPEG/QH.jpg"},
{suit: "Hearts", value: 10, imageURL: "JPEG/KH.jpg"},
{suit: "Clubs", value: 2, imageURL: "JPEG/2C.jpg"},
{suit: "Clubs", value: 3, imageURL: "JPEG/3C.jpg"},
{suit: "Clubs", value: 4, imageURL: "JPEG/4C.jpg"},
{suit: "Clubs", value: 5, imageURL: "JPEG/5C.jpg"},
{suit: "Clubs", value: 6, imageURL: "JPEG/6C.jpg"},
{suit: "Clubs", value: 7, imageURL: "JPEG/7C.jpg"},
{suit: "Clubs", value: 8, imageURL: "JPEG/8C.jpg"},
{suit: "Clubs", value: 9, imageURL: "JPEG/9C.jpg"},
{suit: "Clubs", value: 10, imageURL: "JPEG/10C.jpg"},
{suit: "Clubs", value: 11, imageURL: "JPEG/AC.jpg"},
{suit: "Clubs", value: 10, imageURL: "JPEG/JC.jpg"},
{suit: "Clubs", value: 10, imageURL: "JPEG/QC.jpg"},
{suit: "Clubs", value: 10, imageURL: "JPEG/KC.jpg"},
{suit: "Spades", value: 2, imageURL: "JPEG/2S.jpg"},
{suit: "Spades", value: 3, imageURL: "JPEG/3S.jpg"},
{suit: "Spades", value: 4, imageURL: "JPEG/4S.jpg"},
{suit: "Spades", value: 5, imageURL: "JPEG/5S.jpg"},
{suit: "Spades", value: 6, imageURL: "JPEG/6S.jpg"},
{suit: "Spades", value: 7, imageURL: "JPEG/7S.jpg"},
{suit: "Spades", value: 8, imageURL: "JPEG/8S.jpg"},
{suit: "Spades", value: 9, imageURL: "JPEG/9S.jpg"},
{suit: "Spades", value: 10, imageURL: "JPEG/10S.jpg"},
{suit: "Spades", value: 11, imageURL: "JPEG/AS.jpg"},
{suit: "Spades", value: 10, imageURL: "JPEG/JS.jpg"},
{suit: "Spades", value: 10, imageURL: "JPEG/QS.jpg"},
{suit: "Spades", value: 10, imageURL: "JPEG/KS.jpg"}]

let playerValueDisplayTotal = document.getElementById("player");
let dealerValueDisplayTotal = document.getElementById("dealer");
let dealerValue = 0;
let playerValue = 0;
let playerAceCount = 0;
let dealerAceCount = 0;
dealerHandValue = [];
playerHandValue = [];

//functions
function displayTie() { //displays an overlay when the player and dealer tie
    let overlayDiv = document.createElement('div');
    overlayDiv.setAttribute('id', 'overlay');
    overlayDiv.setAttribute(
        'style',
        "position: absolute; width: 100%; height: 570px; background-image: linear-gradient(to right, rgba(255,255,0,0), rgba(255,255,0,1), rgba(255,255,0,0)); top: 190px; text-align: center; font-size: 72px; opacity: .8; display: flex; justify-content: center; align-items: center; font-size: 120px; font-family: 'Bree Serif', serif;"
    );
    overlayDiv.textContent = 'Tie game! Press deal to play again...';
    document.body.appendChild(overlayDiv);
};

function displayWin() { //displays an overlay for when the player wins
    let overlayDiv = document.createElement('div');
    overlayDiv.setAttribute('id', 'overlay');
    overlayDiv.setAttribute(
        'style',
        "position: absolute; width: 100%; height: 570px; background-image: linear-gradient(to right, rgba(255,255,0,0), rgba(255,255,0,1), rgba(255,255,0,0)); top: 190px; text-align: center; font-size: 72px; opacity: .8; display: flex; justify-content: center; align-items: center; font-size: 120px; font-family: 'Bree Serif', serif;"
    );
    overlayDiv.textContent = 'Congratulations, you win! Press deal to play again...';
    document.body.appendChild(overlayDiv);
};

function displayLoss() { //displays an overlay for when the player loses
    let overlayDiv = document.createElement('div');
    overlayDiv.setAttribute('id', 'overlay');
    overlayDiv.setAttribute(
        'style',
        "position: absolute; width: 100%; height: 570px; background-image: linear-gradient(to right, rgba(255,255,0,0), rgba(255,255,0,1), rgba(255,255,0,0)); top: 190px; text-align: center; font-size: 72px; opacity: .7; display: flex; justify-content: center; align-items: center; font-size: 120px; font-family: 'Bree Serif', serif;"
    );
    overlayDiv.textContent = 'You lose! Press deal to play again...';
    document.body.appendChild(overlayDiv);
};

function shuffleArray(array) { //shuffles the deck of cards at random
    for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    }
    return array;
};

function addingInitialValues() { //adds values of the cards in the initial deal for both the dealer and player
    dealerValue = dealerHandValue[0] + dealerHandValue[1];
    playerValue = playerHandValue[0] + playerHandValue[1];
};

function addingPlayerHitValues() { //adds card value of a hit to the value of the players hand
    let hitValue = playerValue + playerHandValue[0]
    playerValue = hitValue
    if (playerHandValue[0] == 11 && playerValue >= 11){ //adds logic for Ace value of either 11 or 1
        playerValue = playerValue - 10;
    };
};

function displayPlayerValue() { //displays the total value of cards in players hand
    playerValueDisplayTotal.innerHTML = "Player: " + playerValue;
};

function displayDealerValue() { //displays the total value of cards in dealers hand
    dealerValueDisplayTotal.innerHTML = "Dealer: " + dealerValue;
};


function deal() { //this first shuffles the deck at the start of a game and deals the first cards to the dealer and the player
    shuffleArray(deck);
///trying to make overlay disappear when new deal is started... only works once...
    try{
        let t = document.getElementById('overlay');
        t.setAttribute("class", "overlayhidden")
        }
        catch{}
///
    dealerHandValue = [];
    playerHandValue = [];
    let dealer1 = document.getElementById('dealer-hand');
    let player1 = document.getElementById('player-hand');
    dealer1.innerHTML = '';
    player1.innerHTML = '';
    let deal1 = document.createElement("IMG");
        deal1.src = deck[0].imageURL;
        deal1.className = "hand";
        dealerHandValue.push(deck[0].value);
        deck.shift();
    let deal2 = document.createElement("IMG");
        deal2.src = deck[0].imageURL;
        deal2.className = "hand";
        dealerHandValue.push(deck[0].value);
        deck.shift();
        dealer1.append(deal1, deal2);
    let play1 = document.createElement("IMG");
        play1.src = deck[0].imageURL;
        play1.className = "hand";
        playerHandValue.push(deck[0].value);
        deck.shift();
    let play2 = document.createElement("IMG");
        play2.src = deck[0].imageURL;
        play2.className = "hand";
        playerHandValue.push(deck[0].value);
        deck.shift();
        player1.append(play1, play2);
    addingInitialValues();
    displayPlayerValue();
    displayDealerValue();
};

function hit() { //allows the player to hit the 'hit' button to get a card added to their hand
    playerHandValue = [];
    let playhit = document.createElement("IMG");
    playhit.src = deck[0].imageURL;
    playhit.className = "hand";
    playerHandValue.push(deck[0].value);
    deck.shift();
    let playerhit = document.getElementById("player-hand");
            playerhit.append(playhit);
    console.log(playhit);
    addingPlayerHitValues();
    displayPlayerValue();
};

function checkValue() { // checks the values of hands to determine win, loss, and tie
    if (playerValue <= 21 && dealerValue <= 21) {
      //dealer method
    if (playerValue > dealerValue) {
        displayWin();
    } else if (dealerValue > playerValue) {
        displayLoss();
    } else {
        displayTie();
        }
    } else if (playerValue > 21) {
        displayLoss();
    } else if (dealerValue > 21) {
        displayWin();
    };
};

function endGame() { // checks the values of hands to determine win, loss, and tie
    if (playerValue >= 21) {
        checkValue();
    };
};  
//////

///event listeners
document.getElementById("deal-button").addEventListener("click", function(e){
    deal();
    endGame();

});

document.getElementById("hit-button").addEventListener("click", function(e){
    hit();
    endGame();
});

document.getElementById("stand-button").addEventListener("click", function(e){
    checkValue();
});