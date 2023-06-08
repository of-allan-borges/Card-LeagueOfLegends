import Jogador from '../Jogador'
import './Rota.css'

const Rota = (props) => {

    const backgroundColor = { backgroundColor: props.corSecundaria }
    const borderColor = {borderColor: props.corPrimaria}

    return(
        props.jogadores.length > 0 ? <section className='rota' style={backgroundColor}>
            <h3 style={borderColor}>{props.nome}</h3>
            <div className='jogadores'>
                {props.jogadores.map( jogador => <Jogador corDeFundo={props.corPrimaria} key={jogador.nick} nick={jogador.nick} campeao={jogador.campeao} imagem={jogador.imagem}/>)}
            </div>
        </section>
        : " "
    )
}

export default Rota