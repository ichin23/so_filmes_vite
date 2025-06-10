import { render, screen } from "@testing-library/react";
import { Header } from "../../components/Header";
import "@testing-library/jest-dom";

describe("Header", () => {
  it("deve renderizar o logo, input e botão", () => {
    render(<Header />);

    const logoTexto = screen.getByText(/sófilmes/i);
    expect(logoTexto).toBeInTheDocument();
    
    const input = screen.getByPlaceholderText(/search/i);
    expect(input).toBeInTheDocument();

    const buttonImg = screen.getByRole("img", { name: /buscar/i });
    expect(buttonImg).toBeInTheDocument();
    
  });
});
