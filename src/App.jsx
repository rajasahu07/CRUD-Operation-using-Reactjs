import React from "react";
import Homecrud from "./Component/Homecrud";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Createuser from "./Component/Createuser";
import User from "./Component/User";
import Edituser from "./Component/Edituser";


const App = () => {
    return(
        <div>
            <BrowserRouter>
            <Homecrud/>
            <Routes>
                <Route element={<Createuser/>} path="/createuser"/>
                <Route element={<User/>} path="/user"/>
                <Route element={<Edituser/>} path="/edit/:index"/>
            </Routes>
            
            </BrowserRouter>
        </div>
    )
}

export default App