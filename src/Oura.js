import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SleepData = () => {
  const [endData, setEndData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let date = new Date();
      date.setDate(date.getDate() - 1);
      console.log(`Querying data for ${date.toISOString().slice(0, 10)}`);
      
      const response = await axios.get(`https://api.ouraring.com/v2/usercollection/daily_sleep?start_date=${date.toISOString().slice(0, 10)}`, {
        headers: {
          Authorization: `Bearer CXRSOQUQGN3KUVIKDP5P2BRQJPGTNCXE`,
          
    'X-Requested-With': 'XMLHttpRequest'
        }
      });

      const responseData = response.data.data;
      const score = responseData[0].score;
      setEndData(score);
    };

    fetchData();
  }, []);

  return (
    <div>
      {endData ? (
        <p>Sleep score for previous day: {endData}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SleepData;