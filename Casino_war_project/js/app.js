// CREATE A DECK OF CARDS/////
let suits = ['hearts','clubs', 'diams', 'spades'];
let cardFace = ['2','3','4','5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let cards = [];
/*player value card goes here*/
let players = [[],[]];
let gameStarts = true;
let gameOver = false;


$(() => {

/*----- cached element references -----*/
    const $modal = $('#modal');
    const $closeButton = $('#close');
    const $overAge = $('#age');
    const $fightBtn = $('#btnBattle')
    const p1 = document.querySelector('#player-1 .hand');
    const p2 = document.querySelector('#player-2 .hand')
    // const p1 = $('#player-1, .hand');
    // const p2 = $('#player-2, .hand');
    const score1 = document.querySelector('#player-1 .score');
    const score2 = document.querySelector('#player-2 .score');

/*----- event listeners -----*/
const eventListener = () => {
/*----- modal listeners -----*/
$closeButton.on('click', closeModal);
$overAge.on('mouseover', button );
$overAge.on('mouseout', awayB );
$('img').on('click', () => {

})

$overAge.on('click', closeModal );
/*----- end modal listeners -----*/
$fightBtn.on('click', fight);

}

/*----- functions -----*/   
const closeModal = () => {
    $modal.css('display', 'none')
};

/*-----  Button functions -----*/ 
const button = () => {
    $overAge.css('background-color', 'red');
};

const awayB = () => {
    $overAge.css('background-color', 'black')
};

const over21 = () => {
    $overAge.css('display', 'none')
}
/*check to see if the game has started and make card deck*/
const fight = () => {
    if(gameStarts) {
        gameStarts = false;
        /* this will run once until the game is reset*/
        makeCards();
        shuffle(cards);
        dealCards(cards);    
    }
    war();
}

/*----- war between player & player 1 functions -----*/ 
const war = () => {
    if(!gameOver) {
        /**grab card from players deck and put them in play */
        let cardOne = players[0].shift();
        let cardTwo = players[1].shift();
        /**store vale of players card */
        let cardBank = [cardOne, cardTwo];
        // pass the card and the position of the card in the parameter
        p1.innerHTML = showCard(cardOne, 0);
        p2.innerHTML = showCard(cardTwo, 0);
         // check winner
        checkWinner(cardOne, cardTwo, cardBank);
        // update scores
        score1.innerHTML = 'DEALER' + '<br>' + players[0].length ;
        score2.innerHTML = 'PLAYER 2' + '<br>' + players[1].length ;
    } else {
        output('Game over');
    }
    console.log(score1,score2)
}

/*----- make a output message function -----*/
const output = (message) => {
    document.getElementById('message').innerHTML = message
}
/*----- make a check winner functions -----*/

const checkWinner = (cardOne, cardTwo, cardBank) => {
    if((players[0].length <= 4) || (players[1].length <= 4)) {
       gameOver = true;
       return;
    }
    console.log(cardOne, cardTwo);
        if(cardOne.cardValue > cardTwo.cardValue) {
            output('Dealer wins');
            /*----- learned about the concat method it combines arrays and adds them together -----*/
            players[0] = players[0].concat(cardBank);
        } else if(cardOne.cardValue < cardTwo.cardValue) {
            output('Player 2 wins');
            players[1] = players[1].concat(cardBank);
            /**check for tie */
        } else{
            iDeclareWar(cardBank);
           output('I Declare WAR');
            /**I declare WAR */
        }
        console.log(players);
    }

/*----- make a tie game functions -----*/ 

const iDeclareWar = (cardBank) => {
    let cardOne, cardTwo;
    /**stack cards on top of each other and then flip */
    let pos = (cardBank.length/2);
    if((players[0].length < 4) || (players[1].length < 4)) {
        return;
    } else{
        for(let i = 0; i < 4; i++) {
            cardOne = players[0].shift();
            cardBank = cardBank.concat(cardOne);
            p1.innerHTML += showCard(cardOne,(pos+i));
        } 
        for(let i = 0; i < 4; i++) {
        cardTwo = players[1].shift();
        cardBank = cardBank.concat(cardTwo);
        p2.innerHTML += showCard(cardTwo,(pos+i));
    } 
    checkWinner(cardOne, cardTwo, cardBank);
    
    }

}

/*----- make a show card functions -----*/
const showCard = (card, position) => {
    let move = position * 40;
    /*----- favorite part adding the card icons to the cards using the unicodes -----*/
    // let backgroundColor = (card.icon == "H" || card.icon == "D") ? "red" : "black";
    let buildCardFace = '<div class="faceCard '+card.suit+' " style="left: ' + move +'px">';
    buildCardFace += '<div class= "cardTop suit">' + card.number + '<br></div>';
    buildCardFace += '<div class= "cardMiddle suit"></div> ';
    buildCardFace += '<div class= "cardBottom suit">' + card.number + '<br></div></div> ';
    console.log(card, move);
    return buildCardFace;
    // alert(buildCardFace);
}



/*----- make a deck of card functions -----*/ 
const makeCards = () => {
    cards = [];
    /*loop over each index in the suits array and make the first letter in each word capital*/
    for(suit in suits) {
        /*capitalize fist letter of each suit*/
        let newSuits = suits[suit][0].toUpperCase();
        /*loop over each card face and make a card object with suit, number, card value and a icon*/
        for(value in cardFace) {
            let card = {
                suit: suits[suit],
                number:cardFace[value],
                /*force to become a number because of K,Q,J strings*/
                cardValue: parseInt(value) +2,
                icon:newSuits
            }
            cards.push(card)
        }   
    }
    console.log(cards)
}

/*----- Deal deck of cards function -----*/ 
const dealCards = (arr) => {
    /**loop through all items of the array */
    for(let i = 0; i < arr.length; i++) {
        /**then loop through the items in the cards */
        /*then push the card array into the player array*/
        if(i % 2 === 0 ) {
            players[0].push(arr[i])
        } else{
            players[1].push(arr[i])
        }
    }
    console.log(players)
}



/*----- shuffle deck of cards function -----*/ 
const shuffle = (arr) => {
    // console.table(ary)
    for(let i = arr.length -1; i > 0; i--) {
        /*rearrange the deck array and pass it back into the array object*/
      let random = arr[Math.floor(Math.random() * arr.length)];
      /* create variable to hold the item*/
      let holdArrayItem = arr[i];
      arr[i] = random;
      random = holdArrayItem;   
    }
    console.log(arr)
    return arr;
}
// shuffle(cards)
// };


// console.log(arr[x]);
// console.log(holdArrayItem);

/*----- Invocations -----*/ 
eventListener()





})

// window.location.assign
// history.push state


/*----- constants -----*/
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/

