import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {


    const [nick, setNick] = useState('')
    const [campeao, setCampeao] = useState('')
    const [imagem, setImagem] = useState('')
    const [rota, setRota] = useState('')
    
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoJogadorCadastrado({
            nick,
            campeao,
            imagem,
            rota
        })
        setNick(' ')
        setCampeao(' ')
        setImagem(' ')
        setRota(' ')
    }

    return (
        <section className="formulario">
        <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do jogador</h2>
            <CampoTexto 
                obrigatorio={true} 
                label="Nick" 
                placeholder="Digite o seu nick..."
                valor={nick}
                aoAlterado={valor => setNick(valor)}
            />
            <CampoTexto 
                obrigatorio={true} 
                label="Campeão" 
                placeholder="Digite o seu campeão..." 
                valor={campeao}
                aoAlterado={valor => setCampeao(valor)}
            />
            <CampoTexto 
                label="Imagem" 
                placeholder="Digite o endereço da imagem..." 
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
            />
            <ListaSuspensa 
                obrigatorio={true} 
                label="Rota" 
                itens={props.rotas}
                valor={rota}
                aoAlterado={valor => setRota(valor)}
                />
            <Botao>
                Criar Card
            </Botao>
        </form>
    </section>
    )
}
    

export default Formulario