import List from './components/index1.js'
import React from 'react'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import Test from './components/testpage.js';
import Odi from './components/odipage.js';
import T_twenty from './components/twentypage.js'
import './App.css';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
         <Routes>
          <Route path="/" element={<List />}>
          </Route>
          <Route path="/test" element={<Test />}>

          </Route>
          <Route path="/odi" element={<Odi />}>

          </Route>
          <Route path="/twenty" element={<T_twenty />}>

          </Route>
        </Routes> 

      </BrowserRouter>



    </div>
  );
}

export default App;
