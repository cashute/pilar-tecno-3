import React from 'react';

export const CiudadList = ({ciudades, onDeleteCiudad}) => (
    <>
      {ciudades.map((elem, idx) => (
          <li key={idx}>
          <h3>{elem.Ciudad}</h3>
          <button onClick={() => onDeleteCiudad(idx)}>Eliminar</button>
          </li> 
      ))}
    </>
  );
