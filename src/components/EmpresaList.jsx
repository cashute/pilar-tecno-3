import React from 'react';

export const EmpresaList = ({empresas, onDeleteEmpresa}) => (
    <>
      {empresas.map((elem, idx) => (
          <li key={idx}>
          <h3>{elem.Empresa}</h3>
          <button onClick={() => onDeleteEmpresa(idx)}>Eliminar</button>
          </li> 
      ))}
    </>
  );
