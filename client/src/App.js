import React, { useEffect, useState } from 'react'
import "./App.css"

function App() {

  const [backendData, setBackendData] = useState([])
  const [loading, setLoading] = useState(false)
  console.log(backendData)
  
  const url = "http://server.example.com/api"
  const fetchBackend = async () =>{
 
    try {
      setLoading(true)
      let res = await fetch(url)
      const data = await res.json();
      console.log(data)
      setBackendData(data.content[0])
      setLoading(false)
    } catch (error) {
      console.log(error);
      // setLoading(false)
    }
  }
  
  useEffect(() => {
   fetchBackend()
  }, [])

  useEffect(() => {

  }, [] )
  return  (
    <div className='App'>
      <header className='App-header'>
        {/* {(typeof backendData.content === 'undefined') ? (
          <p>Loading...</p>
        ): (
          backendData.content.map((user, i) => (
            <p key={i}>{user}</p>
          ))
        )} */}
        {
        loading ? <p>Loading...</p> : <h1>{backendData}</h1>
        }
      </header>

    </div>
  )
}

export default App