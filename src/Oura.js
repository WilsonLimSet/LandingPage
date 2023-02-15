const axios = require('axios');
const getSleepData = async () => {
  let date = new Date();
  date.setDate(date.getDate() - 1);


    console.log(`Querying data for ${date.toISOString().slice(0, 10)}`);
    // Try making the API request with the current date first
    const response = await axios.get(`https://api.ouraring.com/v2/usercollection/daily_sleep?start_date=${date.toISOString().slice(0, 10)}`, {
      headers: {
        //problem here Authorization: `Bearer `,
      }
    });

    const responseData = response.data.data;

console.log(responseData[0].score);
const endData = responseData[0].score;
  
};

export default getSleepData;
