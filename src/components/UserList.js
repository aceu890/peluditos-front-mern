import axios from 'axios'
import React, { useState, useEffect } from "react";
import SingleUser from "./SingleUser";
import '../App.css';


function UserList() {

    const[datausuarios, setdatausuario] = useState([]);

    useEffect(() => {
      axios.get('api/usuario/obtenerusuarios').then(res => {
        console.log(res.data);
        setdatausuario(res.data)
      }).catch(err => {
        console.log(err);
      })
  
      
    }, [])

    //Mapear listadeusuario en objeto usuario
    const listausuarios = datausuarios.map(usuario => {
      return(
        <div>
          <SingleUser usuario={usuario} />
        </div>
      )
    })
    
// FIXME: ===============/
    return (
        <div className="App">
            <h2>Lista De Pacientes</h2>
            {listausuarios}
        </div>
    )
}

export default UserList;