import { api } from "../http/axios"

export interface IUser {
    nome?: string
    username?: string
    email: string
    password: string
    media?: number
}

class UserData {
    register(data: IUser) {
        return api.post('/usuarios/register', data)
    }
    login(data: IUser) {
        return api.post('/usuarios/login', data)
    }
    me() {
        return api.get('/usuarios/me')
    }
}

export default new UserData()