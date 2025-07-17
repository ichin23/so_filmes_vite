"use client"
import { createContext, useState, useEffect, type ReactNode, useContext } from "react"
import type { UsuarioProps } from "../types/usuarioType"
import { apiUser } from "../services"
import {AxiosError} from "axios"

export interface AuthContextType {
  currentUser: UsuarioProps | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (nome: string, username: string, email: string, password: string) => Promise<void>
  logout: () => void,
  getMe: () => Promise<UsuarioProps | null>
}

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  isLoading: true,
  login: async () => { },
  register: async () => { },
  logout: () => { },
  getMe: () => Promise.resolve(null)
})

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<UsuarioProps | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem("currentUser")
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser)["user"])
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    // Simula chamada de API
    return new Promise<void>((resolve, reject) => {
      setTimeout(async () => {
        try {

          const response = await apiUser.login({ email, password })
          const user = response.data
          console.log(response)

          setCurrentUser(user["user"])
          localStorage.setItem("currentUser", JSON.stringify(user))
          resolve()

        } catch (e) {
          console.log(e)
          reject(new Error("Email ou senha inválida"))
        }
      }, 500)
    })
  }

  const register = async (nome: string, username: string, email: string, password: string) => {
    // Simula chamada de API
    return new Promise<void>((resolve, reject) => {
      setTimeout(async () => {
        try{

          await apiUser.register({ nome, username, email, password })
          
          const userRes = await apiUser.login({ email, password })
          const user = userRes.data
          
          setCurrentUser(user["user"])
          
          localStorage.setItem("currentUser", JSON.stringify(user))
          resolve()
          
        }catch(e:AxiosError | unknown){
          console.log(e)
          if (e instanceof AxiosError && e.response){
            if (e.response?.data.errors){
              console.log(e.response.data.errors)
              reject(new Error(e.response.data.errors[0].message))
            }else{
              console.log(e.response.data.detail)
              reject(new Error(e.response.data.detail))
            }
          } 
          reject(new Error("Email ou senha inválida"))
        }
      }, 500)
    })
  }

  const logout = () => {
    setCurrentUser(null)
    localStorage.removeItem("currentUser")
  }
  const getMe = () => {
    return new Promise<UsuarioProps | null>((resolve) => {
      setTimeout(async () => {
        const response = await apiUser.me()
        if (response.status === 200) {
          setCurrentUser(response.data)
          resolve(response.data)
        } else {
          resolve(null)
        }
      }, 500)
    })
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isLoading,
        login,
        register,
        logout,
        getMe
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado com AuthProvider");
  }
  return context;
}