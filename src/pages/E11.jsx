import { useState } from "react";
import { Link } from "react-router";


export default function E11() {
    const [resul, setResul] = useState([]);
    const [num, setNum] = useState(0);
    
    function total() {
        let resultado = [];

        let i = 1;


while (i <= 10) {
    const conta = num * i;
    resultado.push(`${num} x ${i} = ${conta} `);
    i++;
}

        setResul(resultado)
        setNum(Number(valor) + 1)
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
        <h1> Exercício 11 - Tabuada </h1>
        <br />
        <span className="e11"></span>
        <br />
        <div className="texto">
        <p>Implemente um programa em Java que escreva no terminal a tabuada de
um número informado pelo usuário. A mensagem deve estar no formato:
"A x B = X".</p>
        </div>
        <div>

        <div className="Input input1">
            <label>Informe um número</label>
            <br />
            <input value={num} onChange={(e) => setNum(e.target.value)} />
            <br />
            <button onClick={total}>executar</button>
            <br />
        </div>
        {
        resul.map( item => {
            return <p>{item}</p>
        })
        }
        </div>
        </div>
        </div>

        </>
    )
}