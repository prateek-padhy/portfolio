
import { useState, useEffect } from 'react';
import { Gamepad, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [gameActive, setGameActive] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [gameStarted, setGameStarted] = useState(false);
  const [targets, setTargets] = useState<{id: number, x: number, y: number}[]>([]);
  const brandName = "John Doe";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else if (gameStarted && timeLeft === 0) {
      setGameStarted(false);
    }
  }, [gameStarted, timeLeft]);

  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const interval = setInterval(() => {
        if (targets.length < 5) {
          const newTarget = {
            id: Date.now(),
            x: Math.random() * 80 + 10, // 10-90% of container width
            y: Math.random() * 80 + 10  // 10-90% of container height
          };
          setTargets(prev => [...prev, newTarget]);
        }
      }, 1000);
      
      return () => clearInterval(interval);
    }
  }, [gameStarted, timeLeft, targets.length]);

  const toggleGame = () => {
    setGameActive(!gameActive);
    if (!gameActive) {
      // Reset game state
      setScore(0);
      setTimeLeft(15);
      setGameStarted(false);
      setTargets([]);
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setTimeLeft(15);
    setTargets([]);
  };

  const hitTarget = (id: number) => {
    setTargets(prev => prev.filter(target => target.id !== id));
    setScore(prev => prev + 1);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cream/80 backdrop-blur-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto flex justify-between items-center px-6">
          <a href="#home" className="text-2xl font-serif">
            {brandName.split('').map((char, index) => (
              <span key={index} className="brand-char" style={{ transitionDelay: `${index * 50}ms` }}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </a>
          
          <div className="flex items-center space-x-10">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
        </div>
      </header>
      
      {/* Game Button */}
      <button onClick={toggleGame} className="easter-egg" aria-label="Mini Game">
        <Gamepad className="w-5 h-5 text-purple-500" />
      </button>

      {/* Mini Game */}
      <div className={`easter-egg-content ${gameActive ? 'active' : ''}`}>
        <div className="max-w-xl w-full p-8 bg-white rounded-lg shadow-xl relative">
          <button 
            onClick={toggleGame} 
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close game"
          >
            <X className="w-5 h-5" />
          </button>
          
          <h2 className="text-4xl font-serif mb-4">Target Practice</h2>
          
          <div className="mb-4 flex justify-between items-center">
            <div className="text-lg">Score: <span className="font-bold">{score}</span></div>
            <div className="text-lg">Time: <span className={`font-bold ${timeLeft <= 5 ? 'text-red-500' : ''}`}>{timeLeft}s</span></div>
          </div>
          
          {!gameStarted ? (
            <div className="text-center">
              <p className="mb-6">
                Click as many targets as you can in 15 seconds!
              </p>
              <button 
                onClick={startGame} 
                className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors"
              >
                Start Game
              </button>
              
              {timeLeft === 0 && (
                <div className="mt-6 p-4 bg-purple-100 rounded-md">
                  <p className="font-bold text-lg">Game Over!</p>
                  <p>Your final score: {score}</p>
                </div>
              )}
            </div>
          ) : (
            <div className="relative h-64 w-full bg-gray-100 rounded-lg overflow-hidden">
              {targets.map(target => (
                <button
                  key={target.id}
                  className="absolute w-8 h-8 bg-purple-500 rounded-full hover:bg-purple-600 transition-colors transform hover:scale-110"
                  style={{
                    left: `${target.x}%`,
                    top: `${target.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onClick={() => hitTarget(target.id)}
                  aria-label="Target"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
