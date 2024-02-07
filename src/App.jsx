import { useState } from 'react'
import { useAccessToken, useCandidacyRecord } from './hooks/useSalesForceData';
import RecordDetailsComponent from './components/RecordDetailsComponent';
import CandidateForm from './components/CandidateForm';
import UpdateCandidateLastNameForm from './components/UpdateCandidateLastNameForm';
import CandidatesList from './components/CandidatesList';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <UpdateCandidateLastNameForm accessToken={accessToken}/>
        <CandidateForm accessToken={accessToken}/>
        <CandidatesList/>
      </div>

    </>
  )
}

export default App
