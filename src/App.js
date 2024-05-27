import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Events from './pages/events'
import Gallery from './pages/gallery'
import Homepage from './pages/homepage'
import Projects from './pages/projects'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/events" element={<Events/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
