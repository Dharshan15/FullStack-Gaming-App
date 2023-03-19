import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LandingPage from './jsPages/LandingPage';
import LoginSignUp from './jsPages/LoginSignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/loginsignup' element={<LoginSignUp/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
