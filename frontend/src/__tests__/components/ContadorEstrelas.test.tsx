import { render, screen } from "@testing-library/react";
import { ContadorEstrelas } from "../../components/ContadorEstrelas";

describe("ContadorEstrela", () => {


    it("Exibir 3 estrelas na tela", () => {
        const qtd = 3
        render(<ContadorEstrelas value={qtd}/>)

        expect(screen.getByText(qtd)).toBeInTheDocument()
    })
})