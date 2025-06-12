import { render, screen } from "@testing-library/react"
import { mockAvaliacoes } from "../../mocks/mockAvaliacoes"
import AvaliacaoIndv from "../../components/Avaliacao"

describe("AvaliacaoIndv", () => {
    it("Exibe corretamente", () => {
        render(<AvaliacaoIndv avaliacao={mockAvaliacoes[0]} />)
        expect(screen.getByText("Autor 1")).toBeInTheDocument()
        expect(screen.getByText("4")).toBeInTheDocument()
        expect(screen.getByText("Filme muito bom!")).toBeInTheDocument()
    })
})