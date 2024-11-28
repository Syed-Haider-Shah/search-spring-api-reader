import { Detail, NewHome } from './Pages'
import { Footer, Nav } from './Components'
import {  Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Nav/>
      <Routes> 
       <Route path="/" element={<NewHome />} /> 
       <Route path="/detail" element={<Detail />}/>
      </Routes> 
      <Footer/>
    </>
  )
}

export default App
