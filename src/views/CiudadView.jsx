import React from 'react';
import {CiudadList} from '../components/CiudadList';
import {checkString} from '../utils/stringUtils';
import {getPais, getCiudad, postCiudad, deleteCiudad } from '../clients/client';

export class CiudadView extends React.Component {
  constructor() {
    super();
    this.state = {
      ciudades: [],
      newCiudad: "",
      paises: [],
      paisId: [],
    };
  }
  
  componentDidMount() {   
    getCiudad().then(res => {
      this.setState({ciudades: res})
    })

    getPais().then(res => {
      this.setState({paises: res})
    })
  }
  
  componentDidUpdate(){
    getCiudad().then(res => {
      this.setState({ciudades: res})
    })
  }

  addNewCiudad = () => {
    if (checkString(this.state.paisId)){
      postCiudad(this.state.newCiudad, this.state.paisId).then(res => this.setState({  
        newCiudad: '',
        paisId: ''
      }))}
      else {
        alert('Seleccione un pais');
      }
  }

  deleteCiudad = (id) => {
    deleteCiudad(id)  
  }

  handleNewCiudad = (e) => {
    this.setState({
      newCiudad: e.target.value,
    });
  }

	handleSelect = (e) => {
		e.preventDefault();
		this.setState({
      paisId: e.target.value,
		});
	};

  handleNewCiudadSubmit = (e) => {
    e.preventDefault();
    if(checkString(this.state.newCiudad.trim()))
    {
      this.addNewCiudad(e, this.state.newCiudad)
    }
    else {
      alert('Ingrese una ciudad');
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleNewCiudadSubmit}>
          <div class="mb-3">
            <label class="form-label">Ciudad:</label> 
            <input class="form-control" type="text"  value={this.state.newCiudad} onChange={(e) => this.handleNewCiudad(e)}></input>
          </div>
          <div class="mb-3">
            <select class="form-select form-select-lg mb-3" id="inputGroupSelect01" onChange={(e) => this.handleSelect(e)} value={this.state.pais}>
              <option value='' >Seleccione Pais</option>
                          { this.state.paises.map((elem, index) => (
                              <option key={index+1} value={elem.id}>{elem.name}</option>
                          ))}
            </select> 
          </div>
          <div class="mb-3">
            <button type="submit" class="btn btn-primary">Agregar</button>
          </div>    
        </form>
          <CiudadList ciudades={this.state.ciudades} onDeleteCiudad= {this.deleteCiudad}></CiudadList>
      </div>
    );
  }
}