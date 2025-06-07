import bighero from "../assets/bighero.png";
import type { FilmeProps } from "../types/filmeType";

export const mockFilmeDetale: FilmeProps[] = [
  {
    id: 1,
    titulo: "Operação Big Hero",
    tituloOriginal: "Movie 2",
    capa: bighero,
    diretor: "Don Hall, Chris Willians",
    ano: 2014,
    descricao:"O grande robô inflável está sempre a postos para cuidar de Hiro Hamada. Quando algo devastador assola a cidade, o menino prodígio, seus amigos e o robô formam um grupo de heróis para combater o mal",
    avaliacao: 4.8,
    generos: ["Animação", "Ação", "Aventura"]
  }
];
