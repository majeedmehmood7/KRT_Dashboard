import SideBar from "./Components/Sidebar";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import About from './Pages/About';
import Home from "./Pages/Home";
import Location from "./Pages/Location";
import Setting from "./Pages/Setting";
import User from "./Pages/User";
import Item from "./Pages/Item";
import House from "./Pages/House";
import WareHouse from "./Pages/WareHouse";
import Vendor from "./Pages/Vendor";
import Received from "./Pages/Received";
import Issue from "./Pages/Issue";
import Logout from "./Pages/Logout";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home/>}></Route>
      <Route path="user" exact element={<User/>}/>
      <Route path="/location" exact element={<Location/>}></Route>
      <Route path="/item" exact element={<Item/>}></Route>
      <Route path="house" exact element={<House/>}></Route>
      <Route path="ware" exact element={<WareHouse/>}></Route>
      <Route path="vendor" exact element={<Vendor/>}></Route>
      <Route path="received" exact element={<Received/>}></Route>
      <Route path="issue" exact element={<Issue/>}></Route>
      <Route path="/about" exact element={<About/>}></Route>
      <Route path="setting" exact element={<Setting/>}></Route>
      <Route path="logout" exact element={<Logout/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
