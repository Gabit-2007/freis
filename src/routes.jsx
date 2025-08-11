import { BrowserRouter, Routes, Route } from "react-router";

import Inicio from './pages/Inicio.jsx';
import E1 from './pages/E1.jsx';
import E2 from './pages/E2.jsx';
import E3 from './pages/E3.jsx';
import E4 from './pages/E4.jsx';
import E5 from './pages/E5.jsx';
import E6 from './pages/E6.jsx';
import E7 from "./pages/E7.jsx";
import E8 from "./pages/E8.jsx";
import E9 from "./pages/E9.jsx";
import E10 from "./pages/E10.jsx";
import E11 from "./pages/E11.jsx";


export default function Navegacao() {
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={< Inicio />}/>
        <Route path="/E1" element={< E1 />}/>
        <Route path="/E2" element={< E2 />}/>
        <Route path="/E3" element={< E3 />}/>
        <Route path="/E4" element={< E4 />}/>
        <Route path="/E5" element={< E5 />}/>
        <Route path="/E6" element={< E6 />}/>
        <Route path="/E7" element={< E7 />}/>
        <Route path="/E8" element={< E8 />}/>
        <Route path="/E9" element={< E9 />}/>
        <Route path="/E10" element={< E10 />}/>
        <Route path="/E11" element={< E11 />}/>
        </Routes>
        </BrowserRouter>
    )
}