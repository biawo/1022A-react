export default Main;
import "./Main.css"

function Main(){
    return(
        <>
        <main>
            <div className="estudante-box">
                <img className="estudante-foto" src = "https://github.com/biawo.png" alt=""/>
                <div className="informacoes">
                <h3 className="estudante_nome">Bianca de Oliveira Moraes</h3>
                <p className="estudante_descricao">Estudante do IFMS</p>
                <a className="link-git" href="https://github.com/">GitHub.</a>
                </div>
            </div>
        </main>
        </>
    )
}