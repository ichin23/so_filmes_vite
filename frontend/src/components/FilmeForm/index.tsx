import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { SFilmeForm } from "./styles";

export function FilmeForm() {
    const [previewImage, setPreviewImage] = useState<string | null>(null); // Armazena a URL da imagem para preview
    
    const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            
            // Quando o FileReader terminar de ler o arquivo
            reader.onload = (e) => { // Use reader.onload, não reader.addEventListener("load", ...)
                // e.target.result contém a URL da imagem (base64)
                setPreviewImage(e.target?.result as string); 
            };
            
            reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados (base64)
        } else {
            setPreviewImage(null); // Limpa o preview se nenhum arquivo for selecionado
        }
    };

    return <>
        <SFilmeForm onSubmit={(prop) => { console.log(prop) }}>
            <div>
                <input name="capa" onChange={onImageChange} type="file" />
                {previewImage ?<img src={previewImage} alt="Capa do Filme Preview"></img> :null }
                <h4>Capa do Filme</h4>
            </div>
            <section>
                <Input label="Título" name="titulo" border={true} />
                <Input label="Título Original" name="tituloOriginal" border={true} />
                <Input label="Ano" type="number" name="ano" border={true} />
                <Input label="Gêneros" name="generos" border={true} />
                <Input label="Descrição" textarea={true} name="descricao" border={true} />
                <Input label="Direção" name="direcao" border={true} />
                <Button onPressed={() => { }}>Enviar</Button>
            </section>

        </SFilmeForm>
    </>
}