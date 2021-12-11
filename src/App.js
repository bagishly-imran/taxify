import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import AddUser from "./pages/addUser";
import Customer from "./pages/customer";
import Drivers from "./pages/drivers";
import Home from "./pages/home";



function App() {
  return (
    <div className="App">

      <Navbar/>

      <Routes>
        <Route path = '/' exact element = {<Home/>}/>
        <Route path = '/taxify.io' exact element = {<Home/>}/>
        <Route path = '/customers' exact element = {<Customer/>}/>        
        <Route path = '/drivers' exact element = {<Drivers/>}/>
        <Route path = '/add' exact element = {<AddUser/>}/>
      </Routes>

    </div>
  );
}

export default App;
