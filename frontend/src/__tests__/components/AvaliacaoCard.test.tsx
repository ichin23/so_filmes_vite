import { render, screen } from "@testing-library/react"
import { AvaliacaoCard } from "../../components/AvaliacaoCard"
import { mockAvaliacoes } from "../../mocks/mockAvaliacoes"

describe("AvaliacaoCard", ()=>{
    it("Exibe Corretamente", ()=>{
        render(<AvaliacaoCard avaliacoes={mockAvaliacoes.avaliacoes}/>)
        
        expect(screen.getByText("Autor 1")).toBeInTheDocument()
        expect(screen.getByText("Autor 2")).toBeInTheDocument()
        expect(screen.getByText("Filme muito bom!")).toBeInTheDocument()
        expect(screen.getByText("Que filme")).toBeInTheDocument()

    })
})