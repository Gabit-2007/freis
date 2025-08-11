import { useState } from "react";
import { Link } from "react-router";


export default function E4() {
    const [resul, setResul] = useState(0);
    const [nome, setNome] = useState(0);
    const [pag, setPag] = useState(0);
    const [sec, setSec] = useState(0);

    function total() {
        let resultado = (Number(pag) * Number(sec)) / 3600
        setResul(resultado.toFixed(2))
    }

    return(
        <>
        <div className="body">
        <div className="cabecalho">
        <h1>React FreiS</h1>
        <div className="links">
        <Link to={'/'} className="linka">Inicio</Link>
        <Link className="linka">Sobre</Link>
        </div>
      </div>

    <div className="Exerc">
        
        <h1> Exercício 4 - Leitura de Livro </h1>
        <br />
        <span className="e4"></span>
        <br />
        <div className="texto">
        <p>Escreva um programa em Javascript para calcular o TEMPO PARA LER UM LIVRO EM HORAS. O usuário deve informar quantas páginas tem o livro e o tempo que leva para ler uma página.
</p>
        </div>
        <div className="Input input3">
            <label>Nome do Livro </label>
            <br />
            <input value={nome} onChange={(e) => setNome(e.target.value)} />
            <br />
            <label>Quantidade páginas</label>
            <br />
            <input value={pag} onChange={(e) => setPag(e.target.value)} />
            <br />
            <label>Segundos para ler uma página</label>
            <br />
            <input value={sec} onChange={(e) => setSec(e.target.value)} />
            <br />
            <button onClick={total}>executar</button>
            <br />
            
        </div>
        <p>Resultado: Você lerá {nome} em {resul} horas</p>
        </div>

        </div>
        </>
    )
}