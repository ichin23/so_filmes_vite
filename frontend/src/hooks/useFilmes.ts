"use client"

import { useContext } from "react"
import { FilmeContext } from "../contexts/FilmesContext"

export const useFilmes = ()=>{
    const context  = useContext(FilmeContext)

    if (!context){
        throw new Error("useFilmes must be used within an FilmeProvider")
    }

    return context
}