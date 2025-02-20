import { useState } from 'react'
import { FaDiceOne } from "react-icons/fa";
import { FaDiceTwo } from "react-icons/fa6";
import { FaDiceThree } from "react-icons/fa6";
import { FaDiceFour } from "react-icons/fa6";
import { FaDiceFive } from "react-icons/fa6";
import { FaDiceSix } from "react-icons/fa6";
import './App.css'


function App() { 
  const [icons, setIcons] = useState([<FaDiceOne />, <FaDiceTwo />, <FaDiceThree />, <FaDiceFour />, <FaDiceFive />, <FaDiceSix />])
  const [icon, setIcon] = useState()

  const [contadorClique, setContadorClique] = useState(0);
  

  function sortearDado(){

    let n = Math.floor(Math.random() * icons.length)
    setIcon(icons[n])
    setContadorClique(prevCount => prevCount + 1);
  }
  
  
  return (
    <>
      <div className='container-app'>
        <h1>Gerador de D6</h1>
        <button onClick={sortearDado}>Clique aqui</button>
        <h2 className='icon'>{icon}</h2>
        <p>Dados gerados: {contadorClique}</p>
        
    </div>
    </>
  )
}


export default App
