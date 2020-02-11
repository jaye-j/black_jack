
const deck = [
    { suit: 'Diamonds', value: 2, imageURL: 'JPEG/2D.jpg' },
    { suit: 'Diamonds', value: 3, imageURL: 'JPEG/3D.jpg' },
    { suit: 'Diamonds', value: 4, imageURL: 'JPEG/4D.jpg' },
    { suit: 'Diamonds', value: 5, imageURL: 'JPEG/5D.jpg' },
    { suit: 'Diamonds', value: 6, imageURL: 'JPEG/6D.jpg' },
    { suit: 'Diamonds', value: 7, imageURL: 'JPEG/7D.jpg' },
    { suit: 'Diamonds', value: 8, imageURL: 'JPEG/8D.jpg' },
    { suit: 'Diamonds', value: 9, imageURL: 'JPEG/9D.jpg' },
    { suit: 'Diamonds', value: 10, imageURL: 'JPEG/10D.jpg' },
    { suit: 'Diamonds', value: 11, imageURL: 'JPEG/AD.jpg' },
    { suit: 'Diamonds', value: 10, imageURL: 'JPEG/JD.jpg' },
    { suit: 'Diamonds', value: 10, imageURL: 'JPEG/QD.jpg' },
    { suit: 'Diamonds', value: 10, imageURL: 'JPEG/KD.jpg' },
    { suit: 'Hearts', value: 2, imageURL: 'JPEG/2H.jpg' },
    { suit: 'Hearts', value: 3, imageURL: 'JPEG/3H.jpg' },
    { suit: 'Hearts', value: 4, imageURL: 'JPEG/4H.jpg' },
    { suit: 'Hearts', value: 5, imageURL: 'JPEG/5H.jpg' },
    { suit: 'Hearts', value: 6, imageURL: 'JPEG/6H.jpg' },
    { suit: 'Hearts', value: 7, imageURL: 'JPEG/7H.jpg' },
    { suit: 'Hearts', value: 8, imageURL: 'JPEG/8H.jpg' },
    { suit: 'Hearts', value: 9, imageURL: 'JPEG/9H.jpg' },
    { suit: 'Hearts', value: 10, imageURL: 'JPEG/10H.jpg' },
    { suit: 'Hearts', value: 11, imageURL: 'JPEG/AH.jpg' },
    { suit: 'Hearts', value: 10, imageURL: 'JPEG/JH.jpg' },
    { suit: 'Hearts', value: 10, imageURL: 'JPEG/QH.jpg' },
    { suit: 'Hearts', value: 10, imageURL: 'JPEG/KH.jpg' },
    { suit: 'Clubs', value: 2, imageURL: 'JPEG/2C.jpg' },
    { suit: 'Clubs', value: 3, imageURL: 'JPEG/3C.jpg' },
    { suit: 'Clubs', value: 4, imageURL: 'JPEG/4C.jpg' },
    { suit: 'Clubs', value: 5, imageURL: 'JPEG/5C.jpg' },
    { suit: 'Clubs', value: 6, imageURL: 'JPEG/6C.jpg' },
    { suit: 'Clubs', value: 7, imageURL: 'JPEG/7C.jpg' },
    { suit: 'Clubs', value: 8, imageURL: 'JPEG/8C.jpg' },
    { suit: 'Clubs', value: 9, imageURL: 'JPEG/9C.jpg' },
    { suit: 'Clubs', value: 10, imageURL: 'JPEG/10C.jpg' },
    { suit: 'Clubs', value: 11, imageURL: 'JPEG/AC.jpg' },
    { suit: 'Clubs', value: 10, imageURL: 'JPEG/JC.jpg' },
    { suit: 'Clubs', value: 10, imageURL: 'JPEG/QC.jpg' },
    { suit: 'Clubs', value: 10, imageURL: 'JPEG/KC.jpg' },
    { suit: 'Spades', value: 2, imageURL: 'JPEG/2S.jpg' },
    { suit: 'Spades', value: 3, imageURL: 'JPEG/3S.jpg' },
    { suit: 'Spades', value: 4, imageURL: 'JPEG/4S.jpg' },
    { suit: 'Spades', value: 5, imageURL: 'JPEG/5S.jpg' },
    { suit: 'Spades', value: 6, imageURL: 'JPEG/6S.jpg' },
    { suit: 'Spades', value: 7, imageURL: 'JPEG/7S.jpg' },
    { suit: 'Spades', value: 8, imageURL: 'JPEG/8S.jpg' },
    { suit: 'Spades', value: 9, imageURL: 'JPEG/9S.jpg' },
    { suit: 'Spades', value: 10, imageURL: 'JPEG/10S.jpg' },
    { suit: 'Spades', value: 11, imageURL: 'JPEG/AS.jpg' },
    { suit: 'Spades', value: 10, imageURL: 'JPEG/JS.jpg' },
    { suit: 'Spades', value: 10, imageURL: 'JPEG/QS.jpg' },
    { suit: 'Spades', value: 10, imageURL: 'JPEG/KS.jpg' },
];
let dealerPoints = document.getElementById('dealer-points');
let playerPoints = document.getElementById('player-points');
let playerValueDisplayTotal = document.getElementById('player');
let dealerValueDisplayTotal = document.getElementById('dealer');
let dealerValue = 0;
let playerValue = 0;
let dealerHandValue = [];
let playerHandValue = [];
let faceDown = [];
let dealerAceCount = 0;
let victory = '';

