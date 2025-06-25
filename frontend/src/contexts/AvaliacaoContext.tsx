// AvaliacaoContext.tsx
"use client"

import { createContext, useState, useEffect, type ReactNode } from "react"
import type { AvaliacaoProps } from "../types/avaliacaoType"
import { mockAvaliacoes } from "../mocks/mockAvaliacoes"

interface AvaliacaoContextType {
  avaliacoes: AvaliacaoProps[]
  isLoading: boolean
  adicionarAvaliacao: (avaliacao: Omit<AvaliacaoProps, "id">) => Promise<AvaliacaoProps>
  editarAvaliacao: (avaliacao: AvaliacaoProps) => Promise<void>
  removerAvaliacao: (id: number) => Promise<void>
  getAvaliacaoByUser: (userId: number) => AvaliacaoProps[],
  getAvaliacaoByFilme:(filmeId: number) => AvaliacaoProps[],
  getAvaliacaoByUserEFilme: (userId: number, filmeId: number)=>AvaliacaoProps | undefined 
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
  editarAvaliacao:async ()=>{},
  removerAvaliacao: async () => { },
  getAvaliacaoByUser: () => [],
  getAvaliacaoByFilme: ()=>[],
  getAvaliacaoByUserEFilme: ()=>{return {
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
  }}
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
        setAvaliacoes((prev) => [...prev, nova])

        resolve(nova)
      }, 500)
    })
  }

  const editarAvaliacao = async(avaliacao: AvaliacaoProps): Promise<void>=>{
    return new Promise((resolve)=>{
      setTimeout(()=>{
        const newAvaliacoes = avaliacoes.map((e)=>e.id==avaliacao.id? avaliacao : e)
        setAvaliacoes(newAvaliacoes)
        resolve()
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
    return avaliacoes.filter((a) => a.autor.id === userId)
  }

  const getAvaliacaoByFilme = (filmeId: number): AvaliacaoProps[] => {
    return avaliacoes.filter((a) => a.filme.id === filmeId)
  }

  const getAvaliacaoByUserEFilme=(userId:number, filmeId:number): AvaliacaoProps | undefined =>{
    return avaliacoes.find((a)=>a.autor.id==userId && a.filme.id == filmeId)
  }


  return (
    <AvaliacaoContext.Provider
      value={{
        avaliacoes,
        isLoading,
        adicionarAvaliacao,
        editarAvaliacao,
        removerAvaliacao,
        getAvaliacaoByUser,
        getAvaliacaoByFilme,
        getAvaliacaoByUserEFilme
      }}>
      {children}
    </AvaliacaoContext.Provider>
  )
}
