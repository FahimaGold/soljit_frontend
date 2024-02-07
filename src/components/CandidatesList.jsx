import React from 'react';
import useAllCandidates from '../hooks/useAllCandidates';

export default function CandidatesList(){
  const { candidates, loading } = useAllCandidates();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Candidate List</h2>
      <ul>
        {candidates.map(candidate => (
          <li key={candidate.Id}>
            {candidate.First_Name__c} {candidate.Last_Name__c} - Year: {candidate.Year__c}, Experience: {candidate.Year_Of_Experience__c}
          </li>
        ))}
      </ul>
    </div>
  );
};
