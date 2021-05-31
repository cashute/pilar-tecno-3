import axios from 'axios'


export const getData = async () =>{
    try{
        const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/db")
        return res.data
        
        
    }catch(err){
        alert('ERROR');
    }
};

export const getPais = async () =>{
    try{
        const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/countries")
        return res.data
        
        
    }catch(err){
        alert('ERROR');
    }
};

export const getCiudad = async () =>{
    try{
        const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/places")
        return res.data
        
        
    }catch(err){
        alert('ERROR');
    }
};

export const getEmpresa = async () =>{
    try{
        const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/organizations")
        return res.data
        
        
    }catch(err){
        alert('ERROR');
    }
};

export const getPuesto = async () =>{
    try{
        const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/jobs")
        return res.data
        
        
    }catch(err){
        alert('ERROR');
    }
};

export const postPais = async (countrie) => {
    const configRequest = {
        method: 'post',
        url: 'https://api-fake-pilar-tecno.herokuapp.com/countries',
        data: {name: countrie}
    }
    try {
        const res = await axios(configRequest)
        return res.data
    } catch (err) {
        alert('ERROR');
        
    }
}


export const postCiudad = async (ciudad, paisId) => {
    const configRequest = {
        method: 'post',
        url: 'https://api-fake-pilar-tecno.herokuapp.com/places',
        data: {
            name: ciudad,
            countrieId: paisId
        }
    }
    try {
        const res = await axios(configRequest)
        return res.data
    } catch (err) {
        alert('ERROR');
        
    }
}


export const postEmpresa = async (empresa, ciudadId) => {
    const configRequest = {
        method: 'post',
        url: 'https://api-fake-pilar-tecno.herokuapp.com/organizations/',
        data: {
            name: empresa,
            placeId: ciudadId
        }
    }
    try {
        const res = await axios(configRequest)
        return res.data
    } catch (err) {
        alert('ERROR');
        
    }
}

export const postPuesto = async (puesto, descripcion, empresaId) => {
    const configRequest = {
        method: 'post',
        url: 'https://api-fake-pilar-tecno.herokuapp.com/jobs',
        data: {
            position: puesto ,
            description: descripcion,
            organizationId: empresaId
        }
    }
    try {
        const res = await axios(configRequest)
        return res.data
    } catch (err) {
        alert('ERROR');
        
    }
}


export const deletePais = async (id) => {
    const configRequest = {
        method: 'delete',
        url: `https://api-fake-pilar-tecno.herokuapp.com/countries/${id}`,
        data: id
    }
    try {
        const res = await axios(configRequest)
        return res.data
    } catch (err) {
        console.log(err)
        
    }
};

export const deleteCiudad = async (id) => {
    const configRequest = {
        method: 'delete',
        url: `https://api-fake-pilar-tecno.herokuapp.com/places/${id}`,
        data: id
    }
    try {
        const res = await axios(configRequest)
        return res.data
    } catch (err) {
        console.log(err)
        
    }
};

export const deleteEmpresa = async (id) => {
    const configRequest = {
        method: 'delete',
        url: `https://api-fake-pilar-tecno.herokuapp.com/organizations/${id}`,
        data: id
    }
    try {
        const res = await axios(configRequest)
        return res.data
    } catch (err) {
        console.log(err)
        
    }
};


export const deletePuesto = async (id) => {
    const configRequest = {
        method: 'delete',
        url: `https://api-fake-pilar-tecno.herokuapp.com/jobs/${id}`,
        data: id
    }
    try {
        const res = await axios(configRequest)
        return res.data
    } catch (err) {
        console.log(err)
        
    }
};