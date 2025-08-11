import { useState } from "react";
import { Link } from "react-router";


export default function E7() {
    const [resul, setResul] = useState(0);
    const [cor1, setCor1] = useState(0);
    const [cor2, setCor2] = useState(0);

    function total() {
        let resultado = '';
        if (cor1 == 'vermelho' && cor2 == 'amarelo' || cor1 == 'amarelo' && cor2 == 'vermelho') {
        resultado = 'Laranja';
        }
        else if (cor1 == 'vermelho' && cor2 == 'azul' || cor1== 'azul' && cor2 == 'vermelho') {
        resultado = 'Roxo';
        }
        else if (cor1 == 'amarelo' && cor2 == 'azul' || cor1 == 'azul' && cor2 == 'amarelo') {
        resultado = 'Verde';
        }
        else if (cor1 == cor2) {
        resultado = cor1
        }
        else {
        resultado = 'Apenas cores primárias são aceitas';
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
        <h1> Exercício 7 - Cores Primárias </h1>
        <br />
        <span className="e7"></span>
        <br />
        <div className="texto">
        <p>Implementar um programa em Java para calcular o salário líquido de um
funcionário, a partir de seu salário base, do bônus mensal em porcentagem e
do total de descontos em reais.</p>
        </div>
        <div>

        <div className="Input input2">
            <label>Informe a primeira cor</label>
            <br />
            <input value={cor1} onChange={(e) => setCor1(e.target.value)} />
            <br />
            <label>Informe a segunda cor</label>
            <br />
            <input value={cor2} onChange={(e) => setCor2(e.target.value)} />
            <br />
            <button onClick={total}>executar</button>
            <br />
            
        </div>
        <p>A cor é {resul}</p>
        </div>
        </div>

        </div>
        </>
    )
}