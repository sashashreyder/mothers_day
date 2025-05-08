import './App.css'
import VantaBackground from './VantaBackground'
import { useState, useRef } from 'react'
import ComplimentCarousel from './ComplimentCarousel'

function App() {
  const [showOpenMe, setShowOpenMe] = useState(true)
  const [fadeIn, setFadeIn] = useState(false)

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

const handleMouseEnter = () => {
  if (timeoutRef.current) clearTimeout(timeoutRef.current)
  setShowOpenMe(false)
  setFadeIn(false)
}

const handleMouseLeave = () => {
  timeoutRef.current = setTimeout(() => {
    setFadeIn(true)
    setShowOpenMe(true)
  }, 1000)
}

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
      <VantaBackground />

      <div className="relative z-10 flex flex-col items-center justify-center p-6">
        <div className="bg-white/80 rounded-2xl shadow-xl p-6 max-w-xl text-center mb-6 backdrop-blur-sm" />

        <div className="wrapper animate-float" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {showOpenMe && (
           <p className={`open-me ${fadeIn ? 'fade-in' : ''} animate-floatSmooth`}>Открой Меня</p>
          )}

          <div className="lid one"></div>
          <div className="lid two"></div>
          <div className="envelope"></div>
          <div className="letter transition-all duration-700 ease-out hover:scale-105">
            <p>
            Мамочка, ты — главный босс нашей семьи и чемпион по заботе.<br />
            Спасибо, что всё видишь, всё знаешь и всё держишь в порядке.<br />
            С любовью — твоя взрослая, но навсегда маленькая команда детей. 
            </p>
            <p className="text-sm text-gray-500 mt-4">С любовью, твоя Саша ❤️</p>
          </div>
        </div>
        <ComplimentCarousel />  
      </div>
    </div>
  )
}

export default App





