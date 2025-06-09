import { Routes, Route } from "react-router-dom";
import { FilmeDetalesPage } from "../pages/FilmeDetalesPage/index";
import { FilmesPage } from "../pages/Filmes";
import { Home } from "../pages/Home";
import { CadastroFilme } from "../pages/CadastroFilme";
import { PerfilPage } from "../pages/Perfil";

export function RouteWeb() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teste" element={<FilmesPage />} />
            <Route path="/filme" element={<FilmeDetalesPage />} />
            <Route path="/cadastroFilme" element={<CadastroFilme />} />
            <Route path="/perfil" element={<PerfilPage />} />
        </Routes>
    )
}