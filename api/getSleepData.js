const axios = require('axios');

module.exports = async (req, res) => {
  let date = new Date();
  date.setDate(date.getDate()-1 );

  console.log(`Querying data for ${date.toISOString().slice(0, 10)}`);

  try {
    const response = await axios.get(`https://api.ouraring.com/v2/usercollection/sleep?start_date=${date.toISOString().slice(0, 10)}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OURA_PERSONAL_ACCESS_TOKEN}`,
      },
    });
    const responseData = response.data.data;

    if (responseData.length > 0) {

    const endData = responseData[0].total_sleep_duration;
    const dateData = responseData[0].day;
    return res.status(200).json({ total_sleep_duration: endData, date: dateData });
    }
    else{
      return res.status(200).send('No sleep data available' );
    }

  } catch (error) {
    console.error(error);
    return res.status(500).send('Failed to retrieve sleep data' );
  }
};