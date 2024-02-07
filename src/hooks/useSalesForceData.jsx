import { useState, useEffect } from 'react';
import axios from 'axios'
import querystring from 'querystring'

export function useAccessToken() {
    const [accessToken, setAccessToken] = useState('');
  // fetching the access token before rendering takes place
  useEffect(() => {
    const fetchAccessToken = async () => {
        try {
          const response = await axios.post('http://localhost:3000/oauth2/token', {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            }
          });
          console.log("Response data:"+ response.data)
          setAccessToken(response.data.access_token);
        } catch (error) {
          console.error('Error fetching access token:', error);
        }
      };
  
      fetchAccessToken();
  }, []);

  return accessToken;
}
