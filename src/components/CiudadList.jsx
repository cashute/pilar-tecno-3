import React from 'react';
import { Button, Table,  } from 'react-bootstrap';

export const CiudadList = ({ciudades,paises, onDeleteCiudad}) => (
  <>
  {/* {console.log(ciudades)}
  {console.log(paises)} */}
  <Table striped bordered hover>
      <thead>
          <tr>
              <th>ID</th>
              <th>Ciudad</th>
              <th>Pais</th>
              <th>-</th>
          </tr>
      </thead>
      <tbody>
      {ciudades.map((elem, idx) => { 
          
       let pais = paises.length > 0 ? paises.find(e => Number(e.id) === Number(elem.countrieId)).name : null;

        return (
          <tr key={idx}>
              <th scope="row">{elem.id}</th>
              <td>{elem.name}</td>
              <td>{pais}</td>
              {/* {console.log(pais)} */}
              <td>
              <Button onClick={() => onDeleteCiudad(elem.id)}>Eliminar</Button>
              </td>
          </tr>
  )})}
      </tbody>
  </Table>
  </>
);
