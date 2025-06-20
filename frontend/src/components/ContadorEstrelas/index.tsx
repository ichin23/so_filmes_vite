import { FaStar, FaStarHalf } from "react-icons/fa";
import { EstrelasContainer } from "./styles";
import { colors } from "../../styles/GlobalStyle";

interface EstrelaProps {
    quantidade?: number;
    value: number;
    setValue?: (value: number) => void;
    mostraTodas?: boolean;
    selecionavel?: boolean;
    size?: string
}

export function ContadorEstrelas({ quantidade = 5, value, setValue, mostraTodas = false, selecionavel = false, size = "18px" }: EstrelaProps) {
    const handleStarClick = (index: number) => {
        if (!selecionavel || !setValue) return; // If not selectable, do nothing

        const clickedValue = index + 1; // The value corresponding to the clicked star

        if (clickedValue === value) {
            // If the clicked star is already the current value,
            // and it's a full star, make it a half star.
            // If it's already a half star, make it full (or reset to 0 if it was 0.5)
            // For simplicity in this specific request, we'll just make it half.
            if (value % 1 === 0) { // Check if it's a whole number
                setValue(value - 0.5);
            } else { // It's already a half star, clicking again makes it full (or previous whole)
                setValue(Math.floor(value));
            }

        } else {
            // If clicking a new star or an empty star, set the value to the clicked star's value
            setValue(clickedValue);
        }
    };

    const renderStars = () => {
        const estrelas = [];
        const estrelasCompletas = Math.floor(value);
        const meiaEstrela = value % 1 >= 0.5;

        for (let i = 0; i < quantidade; i++) {
            //const starValue = i + 1; // Value this star represents

            if (i < estrelasCompletas) {
                estrelas.push(
                    <FaStar
                        size={size}
                        key={i}
                        color={colors.yellow}
                        onClick={() => handleStarClick(i)}
                        style={{ cursor: selecionavel ? "pointer" : "default" }}
                    />
                );
            } else if (i === estrelasCompletas && meiaEstrela) {
                estrelas.push(
                    <FaStarHalf
                        size={size}
                        key={i}
                        color={colors.yellow}
                        onClick={() => handleStarClick(i)}
                        style={{ cursor: selecionavel ? "pointer" : "default" }}
                    />
                );
            } else {
                if (mostraTodas) {
                    estrelas.push(
                        <FaStar
                            size={size}
                            key={i}
                            color={colors.secondaryLight} // Use a lighter color for empty stars
                            onClick={() => handleStarClick(i)}
                            style={{ cursor: selecionavel ? "pointer" : "default" }}
                        />
                    );
                }
            }
        }
        return estrelas;
    };

    return (
        <EstrelasContainer>
            {renderStars()}
            <p>{value.toFixed(1)}</p> {/* Display value with one decimal place */}
        </EstrelasContainer>
    );
}