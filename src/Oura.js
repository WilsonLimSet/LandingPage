
import axios, * as others from 'axios';


const getSleepData = async () => {
  const response = await axios.get('https://api.ouraring.com/v2/usercollection/daily_activity', {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_OURA_PERSONAL_ACCESS_TOKEN}`,
    }
  });
  console.log(response.data);
};

export default getSleepData;