// TODO: AddUser Connected
import axios from 'axios'
import React, {useEffect} from "react";
import {Link, useNavigate} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../App.css';

function SingleUser({ usuario }) {

    const navegar = useNavigate()

    // Animación de scroll al bajar
    useEffect(() => {
        AOS.init()
    }, [])
    

    // Función para borrar usuario
    function borrarusuario(idusuario) {
        axios.post('/api/usuario/borrarusuario', {idusuario: idusuario}).then(res => {
            console.log(res.data);
            alert(res.data)
            navegar(0)
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="card-container" data-aos="flip-right">
                    <ul className="card">
                   
                        <li className="list-group-item"><strong>ID: </strong>{usuario.idusuario}</li>
                        <li className="list-group-item"><strong>nombre: </strong>{usuario.nombre}</li>
                        <li className="list-group-item"><strong>mascota: </strong>{usuario.mascota}</li>
                        <li className="list-group-item"><strong>correo: </strong>{usuario.email}</li>
                        <li className="list-group-item mb-2"><strong>Telefono: </strong>{usuario.telefono}</li>                        

                    </ul>

                    <div className='btn-container'>
                        <Link to={`/editarusuario/${usuario.idusuario}`}><li className="btn">Editar</li></Link>
                        &nbsp;
                        <button className='btn btn-delete' onClick={() => {borrarusuario(usuario.idusuario)}}>Borrar</button>     
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SingleUser;