const AIRTABLE_URL = 'https://api.airtable.com/v0';
// API KEY from https://airtable.com/account
const API_KEY = 'your_api_key';
// BASE ID from https://airtable.com/api
const BASE_ID = 'your_base_id';

// Fetch is the way we call api end-points
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// First argument passed is just the url we want to call,
// I separated the url up into variable to make it easier to read
fetch(`${AIRTABLE_URL}/${BASE_ID}/Stories`, {
  // Setting the headers options because we need to specify the api key
  headers: {
    'Authorization': `Bearer ${API_KEY}`
  }
})
// .then is just a function (callback) that we use to specifiy what we want
// to happen after we get a response from the request
// in this example we take the response can turn it into json
  .then(res => res.json())
// we have another .then function to console log the json we just parsed
// this is where we would take the data to display from the api
  .then(res => console.log(res))
// .catch just checks for any errors if the api request failed.
// for example if our base id was invalid the api would return an error status
// which would get picked up here
  .catch(err => console.error(err));
