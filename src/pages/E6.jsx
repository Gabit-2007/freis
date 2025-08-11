import { useState } from "react";
import { Link } from "react-router";


export default function E6() {
    const [resul, setResul] = useState(0);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);

    function total() {
        let resultado = Number(num1) - Number(num2) + Number(num3)
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
        <h1> Exercício 6 - Salário Líquido </h1>
        <br />
        <span className="e6"></span>
        <br />
        <div className="texto">
        <p>Implementar um programa em Java para calcular o salário líquido de um
funcionário, a partir de seu salário base, do bônus mensal em porcentagem e
do total de descontos em reais.</p>
        </div>
        <div>

        <div className="Input input3">
            <label>Informe o valor do salário bruto</label>
            <br />
            <input value={num1} onChange={(e) => setNum1(e.target.value)} />
            <br />
            <label>Informe o valor do desconto</label>
            <br />
            <input value={num2} onChange={(e) => setNum2(e.target.value)} />
            <br />
            <label>Informe o valor do bônus</label>
            <input value={num3} onChange={(e) => setNum3(e.target.value)} />
            <br />
            <button onClick={total}>executar</button>
            <br />
            
        </div>
        <p>O valor é {resul}</p>
        </div>
        </div>
        
        </div>
        </>
    )
}