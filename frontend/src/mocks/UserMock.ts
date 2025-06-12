import type { UsuarioProps } from "../types/usuarioType"

export const mockUsers: UsuarioProps[] = [
  {
    id: "user-1",
    nome: "Admin User",
    email: "admin@example.com",
    senha: "admin123",
    usuario: "admin",
  },
  {
    id: "user-2",
    nome: "Regular User",
    email: "user@example.com",
    senha: "user123",
    usuario: "user",
  },
]