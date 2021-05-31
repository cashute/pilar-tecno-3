import React from 'react';
import { MainList } from '../components/MainList';
import { getData, deletePuesto } from '../clients/Client';

export class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: []
    };
  }

  componentDidMount() {   
    getData().then(res => {
      this.setState({lista: res})
    })
  }

  // componentDidMount() {
  //   this.setState({
  //       lista: localStorage.getItem('puestos') ? JSON.parse(localStorage.getItem('puestos')) : [],
  //   });
  // }

  // componentDidUpdate(prevProps, prevState){
  //   if(prevState.lista !== this.state.lista){
  //       localStorage.setItem("puestos", JSON.stringify(this.state.lista))
  //   }
  // }

  deleteLista = (id) => {
    deletePuesto(id)
  }

  render() {
    return (

      <div>
        {console.log(this.state.lista)}
        <MainList lista={this.state.lista} onDeleteLista={this.deleteLista} />
      
      </div>
      
    );
  }

}
