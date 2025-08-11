import { Link } from "react-router";
import './index.scss';

export default function Inicio() {
  return (
    <>
    <div className="body">
      <div className="cabecalho">
        <h1>React FreiS</h1>
        <div className="links">
        <Link to={'/'} className="linka">Inicio</Link>
        <Link className="linka">Sobre</Link>
        </div>
      </div>
    <div className="Inicio">
      <h1>Escolha um Programa...</h1>

      <div className="cartoes">

      <div className="cartao">
        <Link to= {'/E1'}>
        <button>
        <span className="e1"></span>
        <h2>Cupom de desconto</h2>
        <p>Exercício 01</p>
        </button>
        </Link>
      </div>

      <div className="cartao">
        <Link to= {'/E2'}>
        <button>
        <span className="e2"></span>
        <h2>Converter Kg/Gramas</h2>
        <p>Exercício 02</p>
        </button>
        </Link>
      </div>

      <div className="cartao">
        <Link to= {'/E3'}>
        <button>
        <span className="e3"></span>
        <h2>Valor Total por Quantidade</h2>
        <p>Exercício 03</p>
        </button>
        </Link>
      </div>

      <div className="cartao">
        <Link to= {'/E4'}>
        <button>
        <span className="e4"></span>
        <h2>Leitura de Livro</h2>
        <p>Exercício 04</p>
        </button>
        </Link>
      </div>
      
      <div className="cartao">
        <Link to= {'/E5'}>
        <button>
        <span className="e5"></span>
        <h2>Média de Notas</h2>
        <p>Exercício 05</p>
        </button>
        </Link>
      </div>

      <div className="cartao">
        <Link to= {'/E6'}>
        <button>
        <span className="e6"></span>
        <h2>Salário Líquido</h2>
        <p>Exercício 06</p>
        </button>
        </Link>
      </div>

      <div className="cartao">
        <Link to= {'/E7'}>
        <button>
        <span className="e7"></span>
        <h2>Cores Primária</h2>
        <p>Exercício 07</p>
        </button>
        </Link>
      </div>

      <div className="cartao">
        <Link to= {'/E8'}>
        <button>
        <span className="e8"></span>
        <h2>Temperatura</h2>
        <p>Exercício 08</p>
        </button>
        </Link>
      </div>

      <div className="cartao">
        <Link to= {'/E9'}>
        <button>
        <span className="e9"></span>
        <h2>Sorveteria</h2>
        <p>Exercício 09</p>
        </button>
        </Link>
      </div>

      <div className="cartao">
        <Link to= {'/E10'}>
        <button>
        <span className="e10"></span>
        <h2>IMC com Histórico</h2>
        <p>Exercício 10</p>
        </button>
        </Link>
      </div>

      <div className="cartao">
        <Link to= {'/E11'}>
        <button>
        <span className="e11"></span>
        <h2>Tabuada</h2>
        <p>Exercício 11</p>
        </button>
        </Link>
      </div>

      </div>

    </div>
    </div>
    </>
  );
}
