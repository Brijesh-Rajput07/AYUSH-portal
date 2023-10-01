import Signup from './pages/Signup';
import {Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
