import { useState } from 'react'
import { FaDiceOne } from "react-icons/fa";
import { FaDiceTwo } from "react-icons/fa6";
import { FaDiceThree } from "react-icons/fa6";
import { FaDiceFour } from "react-icons/fa6";
import { FaDiceFive } from "react-icons/fa6";
import { FaDiceSix } from "react-icons/fa6";
import './App.css'


function App() { 
  const icons = [ 
    { componente: <FaDiceOne />, nome: "Dado: 1" },
    { componente: <FaDiceTwo />, nome: "Dado: 2" },
    { componente: <FaDiceThree />, nome: "Dado: 3" },
    { componente: <FaDiceFour />, nome: "Dado: 4" },
    { componente: <FaDiceFive />, nome: "Dado: 5" },
    { componente: <FaDiceSix />, nome: "Dado: 6" }
  ];
  const [icon, setIcon] = useState(null)
  const [mensagem, setMensagem] = useState("")

  const [contadorClique, setContadorClique] = useState(0);
  

  function sortearDado(){

    let n = Math.floor(Math.random() * icons.length)
    setIcon(icons[n])
    setMensagem(icons[n].nome)
    setContadorClique(prevCount => prevCount + 1);
  }
  
  
  return (
    <>
      <div className='container-app'>
        <h1>Gerador de D6</h1>
        <button onClick={sortearDado}>Clique aqui</button>
        <h2 className='icon'>{icon?.componente}</h2>
        {icon && <p>{icon.nome}</p>}
        <p>Dados gerados: {contadorClique}</p>
        
    </div>
    </>
  )
}


export default App