////////////Functions
function revealDealer() { //sets one of the dealers cards face down
    dealerValueDisplayTotal.innerHTML = 'Dealer: ' + dealerValue;
    let dealtFaceDown = document.getElementById('facedown');
    dealtFaceDown.src = faceDown[0];
}

function displayWin() { //displays win overlay when player wins
    let overlayDiv = document.createElement('div');
    overlayDiv.setAttribute('id', 'overlay');
    overlayDiv.setAttribute(
        'style',
        "position: absolute; width: 100%; height: 330px; background-image: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,2), rgba(255,255,255,3), rgba(255,255,255,2), rgba(255,255,255,0)); top: 190px; text-align: center; opacity: 1; display: flex; justify-content: center; align-items: center; font-size: 40px; font-family: 'Bree Serif', serif;"
    );
    overlayDiv.textContent = "Congrats! You win! Press 'New Game' to play again.";
    document.body.appendChild(overlayDiv);
}

function displayBust() { //displays the bust overlay when the player busts
    var overlayDiv = document.createElement('div');
    overlayDiv.setAttribute('id', 'overlay');
    overlayDiv.setAttribute(
        'style',
        "position: absolute; width: 100%; height: 330px; background-image: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,2), rgba(255,255,255,3), rgba(255,255,255,2), rgba(255,255,255,0)); top: 190px; text-align: center; opacity: 1; display: flex; justify-content: center; align-items: center; font-size: 40px; font-family: 'Bree Serif', serif;"
    );
    overlayDiv.textContent = `You busted with a card value of ${playerValue}!`;
    document.body.appendChild(overlayDiv);
}

function displayLoss() { //displays the loss overlay when the player loses
    var overlayDiv = document.createElement('div');
    overlayDiv.setAttribute('id', 'overlay');
    overlayDiv.setAttribute(
        'style',
        "position: absolute; width: 100%; height: 330px; background-image: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,2), rgba(255,255,255,3), rgba(255,255,255,2), rgba(255,255,255,0)); top: 190px; text-align: center; opacity: 1; display: flex; justify-content: center; align-items: center; font-size: 40px; font-family: 'Bree Serif', serif;"
    );
    overlayDiv.textContent = "You lose! Press 'New Game' to play again.";
    document.body.appendChild(overlayDiv);
}

function displayTie() { //displays the tie overlay when the player and dealer tie
    var overlayDiv = document.createElement('div');
    overlayDiv.setAttribute('id', 'overlay');
    overlayDiv.setAttribute(
        'style',
        "position: absolute; width: 100%; height: 330px; background-image: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,2), rgba(255,255,255,3), rgba(255,255,255,2), rgba(255,255,255,0)); top: 190px; text-align: center; opacity: 1; display: flex; justify-content: center; align-items: center; font-size: 40px; font-family: 'Bree Serif', serif;"
    );
    overlayDiv.textContent = "Tie game! Press 'New Game' to play again.";
    document.body.appendChild(overlayDiv);
}

