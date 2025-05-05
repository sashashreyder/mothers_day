import './App.css'
import VantaBackground from './VantaBackground'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
      <VantaBackground />

      <div className="relative z-10 flex flex-col items-center justify-center p-6">
        <div className="bg-white/80 rounded-2xl shadow-xl p-6 max-w-xl text-center mb-6 backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-rose-700 mb-4">С Днём Матери!</h1>
        </div>

        <div className="wrapper">
          <div className="lid one"></div>
          <div className="lid two"></div>
          <div className="envelope"></div>
          <div className="letter">
            <p>
              Мамочка, спасибо тебе за твою любовь, заботу и тепло. 💐<br />
              Ты — наше солнышко, наша поддержка, наше всё.<br />
              Пусть каждый день приносит тебе радость и спокойствие. ❤️
            </p>
            <p className="text-sm text-gray-500 mt-4">С любовью, твоя Саша 💌</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App



