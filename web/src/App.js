import React, { useState, useEffect } from 'react';
import './App.css';
import './global.css';
import './SideBar.css';
import './Main.css';
import API from './services/API';
import DevItem from './Components/DevItem';
import DevForm from './Components/DevForm';


function App() {
  const [devs, setDevs] = useState([]);




  useEffect(() => {
    async function loadDevs() {
      const response = await API.get('/devs');
      setDevs(response.data);

    }
    loadDevs();
  });
  async function handleAddDev(data) {
    const response = await API.post('/devs', data);
    setDevs([...devs, response.data]);
  }


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
