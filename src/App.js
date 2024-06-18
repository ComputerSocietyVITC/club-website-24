import React from 'react';
import Header from './components/header';
import Homepage from './pages/homepage';
import Events from './pages/events';
import Gallery from './pages/gallery';
import Projects from './pages/projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Team from "./pages/team";
import Blogs from "./pages/blogs";


function App() {
  return (
  <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/team" element={<Team />}/>
          <Route path="/events" element={<Events />}/>
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/blogs" element={<Blogs />}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
