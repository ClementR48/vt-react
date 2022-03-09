import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateEvent from "./pages/CreateEvent";
import Home from "./pages/Home";
import ListClub from "./pages/ListClub";
import Login from "./pages/Login";
import Messages from "./pages/Messages";
import Profil from './pages/Profil';
import SignUp from "./pages/SignUp";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/create-event" element={<CreateEvent/>}/>
          <Route path="/messages" element={<Messages/>}/>
          <Route path="/profil" element={<Profil/>}/>
          <Route path="/list-club" element={<ListClub/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
