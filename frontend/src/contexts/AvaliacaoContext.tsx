// AvaliacaoContext.tsx
"use client"

import { createContext, useState, useEffect, type ReactNode } from "react"
import type { AvaliacaoProps, AvaliacaoPropsInput } from "../types/avaliacaoType"
import { apiAvaliacoes } from "../services"

interface AvaliacaoContextType {
  //avaliacoes: AvaliacaoProps[]
  isLoading: boolean
  adicionarAvaliacao: (avaliacao: AvaliacaoPropsInput) => Promise<AvaliacaoProps>
  editarAvaliacao: (avaliacao: AvaliacaoPropsInput) => Promise<void>
  removerAvaliacao: (id: string) => Promise<void>
  getAvaliacaoByUser: (userid: string) => Promise<AvaliacaoProps[]>,
  getAvaliacaoByFilme: (filmeid: string) => Promise<AvaliacaoProps[]>,
  getAvaliacaoByUserEFilme: (userid: string, filmeid: string) => Promise<AvaliacaoProps | undefined>
  getAvaliacaoById: (avaliacaoId: string) => Promise<AvaliacaoProps | undefined>,
  getUltimasAvaliacoes: () => Promise<AvaliacaoProps[]>,

}

export const AvaliacaoContext = createContext<AvaliacaoContextType>({
  //avaliacoes: [],
  isLoading: true,
  adicionarAvaliacao: async () => ({
    id: "",
    user: { id: "", nome: "", email: "", username: "", media:0 },
    avaliacao: 0,
    comentario: "",
    filme: {
      id: "",
      titulo: "",
      tituloOriginal: "",
      capa: "",
      descricao: "",
      ano: 0,
      generos: [],
      diretor: "",
      avaliacao: 0,
    },
  }),
  editarAvaliacao: async () => { },
  removerAvaliacao: async () => { },
  getAvaliacaoByUser: () => Promise.resolve([]),
  getAvaliacaoByFilme: () => Promise.resolve([]),
  getAvaliacaoByUserEFilme: () => Promise.resolve(undefined),
  getAvaliacaoById: () => Promise.resolve(undefined),
  getUltimasAvaliacoes: () => Promise.resolve([])
})

// ✅ Aqui é onde você usa ReactNode corretamente
interface AvaliacaoProviderProps {
  children: ReactNode
}

export const AvaliacaoProvider = ({ children }: AvaliacaoProviderProps) => {
  // const [avaliacoes, setAvaliacoes] = useState<AvaliacaoProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      //setAvaliacoes(mockAvaliacoes)
      setIsLoading(false)
    }, 500)
  }, [])

  const adicionarAvaliacao = async (
    novaAvaliacao: AvaliacaoPropsInput
  ): Promise<AvaliacaoProps> => {
    return new Promise((resolve) => {
      setTimeout(async () => {

        const response = await apiAvaliacoes.create_avaliacao(novaAvaliacao)

        resolve(response.data)
      }, 500)
    })
  }

  const editarAvaliacao = async (avaliacao: AvaliacaoPropsInput): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        if (!avaliacao.id) {
          return reject()
        }
        const response = await apiAvaliacoes.update_avaliacao(avaliacao.id, avaliacao)
        avaliacao = response.data
        if (!avaliacao) {
          return reject()
        }
        resolve()
      }, 500)
    })
  }

  const removerAvaliacao = async (id: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        const response = await apiAvaliacoes.delete_avaliacao(id)
        if (response.status === 200) {
          resolve()
        } else {
          reject(response.data)
        }
      }, 500)
    })
  }

  const getAvaliacaoByUser = (): Promise<AvaliacaoProps[]> => {
    return new Promise<AvaliacaoProps[]>((resolve) => {
      setTimeout(async () => {
        const response = await apiAvaliacoes.get_avaliacoes_by_user()
        resolve(response.data)
      })
    })
  }

  const getAvaliacaoByFilme = (filmeid: string): Promise<AvaliacaoProps[]> => {
    return new Promise<AvaliacaoProps[]>((resolve) => {

      setTimeout(async () => {
        const response = await apiAvaliacoes.get_avaliacoes_by_filme(filmeid)
        resolve(response.data)
      })
    })
  }

  const getAvaliacaoByUserEFilme = (user_id: string, filme_id: string): Promise<AvaliacaoProps | undefined> => {
    return new Promise<AvaliacaoProps | undefined>((resolve) => {
      setTimeout(async () => {
        const response = await apiAvaliacoes.get_avaliacao_by_user_e_filme({ user_id, filme_id })
        resolve(response.data)
      })
    })
  }

  const getAvaliacaoById = (avaliacaoId: string): Promise<AvaliacaoProps | undefined> => {
    return new Promise<AvaliacaoProps | undefined>((resolve) => {
      setTimeout(async () => {
        const response = await apiAvaliacoes.get_avaliacao_by_id(avaliacaoId)
        resolve(response.data)
      })
    })
  }

  const getUltimasAvaliacoes = (): Promise<AvaliacaoProps[]> => {
    return new Promise<AvaliacaoProps[]>((resolve) => {

      setTimeout(async () => {
        const response = await apiAvaliacoes.get_ultimas_avaliacoes()
        resolve(response.data)
      })
    })
  }


  return (
    <AvaliacaoContext.Provider
      value={{
        //avaliacoes,
        isLoading,
        adicionarAvaliacao,
        editarAvaliacao,
        removerAvaliacao,
        getAvaliacaoByUser,
        getAvaliacaoByFilme,
        getAvaliacaoByUserEFilme,
        getAvaliacaoById,
        getUltimasAvaliacoes,
      }}>
      {children}
    </AvaliacaoContext.Provider>
  )
}
