import React from 'react';
import {PuestoList} from '../components/PuestoList';

export class PuestosView extends React.Component {
  constructor() {
    super();
    this.state = {
      puestos: [],
      newPuesto: "",
      empresas: [],
      empresa: []
    };
  }

  componentDidMount() {
    this.setState({
        puestos: localStorage.getItem('puestos') ? JSON.parse(localStorage.getItem('puestos')) : [],
        empresas: localStorage.getItem('empresas') ? JSON.parse(localStorage.getItem('empresas')) : [],
    });
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.puestos !== this.state.puestos){
        localStorage.setItem("puestos", JSON.stringify(this.state.puestos))
    }
  }

  addNewPuesto = (newEmpresa) => {
    this.setState({
        puestos: [...this.state.puestos, {'Puesto': this.state.newPuesto, 'Empresa': this.state.empresa.Empresa, 'Ciudad': this.state.empresa.Ciudad, 'Pais': this.state.empresa.Pais, }],
        newPuesto: '',
        empresa:''
    });
}

  deletePuesto = (id) => {
    this.setState({
      puestos: this.state.puestos.filter((_, idx) => idx !== id)
    });
  }

  handleNewPuesto = (e) => {
    this.setState({
        newPuesto: e.target.value,
    });
  }

    handleSelect = (e) => {
        e.preventDefault();
        this.setState({
            empresa: JSON.parse(e.target.value),
        });
    };

  handleNewPuestoSubmit = (e) => {
    e.preventDefault();
    if( this.state.newPuesto.trim() === '')
    {
        return false;
    }
    this.addNewPuesto(e, this.state.newPuesto)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleNewPuestoSubmit}>
          <label>Puesto:</label>
          <input type="text" required value={this.state.newPuesto} onChange={(e) => this.handleNewPuesto(e)}></input>
          <label>Empresa:</label>
          <select id="inputGroupSelect01" onChange={(e) => this.handleSelect(e)} value={JSON.stringify(this.state.empresa)}>
						<option value={JSON.stringify({})}>Select option</option>
                        { this.state.empresas.map((empresa, index) => (
                            <option key={index+1} value={JSON.stringify(empresa)}>{empresa.Empresa}</option>
                        ))}
					</select>

          <button type="submit">Agregar</button>
        </form>
        <ul>
          <PuestoList puestos={this.state.puestos} onDeletePuesto= {this.deletePuesto}></PuestoList>
        </ul>
      </div>
    );
  }
}