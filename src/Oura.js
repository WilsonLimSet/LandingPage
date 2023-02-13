require('dotenv').config();
const axios = require('axios');

const access_token = process.env.REACT_APP_OURA_PERSONAL_ACCESS_TOKEN;

console.log(access_token); // add this line to check the value of the access_token variable

const main = async () => {
  console.log(process.env.REACT_APP_OURA_PERSONAL_ACCESS_TOKEN);

  const response = await axios.get('https://api.ouraring.com/v2/usercollection/personal_info', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    }
  });
  console.log(basic);
  console.log(access_token);
  console.log(process.env.REACT_APP_OURA_PERSONAL_ACCESS_TOKEN);

};

main();

