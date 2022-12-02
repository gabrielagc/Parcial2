import logo from './logo.svg';
import './App.css';
import Bandas from './components/bandas';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Bandas/>
      {/* <BrowserRouter>
       <Routes>
         <Route path="/detail" element={< />} />
         
       </Routes>
     </BrowserRouter> */}

      
    </div>
  );
}

export default App;
