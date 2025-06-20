import { Routes, Route } from "react-router-dom";
import { FilmeDetalesPage } from "../pages/FilmeDetalesPage/index";
import { FilmesPage } from "../pages/Filmes";
import { Busca } from "../pages/Busca/index";
import { Home } from "../pages/Home";
import { CadastroFilme } from "../pages/CadastroFilme";
import { PerfilPage } from "../pages/Perfil";
import { Login } from "../pages/Login";
import { ProtectedRoute } from "./ProtectedRoutes";
import { AvaliarPage } from "../pages/Avaliar";

export function RouteWeb() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/criarFilme" element={
                <ProtectedRoute>
                    <CadastroFilme />
                </ProtectedRoute>
                } />
            <Route path="/filme/:id" element={<FilmeDetalesPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/perfil" element={
                <ProtectedRoute>
                    <PerfilPage />
                </ProtectedRoute>
                } />
            <Route path="/avaliar/:id" element={
                <ProtectedRoute>
                    <AvaliarPage />
                </ProtectedRoute>
                } />
            
            <Route path="/teste" element={<FilmesPage />} />
            <Route path="/buscar" element={<Busca />} />
        </Routes>
    )
}