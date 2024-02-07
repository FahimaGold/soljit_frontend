import { useState } from 'react'
import { useAccessToken } from './hooks/useSalesForceData';
import './App.css'

function App() {
  const accessToken = useAccessToken();

  return (
    <> 
      <div className="card">
        <p>{accessToken}</p>
      </div>
    </>
  )
}

export default App
