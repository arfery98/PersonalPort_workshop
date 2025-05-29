import './App.css'
import { useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import "./index.css"

function App() {
  const [isLoaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 
      ${isLoaded ? "opacity-100" : "opacity-0"} 
      bg-black text-gray-100`}
      >

        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </>
  );
}

export default App;