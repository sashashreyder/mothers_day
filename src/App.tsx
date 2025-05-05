import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 to-red-300 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-xl text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">С Днём Матери!</h1>
      </div>

      <div className="wrapper">
        <div className="lid one"></div>
        <div className="lid two"></div>
        <div className="envelope"></div>
        <div className="letter">
           <p>Мамочка, спасибо тебе за твою любовь, заботу и тепло.<br />
          Ты — наше солнышко, наша поддержка, наше всё.<br />
          Пусть каждый день приносит тебе радость и спокойствие. </p>

        <p className="text-sm text-gray-500">С любовью, твоя Саша 💌</p>
      </div>

    </div>
    </div>
  )
}

export default App

