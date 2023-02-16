const axios = require('axios');

module.exports = async (req, res) => {
  let date = new Date();
  date.setDate(date.getDate()-1 );

  console.log(`Querying data for ${date.toISOString().slice(0, 10)}`);

  try {
    const response = await axios.get(`https://api.ouraring.com/v2/usercollection/daily_sleep?start_date=${date.toISOString().slice(0, 10)}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OURA_PERSONAL_ACCESS_TOKEN}`,
      },
    });

    const responseData = response.data.data;
    const endData = responseData[0].score;

    return res.status(200).json({ score: endData });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to retrieve sleep data' });
  }
};