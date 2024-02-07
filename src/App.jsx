import { useState } from 'react'
import { useAccessToken, useCandidacyRecord } from './hooks/useSalesForceData';
import RecordDetailsComponent from './components/RecordDetailsComponent';
import './App.css'

function App() {
  const accessToken = useAccessToken();
  const {candidacyRecord, fetchCandidacyRecord} = useCandidacyRecord(accessToken);
  const handleRecordClick = ()=>{
    
    fetchCandidacyRecord();
  }
  return (
    <> 
      <div className="card">
        <p>{accessToken}</p>
        <span>
        record ID a004L000002gCJK
          </span>
        <RecordDetailsComponent/>
      </div>
    </>
  )
}

export default App
