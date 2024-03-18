//Faça um componente que faça um retângulo da largura da tela por 200px
//Crie um variável com let no javascript que contenha o valor "Meu Componente"
//Crie uma div no componente que dentro dela mostre um <p> contendo o valor da variável

export default MeuComponente;

import "./MeuComponente.css"
function MeuComponente() {
    let variavel = "Meu componente"
    return (
      <> 
<div className = "retangulo"><p>{variavel}</p></div>
      </>
    )
  }

