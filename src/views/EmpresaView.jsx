import React from 'react';
import {EmpresaList} from '../components/EmpresaList';
import {checkString} from '../utils/stringUtils';
import {getEmpresa, getCiudad, postEmpresa, deleteEmpresa} from '../clients/Client';

export class EmpresaView extends React.Component {
  constructor() {
    super();
    this.state = {
      empresas: [],
      newEmpresa: "",
      ciudades: [],
      ciudadId: []
    };
  }
      
  componentDidMount() {
    getEmpresa().then(res => {
        this.setState({empresas: res})
    })   
    
    getCiudad().then(res => {
          this.setState({ciudades: res})
    })
  }

  componentDidUpdate(){
    getEmpresa().then(res => {
      this.setState({empresas: res})
    }) 
  }

  addNewEmpresa = () => {
    if (checkString(this.state.ciudadId)){
      postEmpresa(this.state.newEmpresa, this.state.ciudadId).then(res => this.setState({
        newEmpresa: '',
        ciudadId:''
      }))}
      else {
        alert('Seleccione una ciudad');
      }
  }

  deleteEmpresa = (id) => {
    deleteEmpresa(id)
  }

  handleNewEmpresa = (e) => {
    this.setState({
        newEmpresa: e.target.value,
    });
  }

	handleSelect = (e) => {
		e.preventDefault();
		this.setState({
			ciudadId: e.target.value,
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
            <select class="form-select form-select-lg mb-3" id="inputGroupSelect01" onChange={(e) => this.handleSelect(e)} value={this.state.ciudad}>
						  <option value=''>Seleccione Ciudad</option>
                        { this.state.ciudades.map((elem, index) => (
                            <option key={index+1} value={elem.id}>{elem.name}</option>
                        ))}
					  </select> 
          </div>
          <div class="mb-3">
            <button type="submit" class="btn btn-primary">Agregar</button>
          </div>         
        </form>
          <EmpresaList empresas={this.state.empresas} ciudades={this.state.ciudades} onDeleteEmpresa= {this.deleteEmpresa}></EmpresaList>
      </div>
    );
  }
}