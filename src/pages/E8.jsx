import { useState } from "react";
import { Link } from "react-router";


export default function E8() {
    const [resul, setResul] = useState(0);
    const [temp, setTemp] = useState(0);
    
    function total() {
        let resultado = '';
        if (temp >= 41 ){
    resultado = 'HIPERTERMIA';
}
 
else if (temp >= 39.6 && temp < 41 ) {
    resultado = 'FEBRE ALTA';
}


else if (temp >= 37.6 && temp < 39.6){
    resultado = 'FEBRE';
}


else if (temp >=36 && temp < 37.6){
    resultado = 'NORMAL';
}


else {
    resultado = 'HIPOTERMIA';
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
        <h1> Exercício 8 - Temperatura </h1>
        <br />
        <span className="e8"></span>
        <br />
        <div className="texto">
        <p>Implemente um programa em Java
que a partir da temperatura, avalie a
situação da pessoa conforme a
tabela ao lado. Ao final, apresente a
classificação.</p>
        </div>
        <div>

        <div className="Input input1">
            <label>Informe a temperatura</label>
            <br />
            <input value={temp} onChange={(e) => setTemp(e.target.value)} />
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