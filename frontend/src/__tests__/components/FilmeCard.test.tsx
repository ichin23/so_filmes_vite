import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { FilmeCard } from "../../components/FilmeCard";
import { mockFilmes } from "../../mocks/FilmesMock";

describe("FilmeCard", () => {
    it("deve exibir múltiplos filmes", () => {
        render(
            <MemoryRouter>
                <FilmeCard movies={mockFilmes} />
            </MemoryRouter>
        );
        const imgElement = screen.getByRole('img', { name: 'Capa 1' })
        expect(imgElement).toBeVisible();
        expect(screen.getByText("Filme 1")).toBeInTheDocument();
        expect(screen.getByText("Filme 2")).toBeInTheDocument();
    })
})