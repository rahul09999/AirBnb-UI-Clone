import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Card from './Components/Card'
import data from './data'
function App() {
  const cards = data.map(item => {
    return (
      <Card 
                key={item.id}
                item={item}
                //alt: spread operator
                //{...item}
            />
    )
  })

  return (
    <>
   <Navbar/>
   <Hero />
   <section className='cards-list'>
   {cards}
   </section>
   
    </>
   
  )
}

export default App
