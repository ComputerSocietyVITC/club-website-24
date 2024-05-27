import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Gallery from './pages/gallery';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/gallery"> GO TO PAGE</Link>
        </header>
        <Routes>
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
