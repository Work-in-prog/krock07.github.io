// CREATE A DECK OF CARDS/////
let suits = ['hearts','clubs', 'diams', 'spades'];
let cardFace = ['2','3','4','5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let cards = [];
/*player value card goes here*/
let players = [[],[]]
let gameStarts = true;
let gameOver = false;


$(() => {
/*----- cached element references -----*/
    const $modal = $('#modal');
    const $closeButton = $('#close');
    const $overAge = $('#age');
    const $fightBtn = $('#btnBattle')
    const p1 = document.querySelector('#player-1 .hand');
    // const p1 = $('#player-1, .hand');
    // const p2 = $('#player-2, .hand');
    const p2 = document.querySelector('#player-2 .hand')

/*----- event listeners -----*/
const eventListener = () => {
/*----- modal listeners -----*/
$closeButton.on('click', closeModal);
$overAge.on('mouseover', button );
$overAge.on('mouseout', awayB );
$('img').on('click', () => {
/*----- end modal listeners -----*/
})
$fightBtn.on('click', fight)

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
        // update scores
    }
}


/*----- make a show card functions -----*/
const showCard = (card, position) => {
    let move = position * 40;
    /*----- favorite part adding the card icons to the cards using the unicodes -----*/
    let backgroundColor = (card.icon == "H" || card.icon == "D") ? "red" : "black";
    let buildCardFace = '<div style="color: '+ backgroundColor +'">'+ card.number + ' &' + card.suit + ';</div>';
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
    for(let x = arr.length -1; x > 0; x--) {
        /*rearrange the deck array and pass it back into the array object*/
      let random = arr[Math.floor(Math.random() * arr.length)];
      /* create variable to hold the item*/
      let holdArrayItem = arr[x];
      arr[x] = random;
      random = holdArrayItem;   
    }
    // console.log(arr)
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

