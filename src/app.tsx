import React from 'react'
import './app.scss'
import test from 'Src/pages/FrontEnd/Skill/DesignPattern/Singleton/ES6Way'
import showTest from 'Src/pages/FrontEnd/Skill/DesignPattern/Decorator'

function App() {
  test()
  return (
    <div className="app">
      乘上火车出发，前往理想国
      {showTest()}
    </div>
  )
}

export default App
