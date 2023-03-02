const axios = require('axios');

const main = async () => {
  let date = new Date();
  date.setDate(date.getDate() - 1);
  const access_token = process.env.REACT_APP_OURA_PERSONAL_ACCESS_TOKEN;

  const response = await axios.get(`https://api.ouraring.com/v2/usercollection/daily_sleep?start_date=${date.toISOString().slice(0, 10)}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    }
  });
 
  const responseData = response.data.data;

console.log(responseData);
const endData = responseData[0].score;

};
main();