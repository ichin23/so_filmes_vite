import { Routes, Route } from "react-router-dom";
import { FilmeDetalesPage } from "../pages/FilmeDetalesPage/index";
import { FilmesPage } from "../pages/Filmes";
import { Home } from "../pages/Home";
import { CadastroFilme } from "../pages/CadastroFilme";
import { PerfilPage } from "../pages/Perfil";
import { Login } from "../pages/Login";

export function RouteWeb() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/criarFilme" element={<CadastroFilme />} />
            <Route path="/filme/:id" element={<FilmeDetalesPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/perfil" element={<PerfilPage />} />
            <Route path="/teste" element={<FilmesPage />} />
        </Routes>
    )
}