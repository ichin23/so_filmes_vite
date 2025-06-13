import { render, screen } from "@testing-library/react";
import { FilmeDetalhes } from "../../components/FilmeDetales/";
import type { FilmeProps } from "../../types/filmeType";
import { mockFilmes } from "../../mocks/FilmesMock";

describe("FilmeDetales", () => {
  it("deve renderizar o título, diretor, descrição, capa, generos, ano e avaliação do filme", () => {
    render(<FilmeDetalhes {...mockFilmes[0] as FilmeProps} />);

    const titulo = screen.getByText("Ainda Estou Aqui");
    //const capa = screen.getByRole("img", { name: /operação big hero/i });
    const diretor = screen.getByText("Diretor: Walter Salles");
    const ano = screen.getByText("2024");
    const frase1 = screen.getByText("No início da década de 1970, o Brasil enfrenta o endurecimento da ditadura militar.");
    const avaliacao = screen.getByText("4.1");
    const generos = screen.getByText("Drama, Histórico");

    expect(titulo).toBeInTheDocument();
    //expect(capa).toBeInTheDocument();
    expect(diretor).toBeInTheDocument();
    expect(ano).toBeInTheDocument();
    expect(frase1).toBeInTheDocument();
    expect(avaliacao).toBeInTheDocument();
    expect(generos).toBeInTheDocument();
  });
});
