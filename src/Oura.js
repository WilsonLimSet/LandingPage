const headers = {
  'Authorization': 'Bearer ' + process.env.REACT_APP_OURA_PERSONAL_ACCESS_TOKEN,
  'Accept': 'application/json'
};

const start = '2023-02-01T00:00:00.000Z';
const end = '2023-02-10T23:59:59.999Z';

const url = `https://api.ouraring.com/v2/sleep?start=${start}&end=${end}`;
//sigh - day 3
fetch(url, {headers})
  .then(response => response.json())
  .then(data => {
    // Handle the response data
    console.log(data);
  })
  .catch(error => {
    // Handle the error
    console.error(error);
  });
  export default getSleepData();