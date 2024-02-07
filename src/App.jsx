import { useState } from 'react'
import { useAccessToken, useCandidacyRecord } from './hooks/useSalesForceData';
import RecordDetailsComponent from './components/RecordDetailsComponent';
import './App.css'

function App() {
 
  return (
    <> 
      <div className="card">
        <span>
        record ID a004L000002gCJK
          </span>
        <RecordDetailsComponent/>
      </div>
    </>
  )
}

export default App
