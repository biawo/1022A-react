import "./App.css"
import MeuComponente from "./componentes/MeuComponente"
function App() {
  let nome = "Bia"
  let sobrenome = "Oliveira"
  return (
    <> 
    <MeuComponente/>
    <h1 className="meu-nome">Olá, eu sou a {nome} {sobrenome}!</h1>
    <h1>Olá, eu sou a {nome} {sobrenome}!</h1>
    </>
  ) //JSX - JavaScript XML
}
export default App

//Um componente é uma função que tem um retorno que retorna JSX
// só pode ter o retorno de um elemento (elemento pai)
//Uma função que retorna JSX mas só pode retornar um elemento, todos os outros elementos devem estar dentro desse elemento de retorno
