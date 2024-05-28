import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Homepage from './pages/homepage';
import Events from './pages/events';
import Gallery from './pages/gallery';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/events" element={<Events />}/>
            <Route path="/gallery" element={<Gallery />}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
