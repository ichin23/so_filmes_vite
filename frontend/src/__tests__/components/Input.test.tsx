import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { Input } from "../../components/Input"
import { FaSearch } from "react-icons/fa";

describe("Input", () => {
    it("Verifica se o Input é exibido e seu valor atualizado", async () => {
        const user = userEvent.setup()

        render(<Input name="test" />)
        const input = screen.getByLabelText("test")

        expect(input).toBeVisible()

        await user.type(input, "teste")

        expect(input).toHaveValue("teste")

    })

    it("Verifica se o Ícone é exibido quando passado como parâmetro", async () => {
        render(<Input name="test" icon={<FaSearch data-testid="search-icon" />} />)
        
        const iconElement = screen.getByTestId("search-icon");
        expect(iconElement).toBeInTheDocument();

    })
})