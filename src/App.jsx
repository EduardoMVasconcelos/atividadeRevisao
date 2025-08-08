import { useState } from "react"
export function App() {
  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [resultado, setResultado] = useState(0)

  function soma(e) {
    e.preventDefault()
    setResultado(numero1 + numero2)
  }
  return (
    <div>
      <div id="form">
        <div>
          <input type="number" placeholder="Numero1" onChange={(e) => setNumero1(e.target.valueAsNumber)}/>
          <input type="number" placeholder="Numero2" onChange={(e) => setNumero2(e.target.valueAsNumber)}/>

          <button onClick={soma}>Somar</button>

          <p>Resultado = {resultado}</p>
        </div>
      </div>
    </div>
  )
}