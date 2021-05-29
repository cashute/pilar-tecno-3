import React from 'react';
import { Button, Table,  } from 'react-bootstrap';

export const EmpresaList = ({empresas, onDeleteEmpresa}) => (
    <>
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Empresa</th>
                <th>Ciudad</th>
                <th>-</th>
            </tr>
        </thead>
        <tbody>
        {empresas.map((elem, idx) => (
            <tr key={idx}>
                <th scope="row">{idx}</th>
                <td>{elem.Empresa}</td>
                <td>{elem.Ciudad}</td>
                <td>
                <Button onClick={() => onDeleteEmpresa(idx)}>Eliminar</Button>
                </td>
            </tr>
    ))}
        </tbody>
    </Table>
  </>
);
