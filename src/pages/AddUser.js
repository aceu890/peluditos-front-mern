// TODO: SingleUser Connected
// TODO: Modal Connected
import React, { useState } from "react";
import uniqid from 'uniqid';
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import Modal from '../components/Modal'
import UserList from '../components/UserList'
import '../App.css';



function AddUser() {

    // Hooks
    // modal
    const [estadoModal, cambiarEstadoModal] = useState(false);

    //data db 
    const [nombre, setNombre] = useState('')
    const [mascota, setMascota] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')

    // To go back to the index
    const navegar = useNavigate()

    function agregarUsuario() {
        var usuario = {
            nombre: nombre,
            mascota: mascota,
            email: email,
            telefono: telefono,
            idusuario: uniqid()
        }
        console.log(usuario);

        axios.post('/api/usuario/agregarusuario', usuario)
            .then(res => {
                // alert(res.data)
                Swal.fire('Excelente', 'El usuario se creó con éxito')
                navegar('/')
            })
            .then(err => { console.log(err) })
    }

    return (
        <div className="App">
            <ContenedorBotones>
                {/* <Boton className="btn" onClick={() => cambiarEstadoModal(!estadoModal)}>Añadir Paciente</Boton> */}
                <Boton className="btn" onClick={() => cambiarEstadoModal(!estadoModal)}>➕</Boton>
            </ContenedorBotones>

            {/* Modal #1  */}
            <Modal
                estado={estadoModal}
                cambiarEstado={cambiarEstadoModal}
                titulo="Agregar Paciente"
                mostrarHeader={true}
                mostrarOverlay={true}
                posicionModal={'center'}
                padding={'20px'}
                background={'#fff'}
                color={'#1E1E1E'}
            >

                {/* color palette:  
        #1E1E1E => background, 
        #ECECEC => text color, 
        #e3a466 => btn, 
        #f1c395 => btn hover 
    */}

                <Contenido>
                    {/* <div className="row">
                        <h2 className="mt-4">Crear un nuevo usuario</h2>
                    </div> */}
                    <div className="container-modal">
                        <div className="col-sm-12 offset-0">

                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text" className="form-control custom-input" value={nombre} onChange={(e) => { setNombre(e.target.value) }}></input>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="mascota" className="form-label">Mascota</label>
                                <input type="text" className="form-control" value={mascota} onChange={(e) => { setMascota(e.target.value) }}></input>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email___</label>
                                <input type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                            </div>

                            <div className="mb-5">
                                <label htmlFor="telefono" className="form-label">Telefono</label>
                                <input type="text" className="form-control" value={telefono} onChange={(e) => { setTelefono(e.target.value) }}></input>
                            </div>

                            <div className="mt">
                            <button onClick={agregarUsuario} type="button" className="btn">Guardar Usuario</button>
                            </div>

                        </div>
                    </div>
                </Contenido>
            </Modal>

            <UserList /> {/* Lista de pacientes */}
        </div>
    )
}

export default AddUser;

const ContenedorBotones = styled.div`
    padding: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

const Boton = styled.button`
	// display: block;
	// padding: 10px 30px;
	// border-radius: 100px;
	// color: #fff;
	// border: none;
	// background: orange;
	// cursor: pointer;
	// font-family: 'Roboto', sans-serif;
	// font-weight: 500;
	// transition: .3s ease all;

	// &:hover {
	// 	background: darkorange;
	// }
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
   

	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}

	p {
		font-size: 18px;
		margin-bottom: 20px;
	}

	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;


