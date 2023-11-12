import logo from './logo.svg';
import './App.css';
import Mur from './Composants/Mur';
import Menu from './Composants/Menu';
import Message from './Composants/Message';
import Profil from './Composants/Profil';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {
    
  const [publi, setPubli] = useState([]);

  useEffect(() => {
      fetch('/bd/data.json')
        .then(response => response.json())
        .then(data => setPubli(data));
  }, []);

  return (
    <div className="App">
      <div className='col-xl-2' id="menu" >
        <Menu/>
      </div>

      <Routes>
        <Route path="/" exact element={ <Mur
                                          publi={publi}
                                        />} 
        />
        <Route path="/message" exact element={  <Message
                                                  publi={publi}
                                                />} 
        />
        <Route path="/profil" exact element={ <Profil
                                                publi={publi}
                                              />} 
        />
      </Routes>
    </div>
  );
}

export default App;
