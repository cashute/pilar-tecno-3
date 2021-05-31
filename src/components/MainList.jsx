import React from 'react';
import { Button, Table,  } from 'react-bootstrap';

export const MainList = (props,{ onDeleteLista}) => {
    
    const { jobs, organizations, places, countries } = props.lista;

    return (
    <>
        <div class="container">
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Puesto</th>
                    <th>Descripción</th>
                    <th>Empresa</th>
                    <th>Ciudad</th>
                    <th>Pais</th>
                    {/* <th>-</th> */}
                </tr>
            </thead>
            <tbody>
            
            {jobs ? jobs.map((elem, idx) => {

            let empresa = organizations.length > 0 ? organizations.find(e => Number(e.id) === Number(elem.organizationId)) : null;
            let ciudad = empresa.placeId ? places.find(e => Number(e.id) === Number(empresa.placeId)) : null;
            let pais = ciudad.countrieId ? countries.find(e => Number(e.id) === Number(ciudad.countrieId)) : null;

            return(
                <tr key={idx}>
                    <th scope="row">{elem.id}</th>
                    <td>{elem.position}</td>
                    <td>{elem.description}</td>
                    <td>{empresa.name}</td>
                    <td>{ciudad.name}</td>
                    <td>{pais.name}</td>
                    {/* <td>
                    <Button onClick={() => onDeleteLista(elem.id)}>Eliminar</Button>
                    </td> */}
                </tr>
				)}):null}
            </tbody>
        </Table>
        </div>
    </>
    );
}
