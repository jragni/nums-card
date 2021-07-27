"use-strict"

const BASE_URL = 'http://deckofcardsapi.com/api';

// Part 1. 
async function getSingleCard(deckId="new") {
  let params = {count:1};
  let newDeckURL = BASE_URL + `/deck/${deckId}/draw/`;
  
  let response = await axios.get(newDeckURL, params=params);
  const card = response.data.cards;
  // DECK_ID = response.data.deck_id;

  console.log(`${card[0].value} of ${card[0].suit}`);
}

// Part 2.
/* Make a request to the deck of cards API to request a single card from a newly 
shuffled deck. Once you have the card, make a request to the same API to get 
one more card from the same deck.
*/

async function getTwoCardSameDeck() {
  let params = {count:1};
  let newDeckUrl = BASE_URL + `/deck/new/draw/`
  let r1 = await axios.get(newDeckUrl, params=params);
  const card1 = r1.data.cards;

  let sameDeckUrl = BASE_URL + `/deck/${DECK_ID}/draw/`
  DECK_ID = r1.data.deck_id;
  let r2 = await axios.get(sameDeckUrl, params=params);
  const card2 = r2.data.cards;
  console.log(`${card1[0].value} of ${card1[0].suit} \n ${card2[0].value} of ${card2[0].suit} `);
}

// Part 2.

/** getNewDeckId
 * DESCRIPTION: function that requests a new shuffled deck and returns 
 * the deck id.
 */
async function getNewDeckId() {
  let newDeckURL = BASE_URL + "/deck/new/shuffle";
  let response = await axios.get(newDeckURL);

  return response.data.deck_id;
}

$('button').on("click", drawCardAndDisplay)

let deckId;
let remaining;

/** 
 *
 */
async function drawCardAndDisplay(evt){
  evt.preventDefault();
  
  // If there are no cards remaining, disable button.
  if( remaining == 0){
    return;
  }
  // Check if there is a game already being played
  if ($('button').attr('gameStart') === "false") {
    startGame();
  } else {

    let params = {count:1};
    let response = await axios.get(`${BASE_URL}/deck/${deckId}/draw`, params=params);
    let cardImgURL = response.data.cards[0].image;
    remaining = response.data.remaining;
    $('#results').append($('<img>').attr("src", cardImgURL));
  }
}

async function startGame() {
  deckId = await getNewDeckId();
  $('button').attr('gameStart', 'true');
}