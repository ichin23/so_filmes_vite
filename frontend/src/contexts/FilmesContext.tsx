import React, { createContext, useEffect, useState } from "react";
import type { FilmeProps } from "../types/filmeType";
import { mockFilmes } from "../mocks/FilmesMock";

interface FilmeContextType {
  filmes: FilmeProps[],
  isLoading: boolean,
  getFilme: (id: number) => FilmeProps | undefined
  getMaisAcessados: ()=>FilmeProps[]
  createFilme: (filme: Omit<FilmeProps, "id" | "avaliacao">) => Promise<FilmeProps>
  updateFilme: (id: number, filme: Partial<FilmeProps>) => Promise<FilmeProps>
  deleteFilme: (id: number) => Promise<void>
}

export const FilmeContext = createContext<FilmeContextType>({
  filmes: [],
  isLoading: true,
  getFilme: () => undefined,
  getMaisAcessados: ()=> [],
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

  const getMaisAcessados = ()=>{
    return filmes.filter((filme)=>filme.id in [1, 4, 6, 11, 2, 8, 10])
  }

  const createFilme = async (filmeData: Omit<FilmeProps, "id" | "avaliacao">) => {
    return new Promise<FilmeProps>((resolve) => {
      console.log("Inserindo fiulme")
      setTimeout(() => {
        const newFilme: FilmeProps = {
          id: filmes.length+1,
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
