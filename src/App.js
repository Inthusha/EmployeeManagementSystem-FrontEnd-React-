
import './App.css';
import {Routes,Route} from 'react-router';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import AddEmployeeComponent from './Components/AddEmployeeComponent';


function App() {
  return (

    <div >
      <HeaderComponent/>
      <Routes>
     
      
      <Route path="/" element={<ListEmployeeComponent/>}></Route>
      <Route path="/employees" element={<ListEmployeeComponent/>}></Route>
      <Route path="/add-employee" element={<AddEmployeeComponent/>}></Route>
      <Route path="/edit-employee/:id" element={<AddEmployeeComponent/>}></Route>
      
       
      </Routes>
      <FooterComponent/>
    </div>
    
  );
}

export default App;
