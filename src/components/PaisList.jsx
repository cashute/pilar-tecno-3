import React from 'react';
import { Button, Table,  } from 'react-bootstrap';

export const PaisList = ({paises, onDeletePais}) => (
<>
  <Table striped bordered hover>
      <thead>
          <tr>
              <th>#</th>
              <th>Pais</th>
              <th>-</th>
          </tr>
      </thead>
      <tbody>
      {paises.map((elem, idx) => (
          <tr key={idx}>
              <th scope="row">{idx}</th>
              <td>{elem.Pais}</td>
              <td>
              <Button onClick={() => onDeletePais(idx)}>Eliminar</Button>
              </td>
          </tr>
  ))}
      </tbody>
  </Table>
</>
);

