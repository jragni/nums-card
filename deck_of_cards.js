"use-strict"

const BASE_URL = 'http://deckofcardsapi.com/api';
// Part 1. 
async function getSingleCard() {
  let params = {count:1};
  let newDeckURL = BASE_URL + "/deck/new/draw/"
  
  let response = await axios.get(newDeckURL, params=params);
  const card = response.data.cards;
  DECK_ID = response.data.deck_id;

  console.log(`${card[0].value} of ${card[0].suit}`);
}

getSingleCard();
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