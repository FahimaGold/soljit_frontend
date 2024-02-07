import { useState } from 'react'
import { useAccessToken, useCandidacyRecord } from './hooks/useSalesForceData';
import RecordDetailsComponent from './components/RecordDetailsComponent';
import CandidateForm from './components/CandidateForm';

import './App.css'

function App() {
  const accessToken = useAccessToken();
  return (
    <> 
      <div className="card">
        <span>
        record ID a004L000002gCJK
          </span>
        <RecordDetailsComponent/>
        <CandidateForm accessToken={accessToken}/>
      </div>
    </>
  )
}

export default App
