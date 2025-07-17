import React, { createContext, useEffect, useState } from "react";
import type { FilmeProps } from "../types/filmeType";
import { apiFilmes } from "../services";

interface FilmeContextType {
  //filmes: FilmeProps[],
  isLoading: boolean,
  getFilme: (id: string) => Promise<FilmeProps | undefined>
  searchFilme: (termo: string) => Promise<FilmeProps[]>
  getMaisAcessados: () => Promise<FilmeProps[]>
  getUltimos: () => Promise<FilmeProps[]>
  createFilme: (filme: Omit<FilmeProps, "id" | "avaliacao">) => Promise<FilmeProps | void>
  //updateFilme: (id: string, filme: Partial<FilmeProps>) => Promise<FilmeProps | void>
  //deleteFilme: (id: string) => Promise<void>
}

export const FilmeContext = createContext<FilmeContextType>({
  //filmes: [],
  isLoading: true,
  getFilme: () => Promise.resolve(undefined),
  searchFilme: () => Promise.resolve([]),
  getMaisAcessados: () => Promise.resolve([]),
  getUltimos: () => Promise.resolve([]),
  createFilme: async () => {},
  //updateFilme: async () => {},
  //deleteFilme: async () => { },
})

interface FilmeProviderProps {
  children: React.ReactNode
}

export const FilmeProvider = ({ children }: FilmeProviderProps) => {
  //const [filmes, setFilmes] = useState<FilmeProps[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      //setFilmes(mockFilmes);
      setLoading(false);
    }, 500);
  }, []);

  const getFilme = (id: string) => {
    return new Promise<FilmeProps | undefined>((resolve) => {
      setTimeout(async() => {
        const filme = await apiFilmes.get_filme_by_id(id);

        resolve(filme.data);
      }, 500);
    });
  };

  const searchFilme = (termo: string) => {
    return new Promise<FilmeProps[]>((resolve) => {
      setTimeout(async () => {
        const response = await apiFilmes.search_filme(termo.toLowerCase())
        resolve(response.data)
      })
    })
  }

  const getMaisAcessados = () => {
    return new Promise<FilmeProps[]>((resolve) => {
      setTimeout(async () => {
        const response = await apiFilmes.get_mais_avaliados()
        resolve(response.data)
      })
    })
  }

  const getUltimos = () => {
    return new Promise<FilmeProps[]>((resolve) => {
      setTimeout(async () => {
        const response = await apiFilmes.get_ultimos()
        resolve(response.data)
      })
    })
  }

  const createFilme = async (filmeData: Omit<FilmeProps, "id" | "avaliacao">) => {
    return new Promise<FilmeProps>((resolve) => {
      setTimeout(async () => {
        const result = await apiFilmes.create_filme({...filmeData, avaliacao: 0})
        
        resolve(result.data);
      }, 500);
    });
  };

  /*const updateFilme = async (id: string, filmeData: Partial<FilmeProps>) => {
    return new Promise<FilmeProps>((resolve, reject) => {
      setTimeout(() => {
        

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

  const deleteFilme = async (id: string) => {
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
  };*/

  return (
    <FilmeContext.Provider
      value={{
        //filmes,
        isLoading,
        getFilme,
        searchFilme,
        getMaisAcessados,
        getUltimos,
        createFilme,
        //updateFilme,
        //deleteFilme,
      }}
    >
      {children}
    </FilmeContext.Provider>
  );
};
