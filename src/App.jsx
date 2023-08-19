import { useState } from 'react'
import Home from './pages/Home';
import ProjectDetail from './pages/projects/ProjectDetails';
import Header from './shared/layout/components/Header';
import DefaultFooter from './shared/layout/components/Footer';
import Main from './shared/layout/components/Main';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Header />
     <Main>
     <Routes>
       <Route exact path='/' element={<Home />} />
       <Route path="/project/:id" element={<ProjectDetail/>} />
      </Routes>
     </Main>
     <DefaultFooter />
   </Router>
  )
}

export default App
