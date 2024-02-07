import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAccessToken } from './useSalesForceData';

export default function useAllCandidates(){
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const accessToken = useAccessToken()
  useEffect(() => {
    
    const fetchCandidates = async () => {
      try {
        const response = await axios.get('http://localhost:3000/candidacy/all',  {headers: {
            Authorization: `Bearer ${accessToken}`
        }});
        setCandidates(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching candidate records:', error);
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  return { candidates, loading };
};

