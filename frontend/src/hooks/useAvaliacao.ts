"use client"

import { useContext } from "react"
import { AvaliacaoContext } from "../contexts/AvaliacaoContext"

export const useAvaliacao = () => {
  const context = useContext(AvaliacaoContext)

  if (!context) {
    throw new Error("useAvaliacao must be used within an AvaliacaoProvider")
  }

  return context
}
