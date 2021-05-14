import React from 'react';

export const PaisList = ({paises, onDeletePais}) => (
    <>
      {paises.map((elem, idx) => (
          <li key={idx}>
          <h3>{elem.Pais}</h3>
          <button onClick={() => onDeletePais(idx)}>Eliminar</button>
          </li> 
      ))}
    </>
  );

