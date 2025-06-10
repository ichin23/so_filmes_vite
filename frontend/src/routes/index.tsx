import { Routes, Route } from "react-router-dom";
import { FilmeDetalesPage } from "../pages/FilmeDetalesPage/index";
import { FilmesPage } from "../pages/Filmes";
import { Busca } from "../pages/Busca/index";

export function RouteWeb(){
    return(
        <Routes>
            <Route path="/" element={<FilmesPage/>}/>
            <Route path="/FilmeDetalesPage" element={<FilmeDetalesPage/>}/>
            <Route path="/Buscar" element={<Busca termo="robo"/>}/>
        </Routes>
    )
}