function shuffleArray(array) { //shuffles the deck(array) of cards
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
function addingInitialValues() { // adds the values of the cards initially dealt when the game is started
    dealerValue = dealerHandValue[0] + dealerHandValue[1];
    playerValue = playerHandValue[0] + playerHandValue[1];
}
function addingPlayerHitValues() { // adds the value of the hit card to the players total value when the player hits
    let hitTotal = playerValue + playerHandValue[0];
    playerValue = hitTotal;
    if (playerHandValue[0] == 11 && playerValue >= 11) {
        playerValue = playerValue - 10;
    }
}

function deal() { // deals the cards to the player and dealer
    shuffleArray(deck);
    dealerHandValue = [];
    playerHandValue = [];
    let dealer1 = document.getElementById('dealer-hand');
    let player1 = document.getElementById('player-hand');
    dealer1.innerHTML = '';
    player1.innerHTML = '';
    let deal1 = document.createElement('IMG');
    deal1.className = 'hand-img';
    deal1.id = 'facedown';
    deal1.src = 'JPEG/blue_card_back.jpg';
    faceDown.push(deck[0].imageURL);
    if (deck[0].value == 11) {
        dealerAceCount++;
    }
    dealerHandValue.push(deck[0].value);
    deck.shift();

    let deal2 = document.createElement('IMG');
    deal2.src = deck[0].imageURL;
    deal2.className = 'hand-img';
    if (deck[0].value == 11) {
        dealerAceCount++;
    }
    dealerHandValue.push(deck[0].value);
    deck.shift();
    dealer1.append(deal1, deal2);

    let play1 = document.createElement('IMG');
    play1.src = deck[0].imageURL;
    play1.className = 'hand-img';
    playerHandValue.push(deck[0].value);
    deck.shift();

    let play2 = document.createElement('IMG');
    play2.src = deck[0].imageURL;
    play2.className = 'hand-img';
    playerHandValue.push(deck[0].value);
    deck.shift();
    player1.append(play1, play2);

    addingInitialValues();
    playerValueDisplayTotal.innerHTML = 'Player: ' + playerValue;
}

function hit() { // allows the player to call for a hit
    playerHandValue = [];
    let playhit = document.createElement('IMG');
    playhit.src = deck[0].imageURL;
    playhit.className = 'hand-img';
    playerHandValue.push(deck[0].value);
    deck.shift();
    let player1 = document.getElementById('player-hand');
    player1.append(playhit);
    addingPlayerHitValues();
    playerValueDisplayTotal.innerHTML = 'Player: ' + playerValue;
}

function dealerHit() { //allows the dealer to hit which reveals the card that was initially not showing its value
    dealerHandValue = [];
    while (dealerValue < 17) {
        shuffleArray(deck);
        let dealHit = document.createElement('IMG');
        dealHit.src = deck[0].imageURL;
        dealHit.className = 'hand-img';
        dealerHandValue.push(deck[0].value);
        let dealer1 = document.getElementById('dealer-hand');
        dealer1.append(dealHit);
        let dealHitTotal = dealerValue + deck[0].value;
        dealerValue = dealHitTotal;
        if (dealerAceCount >= 1 && deck[0].value == 11) {
            dealerValue = dealerValue - 10;
        }
    }
    dealerValueDisplayTotal.innerHTML = 'Dealer: ' + dealerValue;
}

function checkValue() { // checks for wins, ties, busts, and losses between the player and the dealer
    dealerHit();
    revealDealer();
    if (playerValue <= 21 && dealerValue <= 21) {
        if (playerValue > dealerValue) {
            displayWin();
        } else if (dealerValue > playerValue) {
            displayLoss();
        } else {
            displayTie();
        }
    } else if (playerValue > 21) {
        displayBust();
    } else if (dealerValue > 21) {
        displayWin();
    }
}
function endGame() {
    if (playerValue >= 21) {
        checkValue();
    }
}

////// Event Listenters

//adds functionallity to the deal button
document.getElementById('deal-button').addEventListener('click', function (e) {
    console.log(faceDown);
    deal();
    endGame();
});

//adds functionallity to the hit button
document.getElementById('hit-button').addEventListener('click', function (e) {
    hit();
    endGame();
});

//adds functionallity to the stand button
document.getElementById('stand-button').addEventListener('click', function (e) {
    checkValue();
});

//adds functionallity to the new game button
document.getElementById('new-game').addEventListener('click', function (e) {
    location.reload();
    return false;
});