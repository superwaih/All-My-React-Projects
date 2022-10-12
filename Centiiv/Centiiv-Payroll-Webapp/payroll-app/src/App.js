import {BrowserRouter, Route, Routes} from "react-router-dom"
import CreatePayroll from "./components/dashboard-component/CreatePayroll";
import Account from "./pages/Account";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Payroll from "./pages/Payroll";
import Register from "./pages/Register";
import PayrollSettings from "./components/payroll-components/PayrollSettings";
import History from "./pages/History"
import Employee from "./pages/Employee";


import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
 Button,
 useDisclosure,
 Text,
} from '@chakra-ui/react'

function App() {
  return (
    <BrowserRouter>

    <Routes >
      <Route path="/" exact element={<Home />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/register" exact element={<Register />} />
      <Route path="/payroll" exact element={<Payroll />} />
      <Route path="/account" exact element={<Account />} />
      <Route path="/history" exact element={<History />} />
      <Route path="/account/employee" exact element={<Employee />} />


      <Route path="/dashboard" exact element={<Dashboard />} />
      <Route path="/payroll/create-payroll" exact element={<CreatePayroll />} />
      <Route path="/payroll/settings" exact element={<PayrollSettings />} />






    </Routes>
    </BrowserRouter>
  
  );
}

export default App;


