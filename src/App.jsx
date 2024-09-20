
// import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import Skill from './Components/Skills/Skill'

function App() {

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/skills' element={<Skill/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
