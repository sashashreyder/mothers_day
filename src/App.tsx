import './App.css'
import VantaBackground from './VantaBackground'
import { useState } from 'react'
import ComplimentCarousel from './ComplimentCarousel'

function App() {
  const [showOpenMe, setShowOpenMe] = useState(true)
  const [fadeIn, setFadeIn] = useState(false)

  const handleMouseEnter = () => {
    setShowOpenMe(false)
    setFadeIn(false)
  }

  const handleMouseLeave = () => {
    setTimeout(() => {
      setFadeIn(true)
      setShowOpenMe(true)
    }, 2000)
  }

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
      <VantaBackground />

      <div className="relative z-10 flex flex-col items-center justify-center p-6">
        <div className="bg-white/80 rounded-2xl shadow-xl p-6 max-w-xl text-center mb-6 backdrop-blur-sm" />

        <div className="wrapper animate-float" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {showOpenMe && (
           <p className={`open-me ${fadeIn ? 'fade-in' : ''} animate-floatSmooth`}>Открой меня ✉️</p>
          )}

          <div className="lid one"></div>
          <div className="lid two"></div>
          <div className="envelope"></div>
          <div className="letter transition-all duration-700 ease-out hover:scale-105">
            <p>
              Мамочка, спасибо тебе за твою любовь, заботу и тепло.<br />
              Ты — наше солнышко, наша поддержка, наше всё.<br />
              Пусть каждый день приносит тебе радость и спокойствие.
            </p>
            <p className="text-sm text-gray-500 mt-4">С любовью, твоя Саша 💌</p>
          </div>
        </div>
        <ComplimentCarousel />  
      </div>
    </div>
  )
}

export default App





