import { ThemeProvider } from "./components/theme-provider";
import { Home } from "./components/home";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Home />
    </ThemeProvider>
  );
}

export default App;
