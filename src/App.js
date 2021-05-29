import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { NavBarToDo } from './components/NavBarToDo'
import { NotFoundView } from './views/NotFoundView'
import { PaisView } from './views/PaisView'
import { CiudadView } from './views/CiudadView'
import { EmpresaView } from './views/EmpresaView'
import { MainView } from './views/MainView'
import { PuestosView } from './views/PuestosView'

// export class App extends React.Component {

//   constructor(){
//     super();
//     this.state = {
//       countries: ['Argentina', 'Italia', 'Uruguay', 'United Kingdom'],
//       cities: [
//         {name: 'La Rioja', country: 0},
//         {name: 'La Plata', country: 0},
//         {name: 'Benevento', country: 1}
//       ]
//     }
//   }

//   deleteCountry = (name) => {
//     this.setState({
//       countries: this.state.countries.filter(country => country !== name)
//     });
//   }

//   render() {
//     return (
//       <Router>
//         <NavBarToDo></NavBarToDo>
//         <Switch>
//           <Route path="/" exact component={PuestosView}></Route>
//           <Route path="/empresas" exact component={EmpresaView}></Route>
//           <Route path="/ciudades" exact render={CiudadView}></Route>
//           <Route path="/paises" exact render={PaisView}></Route>
//           <Route component={NotFoundView}></Route>
//         </Switch>
//       </Router>
//     );
//   }
// }


const App = () => (
  <div className="App">
  <NavBarToDo />
  <div className="container">
    <Switch>
      <Route path="/" exact component={ MainView } />
      <Route path="/paises" exact component={ PaisView } />
      <Route path="/ciudades" exact component={ CiudadView } />
      <Route path="/empresas" exact component={ EmpresaView } />
      <Route path="/puestos" exact component={ PuestosView } />
      <Route component={ NotFoundView } />
    </Switch>
  </div>
</div>
)

export default App;