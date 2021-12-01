import React from 'react';
import AreaTexto from './AreaTexto';
import Botao from './Botao';

export default class App extends React.Component{
    constructor(){
        super();
        this.state={
            nomeBotao:'Esconder',
            classeDiv:'show'
        }
    }

    alterarEstado(){
        var Estado;
        var NomeBotao;
        if(this.state.classeDiv === 'show'){
            Estado="hide";
            NomeBotao='Mostrar';
        }else{
            Estado="show";
            NomeBotao='Esconder';
        }
        this.setState({
            nomeBotao: NomeBotao,
            classeDiv: Estado
        })
    }

    render(){
        return(
            <div>
                <AreaTexto classeSecundaria={this.state.classeDiv} texto="quaquer texto" />
                <Botao funcao={this.alterarEstado.bind(this)} valor={this.state.nomeBotao} />
            </div>
        );
    }

}