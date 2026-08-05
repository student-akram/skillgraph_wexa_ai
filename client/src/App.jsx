import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Roles from "./pages/Roles";


import Navbar from "./components/Navbar";



function App() {

    return (

        <>

            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/roles" element={<Roles />} />

                

            </Routes>
            
        </>

    );

}

export default App;