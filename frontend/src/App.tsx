import { FaSearch } from 'react-icons/fa'
import { FilmeCard } from './components/FilmeCard'
import { Input } from './components/Input'
import { mockFilmes } from './mocks/FilmesMock'
import { colors, GlobalStyle } from './styles/GlobalStyle'
import { Button } from './components/Button'
import { GrAdd } from 'react-icons/gr'
import { AvaliacaoCard } from './components/AvaliacaoCard'
import { mockAvaliacoes } from './mocks/mockAvaliacoes'

function App() {

  return (
    <>
      <GlobalStyle />
      <FilmeCard filmes={mockFilmes}></FilmeCard>
      <Input
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
        border={false} />

      <Button onPressed={() => { }}>Login</Button>
      <Button icone={<GrAdd />} onPressed={() => { }}>Login</Button>
      <Button vazado={true} onPressed={() => { }}>Login</Button>
      <AvaliacaoCard {...mockAvaliacoes} ></AvaliacaoCard>
    </>
  )
}

export default App
