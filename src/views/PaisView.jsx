import React from 'react';
import {PaisList} from '../components/PaisList';
import {checkString} from '../utils/stringUtils';

export class PaisView extends React.Component {
  constructor() {
    super();
    this.state = {
      paises: [],
      newPais: ''
    };
  }

  componentDidMount() {
    this.setState({
        paises: localStorage.getItem('paises') ? JSON.parse(localStorage.getItem('paises')) : [],
    });
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.paises !== this.state.paises){
        localStorage.setItem('paises', JSON.stringify(this.state.paises))
    }
  }

  addNewPais = (newPais) => {
        this.setState({
            paises: [...this.state.paises, {'Pais': this.state.newPais,}],
            newPais: ''
        });
  }

  deletePais = (id) => {
    this.setState({
      paises: this.state.paises.filter((_, idx) => idx !== id)
    });
  }

  handleNewPais = (e) => {
    this.setState({
        newPais: e.target.value,
      }
    );
  }

  handleNewPaisSubmit = (e) => {
    e.preventDefault();
    if(checkString(this.state.newPais.trim()))
    {
      this.addNewPais(e, this.state.newPais)
    }
    else {
      alert('Ingrese un pais');
    }
  }

  render() {
    return (

    <div>
      <form onSubmit={this.handleNewPaisSubmit}>
        <div class="mb-3">
          <label>Pais:</label>
          <input type="text" class="form-control"  value={this.state.newPais} onChange={(e) => this.handleNewPais(e)}></input>
        </div>
        <div class="mb-3">
          <button class="btn btn-primary" type="submit">Agregar</button>
        </div>
      </form>
          <PaisList paises={this.state.paises} onDeletePais= {this.deletePais}></PaisList>
    </div>
    

    );
  }
}

