import { useJogoDoGalo } from "./useJogoDoGalo.js";
import "./JogoDoGalo.css";

const casaVazia = " ";

export default function JogoDoGalo() {
  const {
    jogo,
    adicionarJogada,
    verificarVencedor,
    verificarFimDoJogo,
    reiniciarJogo,
  } = useJogoDoGalo();

  const vencedor = verificarVencedor(jogo);
  const fimDeJogo = verificarFimDoJogo(jogo);

  return (
    <div className="titulo">
      <h1>Jogo de Futebol do Jogo</h1>

      <div className="tabuleiro">
        {jogo.tabuleiro.map((linha, i) => (
          <div key={i} className="linha">
            {linha.map((celula, j) => (
              <button
                key={j}
                className="celula"
                onClick={() => adicionarJogada(i, j)}
              >
                {celula !== casaVazia ? celula == "X" ? 
                <img src="./Portoo.png" alt="Ícone de reiniciar" />
                : 
                <img src="./Benficaa.png" alt="" />
                : 
                " "}
              
              </button>
            ))}
          </div>
        ))}
      </div>

      <div className="status">
        {vencedor ? (
          <h2>Vencedor: {vencedor}</h2>
        ) : fimDeJogo ? (
          <h2>Não tem Vencedor</h2>
        ) : (
          <h2>Vez do jogador: {jogo.jogadorAtual}</h2>
        )}
      </div>

      <button className="reiniciar" onClick={reiniciarJogo} aria-label="Reiniciar jogo">
        <img src="/reiniciar.png" alt="Ícone de reiniciar" />
      </button>
    </div>
  );
}