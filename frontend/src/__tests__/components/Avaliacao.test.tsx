import { render, screen } from "@testing-library/react"
import { mockAvaliacoes } from "../../mocks/mockAvaliacoes"
import AvaliacaoIndv from "../../components/AvaliacaoIndv"
import { mockUsers } from "../../mocks/UserMock"


describe("AvaliacaoIndv", () => {
    it("Exibe corretamente", () => {
        const edit = vi.fn()
        render(
            <AvaliacaoIndv avaliacao={mockAvaliacoes[0]} onEditarClick={(e)=>edit(e)} currentUser={mockUsers[0]}/>
        )
        expect(screen.getByText("Filme 1")).toBeInTheDocument()
        expect(screen.getByText("4")).toBeInTheDocument()
        expect(screen.getByText("Filme muito bom!")).toBeInTheDocument()
    })
})