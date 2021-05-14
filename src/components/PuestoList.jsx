import React from 'react';

export const PuestoList = ({puestos, onDeletePuesto}) => (
    <>
      {puestos.map((elem, idx) => (
          <li key={idx}>
          <h3>{elem.Puesto}</h3>
          <button onClick={() => onDeletePuesto(idx)}>Eliminar</button>
          </li> 
      ))}
    </>
  );
