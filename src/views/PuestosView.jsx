import React from 'react';
import {PuestoList} from '../components/PuestoList';
import {checkString} from '../utils/stringUtils';
import {getPuesto, getEmpresa, postPuesto, deletePuesto} from '../clients/Client';

export class PuestosView extends React.Component {
  constructor() {
    super();
    this.state = {
      puestos: [],
      newPuesto: "",
      newDescripcion: "",
      empresas: [],
      empresaId: []
    };
  }

  componentDidMount() {
    getEmpresa().then(res => {
      this.setState({empresas: res})
    });

    getPuesto().then(res => {
      this.setState({puestos: res})
    });   
  }

  componentDidUpdate() {
    getPuesto().then(res => {
      this.setState({puestos: res})
    });  
  }

  addNewPuesto = () => {
    if (checkString(this.state.empresaId)){
      postPuesto(this.state.newPuesto, this.state.newDescripcion, this.state.empresaId).then(res => this.setState({
        newPuesto: '',
        newDescripcion: ''
      }));}
      else {
        alert('Seleccione una empresa');
      }
  }

  deletePuesto = (id) => {
    deletePuesto(id)
  }

  handleNewPuesto = (e) => {
    this.setState({
      newPuesto: e.target.value,
    });
  }

  handleNewDescripcion = (e) => {
    this.setState({
      newDescripcion: e.target.value,
    });
  }

  handleSelect = (e) => {
    e.preventDefault();
    this.setState({
      empresaId: e.target.value,
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
          <label class="form-label">Descripción:</label>
          <input  type="text" class="form-control" id="" value={this.state.newDescripcion} onChange={(e) => this.handleNewDescripcion(e)} ></input>
        </div>
        <div class="mb-3">
          <select class="form-select form-select-lg mb-3" id="inputGroupSelect01" onChange={(e) => this.handleSelect(e)} value={this.state.empresa}>
            <option value=''>Seleccione Empresa</option>
              { this.state.empresas.map((empresa, index) => (
                <option key={index+1} value={empresa.id}>{empresa.name}</option>
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