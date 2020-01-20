import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';


// Conceitos básicos do React;
// Componente: função que retorna algum conteúdo HTML, CSS, JS. Bloco isolado que não interefere no restante da aplicação
// Estado: Informação que o componente vai manipular, informações mantidas pelo componente {lembrar: conceito de imutabilidade}
// Propriedade: "atributo" dos componentes, informações que um componente pai passa para o componente filho

function App() {
  const [devs, setDevs] = useState([]);



  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }
    loadDevs();
  }, []);
  

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)
    


    setDevs([...devs, response.data]);
    
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
          <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}

        </ul>
      </main>
    </div>
  );
}

export default App;

