// OBJECTS OF THE GAME WAR/////
const card = {}
const player = {}
const deck = {
    suits: ['Clubs', 'Diamonds', 'Hearts', 'Spades'],
    cards: [14,13,12,11,10,9,8,7,6,5,4,3,2]
}


$(() => {
  
    const $modal = $('#modal');
    const $closeButton = $('#close');
    const $overAge = $('#age');

    //*FUNCTIONS**/    

const closeModal = () => {
    $modal.css('display', 'none')
}

/**BUTTON FUNCTIONS */
const button = () => {
    $overAge.css('background-color', 'red');
}

const awayB = () => {
    $overAge.css('background-color', 'black')
}



//*EVENT LISTERS* */
$closeButton.on('click', closeModal);
$overAge.on('mouseover', button );
$overAge.on('mouseout', awayB );



$('img').on('click', () => {
    alert('clicked')
})



})

// window.location.assign
// history.push state