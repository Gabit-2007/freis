import { useState } from "react";
import { Link } from "react-router";


export default function E5() {
    const [resul, setResul] = useState(0);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);

    function total() {
        let resultado = (Number(num1) + Number(num2) + Number(num3))/ 3
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
        
        <h1> Exercício 5 - Média </h1>
        <br />
        <span className="e5"></span>
        <br />
        <div className="texto">
        <p>Escreva um programa em Javascript para calcular a MÉDIA de três notas informadas pelo usuário.</p>

        </div>
        <div>
        <div className="Input input3">
            <label>Nota 1 </label>
            <br />
            <input value={num1} onChange={(e) => setNum1(e.target.value)} />
            <br />
            <label>Nota 2</label>
            <br />
            <input value={num2} onChange={(e) => setNum2(e.target.value)} />
            <br />
            <label>Nota 3</label>
            <br />
            <input value={num3} onChange={(e) => setNum3(e.target.value)} />
            <br />
            <button onClick={total}>executar</button>
            <br />
            
        </div>
        <p>Resultado: Sua média é {(resul)}</p>
        </div>
        </div>

        </div>
        </>
    )
}