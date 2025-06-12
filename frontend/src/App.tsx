import { GlobalStyle } from "./styles/GlobalStyle";
import { RouteWeb } from "./routes";
import { FilmeProvider } from "./contexts/FilmesContext";

function App() {

  return (
    <>
      <GlobalStyle/>
      <FilmeProvider>
        <RouteWeb/>
      </FilmeProvider>
    </>
  )
}

export default App
