import React from 'react';
import { Button, Table,  } from 'react-bootstrap';

export const CiudadList = ({ciudades, onDeleteCiudad}) => (
  <>
  <Table striped bordered hover>
      <thead>
          <tr>
              <th>#</th>
              <th>Ciudad</th>
              <th>Pais</th>
              <th>-</th>
          </tr>
      </thead>
      <tbody>
      {ciudades.map((elem, idx) => (
          <tr key={idx}>
              <th scope="row">{idx}</th>
              <td>{elem.Ciudad}</td>
              <td>{elem.Pais}</td>
              <td>
              <Button onClick={() => onDeleteCiudad(idx)}>Eliminar</Button>
              </td>
          </tr>
  ))}
      </tbody>
  </Table>
  </>
);
