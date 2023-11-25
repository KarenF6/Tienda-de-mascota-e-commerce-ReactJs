import Home from './componets/Home/Home';
import CartContent from './componets/CartContent/CartContent';
import DataProvider from './componets/Context/DataContext';
/* INTEGRANTES:
Karen Dayana Fuentes Mendoza
Cesar Luis Alean Hernandez
*/

import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path='/cart' element={<CartContent />} />
      </Routes>    
    </BrowserRouter>
    </DataProvider>
  )  
}

export default App;
