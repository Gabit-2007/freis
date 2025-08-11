import { useState } from "react";
import { Link } from "react-router";


export default function E2() {
    const [resul, setResul] = useState(0);
    const [num1, setNum1] = useState(0);

    function gramas() {
        let resultado = Number(num1) * 1000
        setResul(resultado)
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
        
        <h1> Exercício 2 - Converter Kg/Gramas </h1>
        <br />
        <span className="e2"></span>
        <br />
        <div className="texto">
        <p>Implementar um programa em Javascript para converter kilos em gramas.</p>
        </div>
        <div>
        <div className="Input input1">
            <label>Valor em Kilos </label>
            <br />
            <input value={num1} onChange={(e) => setNum1(e.target.value)} />
            <br />
            <br />
            <button onClick={gramas}>executar</button>
            <br />
        </div>
        <p>Resultado: O total é {resul} gramas</p>
        </div>
        </div>

        </div>
        </>
    )
}