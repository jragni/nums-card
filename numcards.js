"use-strict"

// for reference http://numbersapi.com/24/trivia
const BASE_URL = "http://numbersapi.com";

async function getFacts(number) {
  let params = {json:""} 
  const r1 = axios.get( `${BASE_URL}/${number}/trivia`, params = params);
  const r2 = axios.get( `${BASE_URL}/${number}/trivia`, params = params);
  const r3 = axios.get( `${BASE_URL}/${number}/trivia`, params = params);

  let response = [await r1, await r2, await r3];
  console.log(response)
  return response;
}


async function updateDOM() {
  const facts = await getFacts(23);
  for( let fact of facts){
    let $p = $('<p>').text(fact.data);
    $('body').append($p);
  }
}

updateDOM();