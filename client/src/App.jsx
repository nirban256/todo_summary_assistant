import Home from "./pages/Home";
import { Toaster } from "./components/ui/sonner.jsx";

const App = () => {
  return (
    <>
      <Home />
      <Toaster position="top-right" />
    </>
  );
}

export default App;