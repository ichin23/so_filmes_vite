import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Button } from "../../components/Button";
import { FaPlus } from "react-icons/fa";

describe("Button", () => {
    const mockOnPressed = vi.fn();

    beforeEach(() => {
        mockOnPressed.mockClear();
    });

    it("deve renderizar o botão com o texto filho", () => {
        render(<Button onPressed={mockOnPressed}>Clique Aqui</Button>);
        expect(screen.getByText("Clique Aqui")).toBeInTheDocument();
    });

    it("deve chamar a função onPressed ao ser clicado", async () => {
        const user = userEvent.setup();
        render(<Button onPressed={mockOnPressed}>Clique Aqui</Button>);

        const buttonElement = screen.getByRole('button', { name: "Clique Aqui" });
        await user.click(buttonElement);

        expect(mockOnPressed).toHaveBeenCalledTimes(1);
    });

    it("não deve chamar a função onPressed quando desabilitado", async () => {
        const user = userEvent.setup();
        render(<Button onPressed={mockOnPressed} disabled>Clique Aqui</Button>);

        const buttonElement = screen.getByRole('button', { name: "Clique Aqui" });
        expect(buttonElement).toBeDisabled();

        await user.click(buttonElement)

        expect(mockOnPressed).not.toHaveBeenCalled();
    });

    it("deve renderizar o ícone quando fornecido", () => {
        render(
            <Button onPressed={mockOnPressed} icone={<FaPlus data-testid="button-icon" />}>
                Adicionar
            </Button>
        );
        expect(screen.getByTestId("button-icon")).toBeInTheDocument();
        expect(screen.getByText("Adicionar")).toBeInTheDocument();
    });
});
