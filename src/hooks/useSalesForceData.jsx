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


export function useCandidacyRecord(){
    const [candidacyRecord, setcandidacyRecord] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const accessToken = useAccessToken();
    const fetchCandidacyRecord = async () => {
        
        console.log("Access Token " + accessToken)
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('http://localhost:3000/candidacy/record', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            setcandidacyRecord(response.data);
        } catch (error) {
            console.error('Error fetching record data:', error);
            setError('Error fetching candidate details');
        }finally {
            setLoading(false);
          }
    }
    
   return {candidacyRecord, loading, error, fetchCandidacyRecord};
}