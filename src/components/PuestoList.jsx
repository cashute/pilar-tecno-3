import React from 'react';
import { Button, Table,  } from 'react-bootstrap';

export const PuestoList = ({puestos, onDeletePuesto}) => (
<>
  <Table striped bordered hover>
      <thead>
          <tr>
              <th>ID</th>
              <th>Puesto</th>
              <th>Descripción</th>
              <th>-</th>
          </tr>
      </thead>
      <tbody>
      {puestos.map((elem, idx) => (
          <tr key={idx}>
              <th scope="row">{elem.id}</th>
              <td>{elem.position}</td>
              <td>{elem.description}</td>
              <td>
              <Button onClick={() => onDeletePuesto(elem.id)}>Eliminar</Button>
              </td>
          </tr>
  ))}
      </tbody>
  </Table>
</>
  );
