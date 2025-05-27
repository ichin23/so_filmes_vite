import { FilmeCard } from './components/FilmeCard'
import { mockFilmes } from './mocks/FilmesMock'
import { GlobalStyle } from './styles/GlobalStyle'

function App() {

  return (
    <>
      <GlobalStyle />
      <FilmeCard movies={mockFilmes}></FilmeCard>
    </>
  )
}

export default App
