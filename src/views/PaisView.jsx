import React from 'react';
import {PaisList} from '../components/PaisList';
import {checkString} from '../utils/stringUtils';
import {getPais, postPais, deletePais} from '../clients/Client';

export class PaisView extends React.Component {
  constructor() {
    super();
    this.state = {
      paises: [],
      newPais: ''
    };
  }

  componentDidMount() {
    getPais().then(res => {
      this.setState({paises: res})
    })    
}

  componentDidUpdate(){
    getPais().then(res => {
      this.setState({paises: res})
    })    
  }

  addNewPais = () => {
    postPais(this.state.newPais).then(res => this.setState({
      newPais: ''
    }))
  }

  deletePais = (id) => {
    deletePais(id)
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

