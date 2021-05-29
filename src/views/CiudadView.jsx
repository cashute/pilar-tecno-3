import React from 'react';
import {CiudadList} from '../components/CiudadList';
import {checkString} from '../utils/stringUtils';

export class CiudadView extends React.Component {
  constructor() {
    super();
    this.state = {
      ciudades: [],
      newCiudad: "",
      paises: [],
      pais: []
    };
  }
      
  componentDidMount() {
    this.setState({
        paises: localStorage.getItem('paises') ? JSON.parse(localStorage.getItem('paises')) : [],
        ciudades: localStorage.getItem('ciudades') ? JSON.parse(localStorage.getItem('ciudades')) : [],
    });
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.ciudades !== this.state.ciudades){
        localStorage.setItem("ciudades", JSON.stringify(this.state.ciudades))
    }
  }

  addNewCiudad = (newCiudad) => {
    if (checkString(this.state.pais.Pais)){
    this.setState({
        ciudades: [...this.state.ciudades, {'Ciudad': this.state.newCiudad, 'Pais': this.state.pais.Pais}],
        newCiudad: '',
        pais:''
    })}
    else {
      alert('Seleccione un pais');
    }
  }

  deleteCiudad = (id) => {
    this.setState({
      ciudades: this.state.ciudades.filter((_, idx) => idx !== id)
    });
  }

  handleNewCiudad = (e) => {
    this.setState({
        newCiudad: e.target.value,
    });
  }

	handleSelect = (e) => {
		e.preventDefault();
		this.setState({
			  pais: JSON.parse(e.target.value),
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
            <select class="form-select form-select-lg mb-3" id="inputGroupSelect01" onChange={(e) => this.handleSelect(e)} value={JSON.stringify(this.state.pais)}>
              <option value={JSON.stringify({})}>Seleccione Pais</option>
                          { this.state.paises.map((pais, index) => (
                              <option key={index+1} value={JSON.stringify(pais)}>{pais.Pais}</option>
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