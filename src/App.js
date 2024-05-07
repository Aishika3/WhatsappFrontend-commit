import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Form from './pages/Form'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error404 from './pages/Error404'

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/fillform' element={<Form/>}/>
          <Route path='/services'/>
          <Route path='/products'/>
          <Route path='/sign-up'/>
          <Route path='*' exact={true} element={<Error404/>} />
        </Routes>  
      </Router>
    </div>
  );
}

export default App;

