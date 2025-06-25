"use client"

import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { About } from "./components/About"

import { Modalidad } from "./components/Modalidad"
import { Calendario } from "./components/Calendario"
import { Premio } from "./components/Premio"
import { Patrocinadores } from "./components/Patrocinadores"
import { Footer } from "./components/Footer"

export default function CircuitoFamiliarGolf() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-50 to-cyan-100">
      <Header />
      <Hero />
      <About />
      <Modalidad />
      <Calendario />
      <Premio />
      <Patrocinadores />
      <Footer />
    </div>
  )
}

               