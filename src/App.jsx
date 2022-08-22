import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default function App() {
  return (
    <div className="container">
      <section className="content">
        <Header />
        <Hero />
        <Main />
        <Footer />
      </section>
     
    </div>
  )
}


