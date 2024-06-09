import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import SideNav from "./SideNav";

import Dashboard from "../pages/Dashboard";
import OrdenServico from "../pages/OrdenServico";

function Home() {
    return (
        <div>


            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/ordenservico" element={<OrdenServico />} />
                </Routes>
                <SideNav />
                <Footer />
            </Router>


        </div>
    );
}

export default Home;

