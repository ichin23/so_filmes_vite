import { GlobalStyle } from "./styles/GlobalStyle";
import { RouteWeb } from "./routes";
import { FilmeProvider } from "./contexts/FilmesContext";
import { AuthProvider } from "../src/contexts/AuthContext";
import { AvaliacaoProvider } from "./contexts/AvaliacaoContext";

function App() {

  return (
    <>
      <AuthProvider>

        <GlobalStyle />
        <AvaliacaoProvider>
          <FilmeProvider>
            <RouteWeb />
          </FilmeProvider>
        </AvaliacaoProvider>
      </AuthProvider>
    </>
  )
}

export default App
