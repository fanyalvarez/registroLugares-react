import { BrowserRouter, Routes, Route, Navigate, Form } from "react-router-dom";

import { Navigation } from "./components/Navigation";
import { LandingPage } from "./pages/LandinPage";
import { Login } from "./components/Register/Login";
import { SignUp } from "./components/Register/SignUp";

import { ListPage } from "./pages/ListPage";
import { FormPlace } from "./components/Place/FormPlace";

import { CardPlacePage } from "./pages/CardPlacePage";
import { FormComments } from "./components/Card/FormComments";

import { Likes } from "./components/Likes/Likes";


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
        <Route path="/FormPlace" element={<FormPlace/>} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

