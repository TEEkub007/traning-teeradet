import React from 'react'
import Home from './pages/Home';
import About from './pages/Course';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Course from './pages/Course';


const App = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Course/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App