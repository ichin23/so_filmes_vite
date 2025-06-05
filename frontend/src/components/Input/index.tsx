import { useState, type ReactNode } from "react"
import { SInput, SInputComponent } from "./styles"

export interface InputProps {
    name: string,
    placeholder?: string,
    icon?: ReactNode,
    label?: string,
    background?: string,
    border?: boolean,
    type?: string,
    disabled?: boolean
}

export function Input({
    name,
    placeholder,
    icon,
    label,
    background,
    border = false,
    type = "text",
    disabled = false
}: InputProps) {
    const [value, setValue] = useState("")

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return <>
        <SInputComponent label={label}>
            <label htmlFor={name}>{label ?? name}</label>
            <div>
                <SInput name={name} id={name} disabled={disabled} placeholder={placeholder} value={value} onChange={onChange} type={type} background={background} border={border}>
                </SInput>
                {icon}
            </div>
        </SInputComponent>
    </>
}