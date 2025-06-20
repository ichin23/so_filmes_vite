// AvaliacaoContext.tsx
"use client"

import { createContext, useState, useEffect, type ReactNode } from "react"
import type { AvaliacaoProps } from "../types/avaliacaoType"
import { mockAvaliacoes } from "../mocks/mockAvaliacoes"

interface AvaliacaoContextType {
  avaliacoes: AvaliacaoProps[]
  isLoading: boolean
  adicionarAvaliacao: (avaliacao: Omit<AvaliacaoProps, "id">) => Promise<AvaliacaoProps>
  removerAvaliacao: (id: number) => Promise<void>
  getAvaliacaoByUser: (userId: number) => AvaliacaoProps[]
}

export const AvaliacaoContext = createContext<AvaliacaoContextType>({
  avaliacoes: [],
  isLoading: true,
  adicionarAvaliacao: async () => ({
    id: 0,
    autor: { id: 0, nome: "", },
    avaliacao: 0,
    comentario: "",
    filme: {
      id: 0,
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
  removerAvaliacao: async () => { },
  getAvaliacaoByUser: () => []
})

// ✅ Aqui é onde você usa ReactNode corretamente
interface AvaliacaoProviderProps {
  children: ReactNode
}

export const AvaliacaoProvider = ({ children }: AvaliacaoProviderProps) => {
  const [avaliacoes, setAvaliacoes] = useState<AvaliacaoProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setAvaliacoes(mockAvaliacoes)
      setIsLoading(false)
    }, 500)
  }, [])

  const adicionarAvaliacao = async (
    novaAvaliacao: Omit<AvaliacaoProps, "id">
  ): Promise<AvaliacaoProps> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const nova: AvaliacaoProps = {
          id: Date.now(),
          ...novaAvaliacao,
        }
        console.log(avaliacoes)
        setAvaliacoes((prev) => [...prev, nova])

        resolve(nova)
      }, 500)
    })
  }

  const removerAvaliacao = async (id: number): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setAvaliacoes((prev) => prev.filter((a) => a.id !== id))
        resolve()
      }, 500)
    })
  }

  const getAvaliacaoByUser = (userId: number): AvaliacaoProps[] => {
    console.log(avaliacoes)
    console.log(userId)
    return avaliacoes.filter((a) => a.autor.id === userId)
  }


  return (
    <AvaliacaoContext.Provider
      value={{
        avaliacoes,
        isLoading,
        adicionarAvaliacao,
        removerAvaliacao,
        getAvaliacaoByUser
      }}>
      {children}
    </AvaliacaoContext.Provider>
  )
}
