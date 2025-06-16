"use client"
import { createContext, useState, useEffect, type ReactNode, useContext } from "react"
import type { UsuarioProps } from "../types/usuarioType"
import { mockUsers } from "../mocks/UserMock"

export interface AuthContextType {
  currentUser: UsuarioProps | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  isLoading: true,
  login: async () => { },
  register: async () => { },
  logout: () => { },
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
      setCurrentUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, senha: string) => {
    // Simula chamada de API
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const user = mockUsers.find((u) => u.email === email && u.senha === senha)

        if (user) {
          // Remove password before storing
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { senha, ...userWithoutPassword } = user
          setCurrentUser(userWithoutPassword)
          localStorage.setItem("currentUser", JSON.stringify(userWithoutPassword))
          resolve()
        } else {
          reject(new Error("Invalid email or password"))
        }
      }, 500)
    })
  }

  const register = async (nome: string, email: string, senha: string) => {
    // Simula chamada de API
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const existingUser = mockUsers.find((u) => u.email === email)

        if (existingUser) {
          reject(new Error("Email already in use"))
        } else {
          const newUser: UsuarioProps = {
            id: `user-${Date.now()}`,
            nome,
            email,
            senha,
            usuario: "user",
          }

          // Em um aplicativo real, você enviaria isso para uma API
          mockUsers.push(newUser)

          // Remove password antes de armazenar
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { senha: _, ...userWithoutPassword } = newUser
          setCurrentUser(userWithoutPassword)
          localStorage.setItem("currentUser", JSON.stringify(userWithoutPassword))
          resolve()
        }
      }, 500)
    })
  }

  const logout = () => {
    setCurrentUser(null)
    localStorage.removeItem("currentUser")
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isLoading,
        login,
        register,
        logout,
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