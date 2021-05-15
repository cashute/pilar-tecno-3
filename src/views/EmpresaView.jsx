import React from 'react';
import {EmpresaList} from '../components/EmpresaList';
import {checkString} from '../utils/stringUtils';

export class EmpresaView extends React.Component {
  constructor() {
    super();
    this.state = {
      empresas: [],
      newEmpresa: "",
      ciudades: [],
      ciudad: []
    };
  }
      
  componentDidMount() {
    this.setState({
        ciudades: localStorage.getItem('ciudades') ? JSON.parse(localStorage.getItem('ciudades')) : [],
        empresas: localStorage.getItem('empresas') ? JSON.parse(localStorage.getItem('empresas')) : [],
    });
}

  componentDidUpdate(prevProps, prevState){
    if(prevState.empresas !== this.state.empresas){
        localStorage.setItem("empresas", JSON.stringify(this.state.empresas))
    }
  }

  addNewEmpresa = (newEmpresa) => {
    if (checkString(this.state.ciudad.Ciudad)){
      this.setState({
        empresas: [...this.state.empresas, {'Empresa': this.state.newEmpresa, 'Ciudad': this.state.ciudad.Ciudad, 'Pais': this.state.ciudad.Pais}],
        newEmpresa: '',
        ciudad:''
    })}
      else {
        alert('Seleccione una ciudad');
      }
}

  deleteEmpresa = (id) => {
    this.setState({
      empresas: this.state.empresas.filter((_, idx) => idx !== id)
    });
  }

  handleNewEmpresa = (e) => {
    this.setState({
        newEmpresa: e.target.value,
    });
  }

	handleSelect = (e) => {
		e.preventDefault();
		this.setState({
			  ciudad: JSON.parse(e.target.value),
		});
	};

  handleNewEmpresaSubmit = (e) => {
    e.preventDefault();
    if( checkString (this.state.newEmpresa.trim()))
    {
      this.addNewEmpresa(e, this.state.newEmpresa)
    }
    else {
      alert('Ingrese una empresa');
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleNewEmpresaSubmit}>
          <div class="mb-3">
            <label class="form-label">Empresa:</label>  
            <input class="form-control" type="text"  value={this.state.newEmpresa} onChange={(e) => this.handleNewEmpresa(e)}></input>
          </div>
          <div class="mb-3">
            <select class="form-select form-select-lg mb-3" id="inputGroupSelect01" onChange={(e) => this.handleSelect(e)} value={JSON.stringify(this.state.ciudad)}>
						  <option value={JSON.stringify({})}>Seleccione Ciudad</option>
                        { this.state.ciudades.map((ciudad, index) => (
                            <option key={index+1} value={JSON.stringify(ciudad)}>{ciudad.Ciudad}</option>
                        ))}
					  </select> 
          </div>
          <div class="mb-3">
            <button type="submit" class="btn btn-primary">Agregar</button>
          </div>         
        </form>
          <EmpresaList empresas={this.state.empresas} onDeleteEmpresa= {this.deleteEmpresa}></EmpresaList>
      </div>
    );
  }
}