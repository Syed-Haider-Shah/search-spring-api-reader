import { Home, Detail } from './Pages'
import { Nav } from './Components'
import {  Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Nav/>
      <Routes> 
       <Route path="/" element={<Home />} /> 
       <Route path="/detail" element={<Detail />}/>
      </Routes> 
    </>
  )
}

export default App
