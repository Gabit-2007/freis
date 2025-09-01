import { useState } from "react";
import { Link } from "react-router";
import seta from '../assets/seta.png'


export default function E1() {
    const [resul, setResul] = useState(0);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    function desconto() {
        let resultado = Number(num1) - Number(num2)
        setResul(resultado)
    }

    return(
        <>
        <div className="body">
        <div className="cabecalho">
            <img src={seta} alt="seta" />
        <h1>React FreiS</h1>
        <div className="links">
        <Link to={'/'} className="linka">Inicio</Link>
        <Link className="linka">Sobre</Link>
        </div>
      </div>

        <div className="Exerc">
        
        <h1> Exercício 1 - Cupom de Desconto </h1>
        <br />
        <span className="e1"></span>
        <br />
        <div className="texto">
        <p>Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá de desconto.</p>
        </div>
        <div>
        <div className="Input input2">
            <label>Informe o valor do pedido</label>
            <input value={num1} onChange={(e) => setNum1(e.target.value)} />
            <br />
            <label>Informe o valor do desconto</label>
            <input value={num2} onChange={(e) => setNum2(e.target.value)} />
            <br />
            <button onClick={desconto}>executar</button>
            <br />
        </div>
        <p>O valor é {resul}</p>
        </div>
        </div>

        </div>
        </>
    )
}