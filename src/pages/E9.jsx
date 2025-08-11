import { useState } from "react";
import { Link } from "react-router";


export default function E9() {
    const [resul, setResul] = useState(0);
    const [peso, setPeso] = useState(0);
    
    function total() {
        let resultado = '';

        if (peso >= 1000) {
        resultado = (3.50 - 0.50) * Number(peso) / 100;
        }


        else if (peso < 1000 && peso > 0) {
        resultado = 3.50 * Number(peso) / 100;
        }


        else if (peso <= 0) {
        resultado = 'Peso Inválido!'
        }
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
        <h1> Exercício 9 - Sorveteria </h1>
        <br />
        <span className="e9"></span>
        <br />
        <div className="texto">
        <p>Implemente um programa em Java que calcule o total a se pagar em
uma compra na sorveteria, a partir do total de gramas comprado. O
preço de 100g é R$ 3,50 mas se o total de gramas for a partir de 1kg, o
preço das 100g diminui 50 centavos. Se o total de gramas for menor ou
igual a zero, enviar a mensagem “Peso Inválido”.</p>
        </div>
        <div>

        <div className="Input input1">
            <label>Informe o peso do sorvete</label>
            <br />
            <input value={peso} onChange={(e) => setPeso(e.target.value)} />
            <br />
            <button onClick={total}>executar</button>
            <br />
           
        </div>
         <p>O resultado é: {resul}</p>
        </div>
        </div>
        </div>

        </>
    )
}