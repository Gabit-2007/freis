import { useState } from "react";
import { Link } from "react-router";


export default function E10() {
    const [resul, setResul] = useState(0);
    const [peso, setPeso] = useState(0);
    const [alt, setAlt] = useState(0);
    let resultado = [];
    let resp = ''

    function total() {

        let i = 1;
        let imc = peso / (alt * alt)

        if(imc >= 40){
            resp = 'Obesidade Grau 3'
        }
        else if(imc >= 35 && imc <= 39.9){
            resp = 'Obesidade Grau 2'
        }
        else if(imc >= 30 && imc <= 34.9){
            resp = 'Obesidade Grau 1'
        }
        else if(imc >= 25 && imc <= 29.9){
            resp = 'Sobrepeso'
        }
        else if(imc >= 18.5 && imc <= 24.9){
            resp = 'Peso Normal'
        }
        else{
            resp = 'Abaixo do peso'
        }
        
        resultado.push(`Seu IMC é ${imc.toFixed(2)}, sua classificação é ${resp} // `)

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
        <h1> Exercício 10 - Calculo de IMC com histórico </h1>
        <br />
        <span className="e10"></span>
        <br />
        <div className="texto">
        <p>Implemente um programa em Java que escreva no terminal a tabuada de
um número informado pelo usuário. A mensagem deve estar no formato:
"A x B = X".</p>
        </div>
        <div>

        <div className="Input input2">
            <label>Informe o seu peso</label>
            <br />
            <input value={peso} onChange={(e) => setPeso(e.target.value)} />
            <br />
            <label>Informe sua altura</label>
            <br />
            <input value={alt} onChange={(e) => setAlt(e.target.value)} />
            <br />
            <button onClick={total}>executar</button>
            <br />
            <p>{resul}</p>
            <br />
            
        </div>
        <p>{resultado}</p>
        </div>
        </div>
        </div>

        </>
    )
}