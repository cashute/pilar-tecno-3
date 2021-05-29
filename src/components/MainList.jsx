import React from 'react';
import { Button, Table,  } from 'react-bootstrap';

export const MainList = ({lista, onDeleteLista}) => {
    return (
    <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Puesto</th>
                    <th>Empresa</th>
                    <th>Ciudad</th>
                    <th>Pais</th>
                    <th>-</th>
                </tr>
            </thead>
            <tbody>
            {lista.map((elem, idx) => (
                <tr key={idx}>
                    <th scope="row">{idx}</th>
                    <td>{elem.job.position}</td>
                    <td>{elem.Empresa}</td>
                    <td>{elem.Ciudad}</td>
                    <td>{elem.Pais}</td>
                    <td>
                    <Button onClick={() => onDeleteLista(idx)}>Eliminar</Button>
                    </td>
                </tr>
				))}
            </tbody>
        </Table>
    </>
    );
}
