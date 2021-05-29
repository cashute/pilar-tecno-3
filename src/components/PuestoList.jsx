import React from 'react';
import { Button, Table,  } from 'react-bootstrap';

export const PuestoList = ({puestos, onDeletePuesto}) => (
<>
  <Table striped bordered hover>
      <thead>
          <tr>
              <th>#</th>
              <th>Puesto</th>
              <th>Empresa</th>
              <th>-</th>
          </tr>
      </thead>
      <tbody>
      {puestos.map((elem, idx) => (
          <tr key={idx}>
              <th scope="row">{idx}</th>
              <td>{elem.Puesto}</td>
              <td>{elem.Empresa}</td>
              <td>
              <Button onClick={() => onDeletePuesto(idx)}>Eliminar</Button>
              </td>
          </tr>
  ))}
      </tbody>
  </Table>
</>
  );
