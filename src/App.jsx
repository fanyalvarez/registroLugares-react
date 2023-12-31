import { BrowserRouter, Routes, Route, Navigate, Form } from "react-router-dom";

import { Navigation } from "./components/Navigation";
import { LandingPage } from "./pages/LandinPage";
import { Login } from "./components/Register/Login";
import { SignUp } from "./components/Register/SignUp";

import { ListPage } from "./pages/ListPage";
import { ListPageUser } from "./pages/ListPageUser";
import { PlacesListUser } from "./components/Place/PlacesListUser";
import { FormPlace } from "./components/Place/FormPlace";

import { CardPlacePage } from "./pages/CardPlacePage";
import { FormComments } from "./components/Card/FormComments";
import { DashboardUser } from "./components/Dashboard/DashboardUser";
function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/DashboardUser/" element={<DashboardUser />} />

        <Route path="/" element={<LandingPage />} />
        <Route path="/SignUp/" element={<SignUp />} />
        <Route path="/Login/" element={<Login />} />

        <Route path="/ListPage" element={<ListPage />} />
        <Route path="/ListPageUser" element={<ListPageUser />} />
        <Route path="/PlacesListUser" element={<PlacesListUser />} />
        <Route path="/FormPlace" element={<FormPlace />} />
        <Route path="/FormPlace/:id" element={<FormPlace />} />

        <Route path="/CardPlacePage/:id" element={<CardPlacePage />} />
        <Route path="/FormComments" element={<FormComments />} />
        <Route path="/FormComments/:id" element={<FormComments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
