import axios from 'axios'
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router'
import Swal from 'sweetalert2'

function EditUser() {

    const params = useParams()

    // Hooks
    const [nombre, setNombre] = useState('')
    const [mascota, setMascota] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')

    // Para volver atrás al index
    const navegar = useNavigate()

    useEffect(() => {
        axios.post('/api/usuario/obtenerdatausuario', {idusuario: params.idusuario}).then(res => {
            console.log(res.data[0]);
            const datausuario = res.data[0]
            setNombre(datausuario.nombre)
            setNombre(datausuario.mascota)
            setEmail(datausuario.email)
            setTelefono(datausuario.telefono)
        })
    }, [])
    
    //función que actualiza
    function editarUsuario() {
        // Nuevo objeto para actualizar el usuario
        const actualizarusuario = {
            nombre: nombre,
            mascota: mascota,
            email: email,
            telefono: telefono,
            idusuario: params.idusuario
        }

        //Hacer la petición usando axios
        axios.post('/api/usuario/actualizausuario', actualizarusuario)
        .then(res => {
            console.log(res.data);
            // alert(res.data)
            Swal.fire('Excelente' , 'El usuario se edito correctamente')

            navegar('/')
        })
        .then(err => {console.log(err)})
    }


    return (
        <div className="App">
        <div className="row">
            <h2 className="mt-4">Editar usuario</h2>
        </div>
        <div className="row">
            <div className="col-sm-6 offset-3">

                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
                </div>

                <div className="mb-3">
                    <label htmlFor="mascota" className="form-label">Mascota</label>
                    <input type="text" className="form-control" value={mascota} onChange={(e) => {setMascota(e.target.value)}}></input>
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                </div>

                <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Telefono</label>
                    <input type="text" className="form-control" value={telefono} onChange={(e) => {setTelefono(e.target.value)}}></input>
                </div>

                <button onClick={editarUsuario} className="btn btn-success">Editar Usuario</button>
            </div>
        </div>
    </div>
    )
}

export default EditUser;