import { useState } from 'react'
import Header from './components/Header'

function App() {
  const students = ['Zulkarnen', 'Galid', 'Dika']
  const [likes, setLikes] = useState(0)
  function handleClick() {
    setLikes(likes + 1)
  }

  return (
    <>
    <Header  channelName="ZRX"/>
    <ul>
      {
        students.map((student) => (
          <li key={student}>{student}</li>
        ))
      }
    </ul>
    <button onClick={handleClick}>{likes} 👍</button>
    </>
  )
}

export default App