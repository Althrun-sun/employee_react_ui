import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import Navbar from "./components/Navbar";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route index element={<EmployeeList></EmployeeList>}></Route>
      <Route path="/" element={<EmployeeList></EmployeeList>}></Route>
      <Route path="/employeeList" element={<EmployeeList></EmployeeList>}></Route>
      <Route path="/addEmployee" element={<AddEmployee></AddEmployee>}></Route>
      <Route path="/editEmployee/:id" element={<UpdateEmployee></UpdateEmployee>}></Route>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
