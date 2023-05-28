// components
import './App.css';
import Navbar from './components/Navbar/Navbar'
import UserList from './components/UserList'
import EditUser from './components/EditUser';
// pages
import AddUser from './pages/AddUser';
import Home from './pages/Home/Home';
import Historial from './pages/Historial'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    // Contenedor principal de la aplicación con la clase CSS "App"
    <div className="App">

      {/* Componente Navbar con propiedades nav1, nav2 y nav3 */}
      <Navbar
        nav1="inicio"
        nav2="Agregar Paciente"
        nav3="Historial"
      />

      {/* Componente Routes para definir las rutas */}
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route path='/' element={<Home />} exact></Route>
        {/* Ruta para la página de agregar usuario */}
        <Route path='/agregarusuario' element={<AddUser />} exact></Route>
        {/* Ruta para la página de editar usuario */}
        <Route path='/editarusuario/:idusuario' element={<EditUser />} exact></Route>
        {/* Ruta para la página de historial */}
        <Route path='/historial' element={<Historial />} exact></Route>
      </Routes>

    </div>
  );
}

export default App;
