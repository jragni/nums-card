"use-strict"

// for reference http://numbersapi.com/24/trivia
const BASE_URL = "http://numbersapi.com";

// Part 1: Number Facts

// 1.
async function getFavNum(number) {
  let params = {json:""} 
  const response = axios.get( `${BASE_URL}/${number}/trivia`, params = params);

  updateDOM(response);
}

// 2.
async function getNumsFacts(nums) {
  let batch = ""
  for (let i = 0; i < nums.length; i++) {
    if (i !== nums.length - 1) {
      batch += nums[i] + ",";
    } else {
      batch += nums[i];
    }
  }

  let params = {json:""} 
  const response = await axios.get( `${BASE_URL}/${batch}/trivia`, params = params);
  console.log(response.data)

  let numberFacts = Object.values(response.data);
  
  for (let fact of numberFacts) {
    updateDOM(fact)
  }
}


// 3. 
async function getFacts(number) {
  let promises = [];

  for (let i = 0; i < 4; i++) {
    let params = {json:""} 
    const r = axios.get( `${BASE_URL}/${number}/trivia`, params = params);
    promises.push(r);
  }

  let results = await Promise.all(promises);

  for (let result of results) {
    updateDOM(result.data);
  }
}


function updateDOM(result) {
  let $p = $('<p>').text(result);
  $('#results').append($p);
}

// getFacts(4);
// getNumsFacts([11, 24, 88]);
// getFacts(11);