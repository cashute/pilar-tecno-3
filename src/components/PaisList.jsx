import React from 'react';
import { Button, Table,  } from 'react-bootstrap';

export const PaisList = ({paises, onDeletePais}) => (
<>
  <Table striped bordered hover>
      <thead>
          <tr>
              <th>ID</th>
              <th>Pais</th>
              <th>-</th>
          </tr>
      </thead>
      <tbody>
      {paises.map((elem, idx) => (
          <tr key={idx}>
              <th scope="row">{elem.id}</th>
              <td>{elem.name}</td>
              <td>
              <Button onClick={() => onDeletePais(elem.id)}>Eliminar</Button>
              </td>
          </tr>
  ))}
      </tbody>
  </Table>
</>
);

