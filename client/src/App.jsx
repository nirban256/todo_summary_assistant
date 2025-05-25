import Home from "./pages/Home";
import { Toaster } from "./components/ui/sonner.jsx";

const App = () => {
  return (
    <div className="min-h-screen py-10 bg-gray-100">
      <Home />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;