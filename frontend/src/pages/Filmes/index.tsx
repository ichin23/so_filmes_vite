import { FilmeCard } from '../../components/FilmeCard'
import { mockFilmes } from '../../mocks/FilmesMock'
import { GlobalStyle } from '../../styles/GlobalStyle'
import { Button } from '../../components/Button'
import { GrAdd } from 'react-icons/gr'
import { AvaliacaoCard } from '../../components/AvaliacaoCard'
import { mockAvaliacoes } from '../../mocks/mockAvaliacoes'
import Avaliacao from '../../components/AvaliacaoIndv'
import { Header } from '../../components/Header'


export function FilmesPage() {
  return (
    <>
      <GlobalStyle />
      <Header />

      <FilmeCard filmes={mockFilmes}></FilmeCard>
      {/* <Input
            label='Login'
            placeholder='Seu email...'
            name="email"
            type="email"
            border={false} />
    
          <Input
            label='Senha'
            placeholder='Sua senha...'
            name="senha"
            type="password"
            border={false} />
          <Input
            icon={<FaSearch color={colors.white} />}
            placeholder='Busque...'
            name="search"
            border={false} /> */}

      <Button onPressed={() => { }}>Login</Button>
      <Button icone={<GrAdd />} onPressed={() => { }}>Login</Button>
      <Button vazado={true} onPressed={() => { }}>Login</Button>
      <AvaliacaoCard avaliacoes={mockAvaliacoes} ></AvaliacaoCard>
      <Avaliacao avaliacao={mockAvaliacoes[0]} />
    </>
  )
}