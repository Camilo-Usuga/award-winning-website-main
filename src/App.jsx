import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
      <Timer />
    </main>
  );
}

import { useState, useRef, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Configurar el intervalo cuando el componente se monta
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  // Función para detener el contador
  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={stopTimer}>Detener Contador</button>
    </div>
  );
};

export default App;
