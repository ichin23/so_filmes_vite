import type { UsuarioProps } from "../types/usuarioType"



export const mockUsers: UsuarioProps[] = [
  {
    id: "1",
    nome: "Admin User",
    email: "admin@example.com",
    senha: "admin123",
    username: "admin",
    media: 0
  },
  {
    id: "2",
    nome: "Regular User",
    email: "user@example.com",
    senha: "user123",
    username: "user",
    media: 0
  },
]