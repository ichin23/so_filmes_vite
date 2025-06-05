import { FaStar, FaStarHalf } from "react-icons/fa"
import { EstrelasContainer } from "./styles"
import { colors } from "../../styles/GlobalStyle"

interface EstrelaProps {
    quantidade: number
}

export function ContadorEstrelas({ quantidade }: EstrelaProps) {
    const estrelasCompletas = Math.floor(quantidade)
    const meiaEstrela = quantidade % 1 >= 0.5

    const estrelas = []

    for (let i = 0; i < estrelasCompletas; i++) {
        estrelas.push(<FaStar color={colors.yellow} />)
    }

    if (meiaEstrela) {
        estrelas.push(<FaStarHalf color={colors.yellow} />)
    }

    return <>
        <EstrelasContainer>
            {estrelas}
            <p>{quantidade}</p>
        </EstrelasContainer>
    </>
}