import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 
import {Auth} from "./pages/authenticate/index"
import {Expense} from "./pages/expense/index"

function App() {
  return (
  <div className='App'>
    <Router>
      <Routes>
        <Route path='/' exact element={<Auth />}/>
        <Route path='/expense' element={<Expense />}/>

      </Routes>
    </Router> 
  </div>)
}

export default App;
