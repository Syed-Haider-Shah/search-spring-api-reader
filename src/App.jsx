import { Home, Detail, NewHome } from './Pages'
import { Nav } from './Components'
import {  Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Nav/>
      <Routes> 
       <Route path="/" element={<NewHome />} /> 
       <Route path="/detail" element={<Detail />}/>
      </Routes> 
    </>
  )
}

export default App
