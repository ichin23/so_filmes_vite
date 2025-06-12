import React, { type ReactNode } from "react"
import { SInput, SInputComponent, STextArea } from "./styles"

export interface InputProps {
    name: string,
    placeholder?: string,
    icon?: ReactNode,
    label?: string,
    background?: string,
    border?: boolean,
    type?: string,
    textarea?: boolean,
    disabled?: boolean,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    maxWidth?: string,
}

export function Input({
    name,
    placeholder,
    icon,
    label,
    background,
    border = false,
    textarea = false,
    type = "text",
    disabled = false,
    value,
    onChange,
    maxWidth = "none",
}: InputProps) {
    
   console.log(label)

    return <>
        <SInputComponent maxWidth={maxWidth} label={label}>
            <label htmlFor={name}>{label ?? name}</label>
            <div>
                {textarea
                    ? <STextArea name={name} id={name} disabled={disabled} placeholder={placeholder} value={value} onChange={onChange} background={background} border={border}></STextArea>
                    : <SInput name={name} id={name} disabled={disabled} placeholder={placeholder} value={value} onChange={onChange} type={type} background={background} border={border} >
                    </SInput>}
                {icon}
            </div>
        </SInputComponent>
    </>
}