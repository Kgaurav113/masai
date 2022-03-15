import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Button} from "./components/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Button id="primary">Primary Button</Button>
        <Button id="default">Default Button</Button>
        <Button id="dashed">Dashed Button</Button>
        <Button id="text">Text Button</Button>
        <Button id="link">Link Button</Button>
    </div>
  )
}

export default App
