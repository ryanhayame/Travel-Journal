
import React from 'react'
import data from './data'
import './App.css'
import Navbar from './Navbar'
import Card from './Card'


function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.title}
        {...item}
      />
    )
  })

  console.log(cards)

  return (
    <div className="app">
      <Navbar />
      <section className="card-section">
        {cards}
      </section>
    </div>
  )
}

export default App
