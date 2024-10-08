import './App.css';
import Home from './Components/Home';
import NavAuth from './Components/NavAuth';
import {Route, Routes} from 'react-router-dom'
import Register from './Components/Register';
import Login from './Components/Login';
import Profil from './Components/Profil';
import PrivateRoute from './Components/PrivateRoute';
import ErrorsAla from './Components/ErrorsAla';
function App() {
  return (
    <div>
      <NavAuth/>
      <ErrorsAla/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Profil' element={<PrivateRoute><Profil/></PrivateRoute>}/>
      </Routes>
    </div>
  );
}

export default App;
