import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CardPlacePage } from "./pages/CardPlacePage";
import { ListPage } from "./pages/ListPage";
import { Navigation } from "./components/Navigation";
import { FormComments } from "./components/Card/FormComments";
import { Login } from "./components/Register/Login";
import { SignUp } from "./components/Register/SignUp";
import { LandingPage } from "./pages/LandinPage";
import {Likes} from "./components/Likes/Likes"

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      
      <Routes>
        <Route path="/CardPlacePage/:id" element={<CardPlacePage />} />
        <Route path="/ListPage" element={<ListPage />} />
        <Route path="/FormComments" element={<FormComments />} />
        <Route path="/FormComments/:id" element={<FormComments />} />
        <Route path="/SignUp/" element={<SignUp />} />
        <Route path="/Login/" element={<Login />} />
        <Route path="/Likes/" element={<Likes />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
  
    </BrowserRouter>
  );
}

export default App;

// {/* <Route path="/" element={<Navigate to="/Card" />} /> */}
