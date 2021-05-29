import React from 'react';
import { MainList } from '../components/MainList'

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      lista: []
    };
  }

  componentDidMount() {
    this.setState({
        lista: localStorage.getItem('puestos') ? JSON.parse(localStorage.getItem('puestos')) : [],
    });
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.lista !== this.state.lista){
        localStorage.setItem("puestos", JSON.stringify(this.state.lista))
    }
  }

  deleteLista = (id) => {
    this.setState({
      lista: this.state.lista.filter((_, idx) => idx !== id)
    });
  }

  render() {
    return (
      <div>
        
        <MainList lista={this.state.lista} onDeleteLista={this.deleteLista} />
      
      </div>
      
    );
  }

}
