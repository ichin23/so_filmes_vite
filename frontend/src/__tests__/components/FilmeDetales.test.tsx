import { render, screen } from "@testing-library/react";
import { FilmeDetales } from "../../components/FilmeDetales/";

describe("FilmeDetales", () => {
  it("deve renderizar o título, diretor, descrição, capa, generos, ano e avaliação do filme", () => {
    render(<FilmeDetales />);

    const titulo = screen.getByText("Operação Big Hero");
    const capa = screen.getByRole("img", { name: /operação big hero/i });
    const diretor = screen.getByText("Diretor: Don Hall, Chris Willians");
    const ano = screen.getByText("2014");
    const frase1 = screen.getByText("O grande robô inflável está sempre a postos para cuidar de Hiro Hamada.");
    const frase2 = screen.getByText("Quando algo devastador assola a cidade, o menino prodígio, seus amigos e o robô formam um grupo de heróis para combater o mal.");
    const avaliacao = screen.getByText("4.8");
    const generos = screen.getByText("Animação, Ação, Aventura");

    expect(titulo).toBeInTheDocument();
    expect(capa).toBeInTheDocument();
    expect(diretor).toBeInTheDocument();
    expect(ano).toBeInTheDocument();
    expect(frase1).toBeInTheDocument();
    expect(frase2).toBeInTheDocument();
    expect(avaliacao).toBeInTheDocument();
    expect(generos).toBeInTheDocument();
  });
});
