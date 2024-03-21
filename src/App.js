import './App.css';
import Layout from './Layout/Layout';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Form from './Pages/Form';
import Dashboard from './Pages/Dashboard';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/dash' element={<Dashboard/>}/>
<Route path='/form' element={<Form/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
