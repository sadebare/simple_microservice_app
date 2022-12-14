import React, { useEffect, useState } from 'react'
import "./App.css"

function App() {

  const [backendData, setBackend] = useState([{}])

  useEffect(() => {
    fetch("http://talentserver.example.com/api").then(
      response => response.json()
    ).then(
      data => {
        setBackend(data)
      }
    )
  }, [] )
  return  (
    <div className='App'>
      <header className='App-header'>
        {(typeof backendData.content === 'undefined') ? (
          <p>Loading...</p>
        ): (
          backendData.content.map((user, i) => (
            <p key={i}>{user}</p>
          ))
        )}
      </header>

    </div>
  )
}

export default App