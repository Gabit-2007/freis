import { useState } from "react";
import { Link } from "react-router";


export default function E3() {
    const [resul, setResul] = useState(0);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);

    function total() {
        let resultado = ( Number(num1) * 13.50) + (Number(num2) * 15) + (Number(num3) * 17.50)
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
        
        <h1> Exercício 3 - Valor Total por Quantidade </h1>
        <br />
        <span className="e3"></span>
        <br />
        <div className="texto">
        <p>Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente</p>
        </div>
        <div>
        <div className="Input input3">
            <label>Quantidade Pequeno </label>
            <br />
            <input value={num1} onChange={(e) => setNum1(e.target.value)} />
            <br />
            <label>Quantidade Médio</label>
            <br />
            <input value={num2} onChange={(e) => setNum2(e.target.value)} />
            <br />
            <label>Quantidade Grande</label>
            <br />
            <input value={num3} onChange={(e) => setNum3(e.target.value)} />
            <br />
            <button onClick={total}>executar</button>
            <br />
        </div>
             <p>Resultado: O total é R${resul}</p>
        </div>
        </div>
        </div>
        </>
    )
}