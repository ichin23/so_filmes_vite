import { Routes, Route } from "react-router-dom";
import { FilmeDetalesPage } from "../pages/FilmeDetalesPage/index";
import { FilmesPage } from "../pages/Filmes";

export function RouteWeb(){
    return(
        <Routes>
            <Route path="/" element={<FilmesPage/>}/>
            <Route path="/FilmeDetalesPage" element={<FilmeDetalesPage/>}/>
        </Routes>
    )
}