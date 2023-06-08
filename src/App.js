import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario/index.js';
import Rota from './componentes/Rota/index.js';

function App() {

  const rotas = [
    {
      nome: 'Top',
      corPrimaria: '#0A323C',
      corSecundaria: '#0A1428'
    },
    {
      nome: 'Jungle',
      corPrimaria: '#005A82',
      corSecundaria: '#0A323C'
    },
    {
      nome: 'Mid',
      corPrimaria: '#C89B3C',
      corSecundaria: '#C8AA6E'
    },
    {
      nome: 'Adc',
      corPrimaria: '#0AC8B9',
      corSecundaria: '#0397AB'
    },
    {
      nome: 'Sup',
      corPrimaria: '#CDFAFA',
      corSecundaria: '#0AC8B9'
    }
  ]

  const [jogadores,setJogadores] = useState([])

  const aoNovoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario rotas={rotas.map(rota => rota.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}/>

      {rotas.map(rota => <Rota 
        key={rota.nome} 
        nome={rota.nome} 
        corPrimaria={rota.corPrimaria} 
        corSecundaria={rota.corSecundaria}
        jogadores={jogadores.filter(jogador => jogador.rota == rota.nome)}
      />)}

    </div>
  );
}

export default App;
