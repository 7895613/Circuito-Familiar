"use client"

import { Heart, Gamepad2 } from "../components"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  Award,
} from "lucide-react"


export function About() {
  return (
    <section id="sobre-nosotros" className="py-24 bg-white relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-blue-500"></div>
    <div className="container mx-auto px-4">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-3 mb-6">
          <h2 className="text-5xl font-black bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Sobre el Circuito Familiar
          </h2>
        </div>
        <div className="w-32 h-2 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center h-full">
        <div className="relative h-full">
          <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur opacity-20"></div>
          <img
            src="https://live.staticflickr.com/65535/53953893596_04387e3943_b.jpg"
            alt="Familia jugando golf"
            className="rounded-2xl shadow-2xl w-full h-full object-cover relative z-10 transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="space-y-2">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border-l-4 border-green-500 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
            🏌️‍♂️ El Circuito Familiar de Golf de Canarias une deporte y familia en un mismo campo. A través de torneos divertidos y accesibles, celebramos el golf como punto de encuentro entre generaciones.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-l-4 border-blue-500 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
            🎉 Más que competir, vivimos el compañerismo, la convivencia y la pasión por el deporte base en cada evento.
            </p>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-yellow-50 p-8 rounded-2xl border-l-4 border-cyan-500 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
            🌟 Queremos que el golf sea una tradición familiar en las islas: para aprender, compartir y disfrutar juntos.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
