import React from 'react';
import {PuestoList} from '../components/PuestoList';
import {checkString} from '../utils/stringUtils';

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
    if (checkString(this.state.empresa.Empresa)){
      this.setState({
        puestos: [...this.state.puestos, {'Puesto': this.state.newPuesto, 'Empresa': this.state.empresa.Empresa, 'Ciudad': this.state.empresa.Ciudad, 'Pais': this.state.empresa.Pais, }],
        newPuesto: '',
        empresa:''
    })}
      else {
        alert('Seleccione una empresa');
      }
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
    if(checkString (this.state.newPuesto.trim()))
    {
      this.addNewPuesto(e, this.state.newPuesto)
    }
    else {
      alert('Ingrese un puesto');
    }
  }

  render() {
    return (
      <>
      <div>
      <form onSubmit={this.handleNewPuestoSubmit}>
        <div class="mb-3">
          <label class="form-label">Puesto:</label>
          <input  type="text" class="form-control" id="" value={this.state.newPuesto} onChange={(e) => this.handleNewPuesto(e)} ></input>
        </div>
        <div class="mb-3">
          <select class="form-select form-select-lg mb-3" id="inputGroupSelect01" onChange={(e) => this.handleSelect(e)} value={JSON.stringify(this.state.empresa)}>
            <option value={JSON.stringify({})}>Seleccione Empresa</option>
              { this.state.empresas.map((empresa, index) => (
                <option key={index+1} value={JSON.stringify(empresa)}>{empresa.Empresa}</option>
              ))}
          </select>
          </div>
          <div class="mb-3">
          <button type="submit" class="btn btn-primary">Agregar</button>  
          </div>        
      </form>
          <PuestoList puestos={this.state.puestos} onDeletePuesto= {this.deletePuesto}></PuestoList>
      </div>
      </>
    );
  }
}