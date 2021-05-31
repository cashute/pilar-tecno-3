import React from 'react';
import { Button, Table,  } from 'react-bootstrap';

export const EmpresaList = ({empresas, ciudades, onDeleteEmpresa}) => (
    <>
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>ID</th>
                <th>Empresa</th>
                <th>Ciudad</th>
                <th>-</th>
            </tr>
        </thead>
        <tbody>
        {empresas.map((elem, idx) => {
        
        let ciudad = ciudades.length > 0 ? ciudades.find(e => Number(e.id) === Number(elem.placeId)).name : null;

        return(
            <tr key={idx}>
                <th scope="row">{elem.id}</th>
                <td>{elem.name}</td>
                <td>{ciudad}</td>
                <td>
                <Button onClick={() => onDeleteEmpresa(elem.id)}>Eliminar</Button>
                </td>
            </tr>
    )})}
        </tbody>
    </Table>
  </>
);
