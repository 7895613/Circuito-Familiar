"use client"

import { Button, Badge } from "../components"

export function Hero() {
  return (
    <section
    id="inicio"
    className="relative pt-24 bg-gradient-to-br from-green-600 via-blue-500 to-cyan-400 text-white overflow-hidden"
  >
    <div className="absolute inset-0 bg-black/10"></div>
    {/* Elementos decorativos */}
    <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300/20 rounded-full blur-xl"></div>
    <div className="absolute top-40 right-20 w-32 h-32 bg-pink-300/20 rounded-full blur-xl"></div>
    <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-300/20 rounded-full blur-xl"></div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
          <span className="bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">Circuito</span>
          <br />
          <span className="bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">Familiar</span>
        </h1>
        <div className="flex items-center justify-center gap-3 mb-8">
          <p className="text-3xl md:text-4xl font-bold text-yellow-200">Diversión en cada hoyo</p>
        </div>
        <p className="text-xl mb-12 text-green-100 max-w-3xl mx-auto leading-relaxed">
          Una iniciativa que une deporte y familia en un mismo campo. Torneos accesibles y súper divertidos para
          toda la familia. ¡Prepárate para vivir la experiencia más genial del golf!
        </p>
      </div>
    </div>
  </section>
  )
}
