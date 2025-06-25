import { render, screen } from "@testing-library/react"
import { AvaliacaoCard } from "../../components/AvaliacaoCard"
import { mockAvaliacoes } from "../../mocks/mockAvaliacoes"
import { MemoryRouter } from "react-router-dom"


describe("AvaliacaoCard", () => {
    it("Exibe Corretamente", () => {
        render(<MemoryRouter> <AvaliacaoCard avaliacoes={mockAvaliacoes} /></MemoryRouter>)

        expect(screen.getByText("Autor 1")).toBeInTheDocument()
        expect(screen.getByText("Autor 2")).toBeInTheDocument()
        expect(screen.getByText("Filme muito bom!")).toBeInTheDocument()
        expect(screen.getByText("Que filme")).toBeInTheDocument()

    })
})