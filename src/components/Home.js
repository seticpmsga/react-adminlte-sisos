import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import SideNav from "./SideNav";

import Dashboard from "../pages/Dashboard";
import OrdenServico from "../pages/OrdenServico";
import TiposServico from "../pages/TiposServico";
import Orgao from "../pages/Orgao";
import Clientes from "../pages/Clientes";
import Secretarias from "../pages/Secretarias";


function Home() {
    return (
        <div>


            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/ordenservico" element={<OrdenServico/>}/>
                    <Route path="/tiposservico" element={<TiposServico/>}/>
                    <Route path="/secretarias" element={<Secretarias/>}/>
                    <Route path="/clientes" element={<Clientes/>}/>
                    <Route path="/orgao" element={<Orgao/>}/>
                </Routes>
                <SideNav />
                <Footer />
            </Router>


        </div>
    );
}

export default Home;

