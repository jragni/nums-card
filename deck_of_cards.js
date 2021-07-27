"use-strict"

const BASE_URL = 'http://deckofcardsapi.com/api';

async function getSingleCard() {
  let params = {count:1};
  let new_deck_url = BASE_URL + "/deck/new/draw/"
  
  let response = await axios.get(new_deck_url, params=params);
  const card = response.data.cards;
  console.log(`${card[0].value} of ${card[0].suit}`);
}


getSingleCard();