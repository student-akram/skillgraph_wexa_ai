import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Roles from "./pages/Roles";
import SkillGap from "./pages/SkillGap";
import Roadmap from "./pages/Roadmap";
import Mentors from "./pages/Mentors";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

    return (

        <>

            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/roles" element={<Roles />} />

                <Route path="/skill-gap" element={<SkillGap />} />

                <Route path="/roadmap" element={<Roadmap />} />

                <Route path="/mentors" element={<Mentors />} />

                <Route path="*" element={<NotFound />} />

            </Routes>
            <Footer/>
        </>

    );

}

export default App;