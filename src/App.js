import React from 'react';
import Widget from './component/widget';
import Fregrent from './component/fregrant';
import LastWidget from './component/LastWidget';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="">
      <Router>
      <Routes>
        <Route path="/" element={<Widget />} />
        <Route path="/fregrant" element={<Fregrent />} />
        <Route path="/lastWidget" element={<LastWidget />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
