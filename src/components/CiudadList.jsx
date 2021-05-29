import React from 'react';
import { Button, Table,  } from 'react-bootstrap';

export const CiudadList = ({ciudades, onDeleteCiudad}) => (
  <>
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
      {ciudades.map((elem, idx) => (
          <tr key={idx}>
              <th scope="row">{elem.id}</th>
              <td>{elem.name}</td>
              <td>{elem.countrieId}</td>
              <td>
              <Button onClick={() => onDeleteCiudad(elem.id)}>Eliminar</Button>
              </td>
          </tr>
  ))}
      </tbody>
  </Table>
  </>
);
