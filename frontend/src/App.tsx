import { GlobalStyle } from "./styles/GlobalStyle";
import { RouteWeb } from "./routes";
import { FilmeProvider } from "./contexts/FilmesContext";
import { AuthProvider } from "../src/contexts/AuthContext";

function App() {

  return (
    <>
      <AuthProvider>
        <GlobalStyle />
        <FilmeProvider>
          <RouteWeb />
        </FilmeProvider>
      </AuthProvider>
    </>
  )
}

export default App
