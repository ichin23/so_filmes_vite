import { GlobalStyle } from "./styles/GlobalStyle";
import { RouteWeb } from "./routes";
import { FilmeProvider } from "./contexts/FilmesContext";
import { AuthProvider } from "../src/contexts/AuthContext";
import { AvaliacaoProvider } from "./contexts/AvaliacaoContext";
import { useNavigate } from "react-router-dom";
import { setupInterceptors } from "./services/http/interceptors";

function App() {
  const navigate = useNavigate();
  setupInterceptors(() => {
    navigate("/login");
  });

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
