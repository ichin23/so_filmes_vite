import { useState, type FormEvent } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { SFilmeForm } from "./styles";
import type { FilmeProps } from "../../types/filmeType";

interface FilmeFormProps {
    initialData?: Partial<FilmeProps>,
    onSubmit: (filme: Omit<FilmeProps, "id" | "avaliacao">) => void
}

export function FilmeForm({ initialData, onSubmit }: FilmeFormProps) {
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [titulo, setTitulo] = useState(initialData?.titulo || '')
    const [tituloOriginal, setTituloOriginal] = useState(initialData?.tituloOriginal || '')
    const [ano, setAno] = useState(initialData?.ano?.toString() || '')
    const [generos, setGeneros] = useState(initialData?.generos?.join(", ") || '')
    const [descricao, setDescricao] = useState(initialData?.descricao || '')
    const [diretor, setDiretor] = useState(initialData?.diretor || '')
    const [isLoading, setIsLoading] = useState(false)


    const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
                setPreviewImage(e.target?.result as string);
                console.log(previewImage)
            };

            reader.readAsDataURL(file);
        } else {
            setPreviewImage(null);
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            onSubmit({
                titulo: titulo,
                tituloOriginal: tituloOriginal,
                ano: Number(ano),
                generos: generos.split(", "),
                capa: previewImage ?? "",
                descricao: descricao,
                diretor: diretor
            })
        } catch (err) {
            console.error(err instanceof Error ? err.message : "Falha ao publicar")
        } finally {
            setIsLoading(false)
        }
    }

    return <>
        <SFilmeForm onSubmit={handleSubmit}>
            <div>
                <input name="capa" onChange={onImageChange} type="file" />
                {previewImage ? <img src={previewImage} alt="Capa do Filme Preview"></img> : null}
                <h4>Capa do Filme</h4>
            </div>
            <section>
                <Input maxWidth="70vw" value={titulo} onChange={(e) => { setTitulo(e.target.value) }} label="Título" name="titulo" border={true} />
                <Input maxWidth="70vw" value={tituloOriginal} onChange={(e) => { setTituloOriginal(e.target.value) }} label="Título Original" name="tituloOriginal" border={true} />
                <Input maxWidth="70vw" value={ano} onChange={(e) => { setAno(e.target.value) }} label="Ano" type="number" name="ano" border={true} />
                <Input maxWidth="70vw" value={generos} onChange={(e) => { setGeneros(e.target.value) }} label="Gêneros" name="generos" border={true} />
                <Input maxWidth="70vw" value={descricao} onChange={(e) => { setDescricao(e.target.value) }} label="Descrição" textarea={true} name="descricao" border={true} />
                <Input maxWidth="70vw" value={diretor} onChange={(e) => { setDiretor(e.target.value) }} label="Direção" name="direcao" border={true} />
                <Button disabled={isLoading}>Enviar</Button>
            </section>

        </SFilmeForm>
    </>
}