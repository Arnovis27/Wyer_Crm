import './App.css';
import AgregarUsuarios from './Componentes/AgregarUsuarios';
import ListaUsuarios from './Componentes/ListaUsuarios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListaUsuarios/>} exact></Route>
          <Route path="/agregarusuario" element={<AgregarUsuarios/>} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
