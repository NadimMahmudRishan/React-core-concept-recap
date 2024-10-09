import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Core Consept recap</h1>
     <ol>
      <li>Component</li>
      <li>Jsx</li>
      <li>Props</li>
      <li>Event Handeler</li>
      <li>State</li>
      <li>Load Data</li>
     </ol>
     <hr />
     <Post></Post>
    </>
  )
}

export default App
