import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


// Crea una raíz de ReactDOM en el elemento con el ID 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación dentro del enrutador del navegador
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

/*
import React from 'react';: Importa la biblioteca React, que es 
necesaria para definir y trabajar con componentes de React.

import ReactDOM from 'react-dom/client';: Importa la biblioteca 
ReactDOM, que es necesaria para renderizar los componentes de React 
en el navegador. La función ReactDOM.createRoot se utiliza más adelante 
en el código.

import './index.css';: Importa un archivo CSS llamado 'index.css'. 
Esto permite aplicar estilos personalizados a los componentes de la aplicación.

import App from './App';: Importa el componente principal de la aplicación
 desde el archivo 'App.js' (o 'App.jsx'). Este componente será el punto de
  entrada de la aplicación y contendrá otros componentes y lógica.

import { BrowserRouter } from 'react-router-dom';: Importa el componente
 BrowserRouter de la biblioteca 'react-router-dom'. BrowserRouter es utilizado
  para manejar el enrutamiento de la aplicación, lo que permite cambiar la 
  interfaz según la URL actual.

const root = ReactDOM.createRoot(document.getElementById('root'));: Crea
 una instancia de ReactDOM utilizando la función createRoot y asigna la 
 instancia a la variable root. Esta función crea una raíz de ReactDOM en 
 el elemento con el ID 'root', que es donde se renderizará la aplicación.

root.render(...);: Renderiza la aplicación dentro de la raíz de ReactDOM.
 El contenido dentro de la función root.render(...) será renderizado en el
  elemento con el ID 'root'. En este caso, se utiliza el componente <BrowserRouter> 
  como envoltorio principal, y dentro de él se coloca el componente <App />. Esto 
  establece la estructura básica de la aplicación y permite que el enrutador del 
  navegador maneje las rutas.

En resumen, este código importa las bibliotecas necesarias, crea una raíz de
 ReactDOM y renderiza la aplicación dentro de esa raíz. El componente <BrowserRouter>
  se utiliza para gestionar el enrutamiento de la aplicación y el componente <App />
   es el componente principal de la aplicación.
*/