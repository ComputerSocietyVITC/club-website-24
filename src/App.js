import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Homepage from './pages/homepage';
import Events from './pages/events';
import Gallery from './pages/gallery';
import Projects from './pages/projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const basename = process.env.PUBLIC_URL || ''; // This will help in local and production environments

  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
