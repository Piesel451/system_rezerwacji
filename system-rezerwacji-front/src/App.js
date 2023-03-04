import './App.css';
import React, { useState } from 'react'
import axios from 'axios'
function App() {
  const [test, setTest] = useState("")

  async function postTest(e){
    e.preventDefault()

    try {
      await axios.post("http://localhost:4000/post_test", {
        test
      })

    }catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <form onSubmit={postTest}>
        <input type="text" value={test} onChange={(e) => setTest(e.target.value)}></input>
        <button type="submit">Test</button>
      </form>
    </div>
  );
}

export default App;
