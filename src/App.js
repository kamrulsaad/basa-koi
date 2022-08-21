import Navbar from "./Components/Shared/Navbar";
import { Routes, Route } from 'react-router-dom'
import Home from "./Components/Home/Home";
import { Footer } from "./Components/Shared/Footer";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import { ToastContainer, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ServiceDetails from "./Components/Home/ServiceDetails";
import RequireAuth from "./Components/Shared/RequireAuth";
import Services from "./Components/Home/Services";
import Payment from "./Components/Payment/Payment";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/services" element={<Services ></Services>}></Route>
        <Route path="/courses/:id" element={<RequireAuth><ServiceDetails></ServiceDetails></RequireAuth>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/payment/:id" element={<Payment></Payment>}></Route>
      </Routes>
      <div className='sticky bottom-4 ml-auto'>
        <a target={'_blank'} rel='noreferrer' href="https://wa.me/8801628439125">
          <img className='w-16 sticky bottom-4 left-8 animate-pulse hover:animate-none hover:scale-110 transition-all duration-150' src="assets/whatsapp.png" alt="whatsapp" />
        </a>
      </div>
      <Footer></Footer>
      <ToastContainer position="top-center" transition={Slide}></ToastContainer>
    </div>
  );
}

export default App;
