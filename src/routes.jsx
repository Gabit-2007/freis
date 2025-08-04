import { BrowserRouter, Routes, Route } from "react-router";

import Inicio from './src/pages/Inicio.jsx';
import E1 from './src/pages/E1.jsx';

export default function Navegacao() {
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={< Inicio />}/>
        <Route path="/E1" element={< E1 />}/>
        </Routes>
        </BrowserRouter>
    )
}