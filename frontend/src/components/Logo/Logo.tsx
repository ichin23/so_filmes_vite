import { MdMovie } from "react-icons/md";
import * as S from './styles'
export function Logo(){
    return(
        <S.Header>
            <S.Section>
                 <MdMovie />
                 <h3>SóFilmes</h3>
            </S.Section>
        </S.Header>
    )
}