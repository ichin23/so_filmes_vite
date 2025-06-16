import React, { createContext, useEffect, useState } from "react";
import type { FilmeProps } from "../types/filmeType";
import { mockFilmes } from "../mocks/FilmesMock";

interface FilmeContextType {
  filmes: FilmeProps[],
  isLoading: boolean,
  getFilme: (id: number) => FilmeProps | undefined
<<<<<<< HEAD
  searchFilme: (termo: string) => FilmeProps[]
=======
>>>>>>> 5bc051bb6bf2d6c44e90ed0370375149c281ce3e
  getMaisAcessados: () => FilmeProps[]
  createFilme: (filme: Omit<FilmeProps, "id" | "avaliacao">) => Promise<FilmeProps>
  updateFilme: (id: number, filme: Partial<FilmeProps>) => Promise<FilmeProps>
  deleteFilme: (id: number) => Promise<void>
}

export const FilmeContext = createContext<FilmeContextType>({
  filmes: [],
  isLoading: true,
  getFilme: () => undefined,
<<<<<<< HEAD
  searchFilme: () => [],
=======
>>>>>>> 5bc051bb6bf2d6c44e90ed0370375149c281ce3e
  getMaisAcessados: () => [],
  createFilme: async () => ({ id: -1, ano: 0, avaliacao: 0, capa: "", descricao: "", diretor: "", generos: [], titulo: "", tituloOriginal: "" }),
  updateFilme: async () => ({ id: -1, ano: 0, avaliacao: 0, capa: "", descricao: "", diretor: "", generos: [], titulo: "", tituloOriginal: "" }),
  deleteFilme: async () => { },
})

interface FilmeProviderProps {
  children: React.ReactNode
}

export const FilmeProvider = ({ children }: FilmeProviderProps) => {
  const [filmes, setFilmes] = useState<FilmeProps[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setFilmes(mockFilmes);
      setLoading(false);
    }, 500);
  }, []);

  const getFilme = (id: number) => {
    return filmes.find((filme) => filme.id === id);
  };

  const searchFilme = (termo: string) => {
    return mockFilmes.filter((filme) =>
      filme.titulo.toLowerCase().includes(termo.toLowerCase())
    );
  }

  const getMaisAcessados = () => {
    return filmes.filter((filme) => filme.id in [1, 4, 6, 11, 7, 2, 8, 10])
  }

  const createFilme = async (filmeData: Omit<FilmeProps, "id" | "avaliacao">) => {
    return new Promise<FilmeProps>((resolve) => {
      console.log("Inserindo fiulme")
      setTimeout(() => {
        const newFilme: FilmeProps = {
          id: filmes.length + 1,
          ...filmeData,
          // data: new Date().toISOString(), // você pode ativar isso se quiser
        };
        console.log(newFilme)

        setFilmes([...filmes, newFilme]);
        console.log(filmes)
        resolve(newFilme);
      }, 500);
    });
  };

  const updateFilme = async (id: number, filmeData: Partial<FilmeProps>) => {
    return new Promise<FilmeProps>((resolve, reject) => {
      setTimeout(() => {
        const filmeIndex = filmes.findIndex((filme) => filme.id === id);

        if (filmeIndex === -1) {
          reject(new Error("Filme not found"));
          return;
        }

        const updatedFilme = {
          ...filmes[filmeIndex],
          ...filmeData,
        };

        const updatedFilmes = [...filmes];
        updatedFilmes[filmeIndex] = updatedFilme;

        setFilmes(updatedFilmes);
        resolve(updatedFilme);
      }, 500);
    });
  };

  const deleteFilme = async (id: number) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const filmeIndex = filmes.findIndex((filme) => filme.id === id);

        if (filmeIndex === -1) {
          reject(new Error("Filme not found"));
          return;
        }

        const updatedFilmes = filmes.filter((filme) => filme.id !== id);

        setFilmes(updatedFilmes);
        resolve();
      }, 500);
    });
  };

  return (
    <FilmeContext.Provider
      value={{
        filmes,
        isLoading,
        getFilme,
        searchFilme,
        getMaisAcessados,
        createFilme,
        updateFilme,
        deleteFilme,
      }}
    >
      {children}
    </FilmeContext.Provider>
  );
};
