import { useState } from "react";

export default function Inicio() {
    const [resul, setResul] = useState(0);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    function desconto() {
        let resultado = Number(num1) - Number(num2)
        setResul(resul)
    }

    return(
        <div>
        <h1> Exercício 1 - Cupom de Desconto </h1>
        <br />
        <p>Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá de desconto.</p>

        <div>
            <label>Informe o valor do pedido</label>
            <br />
            <input value={num1} onChange={(e) => setNum1(e.target.value)} />
            <br />
            <label>Informe o valor do desconto</label>
            <br />
            <input value={num2} onChange={(e) => setNum2(e.target.value)} />
            <br />
            <button onClick={desconto}>executar</button>
            <br />
            <p>O valor é {resul}</p>
        </div>
        </div>

        
    )
}