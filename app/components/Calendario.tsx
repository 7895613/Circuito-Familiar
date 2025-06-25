"use client"

import { Button, Badge } from "../components"
import { Calendar, Trophy, Heart, Target, Star } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function Calendario() {
  return (
    <>
      <section id="torneos" className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-blue-500"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <h2 className="text-5xl font-black bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Calendario 2025
              </h2>
            </div>
            <div className="w-32 h-2 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 overflow-hidden  bg-gradient-to-br from-green-50 to-blue-50">
              <CardHeader className="text-center bg-gradient-to-br from-green-500 to-blue-500 text-white py-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl font-black">22 Junio</CardTitle>
              </CardHeader>
              <CardContent className="text-center py-8">
                <p className="font-black text-green-800 text-lg">Las Palmeras Golf</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader className="text-center bg-gradient-to-br from-blue-500 to-cyan-400 text-white py-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl font-black">14 Agosto</CardTitle>
              </CardHeader>
              <CardContent className="text-center py-8 ">
                <p className="font-black text-blue-800 text-lg">Sur de Gran Canaria</p>
                <p className="text-sm text-gray-600 font-semibold">(Campo por confirmar)</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 overflow-hidden bg-gradient-to-br from-cyan-50 to-yellow-50">
              <CardHeader className="text-center bg-gradient-to-br from-cyan-400 to-yellow-400 text-white py-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl font-black">Septiembre</CardTitle>
              </CardHeader>
              <CardContent className="text-center py-8 ">
                <p className="font-black text-orange-800 text-lg">Real Club de Golf de Tenerife</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-4 border-yellow-400 overflow-hidden relative">
              <CardHeader className="text-center bg-gradient-to-br from-yellow-400 to-orange-400 text-white py-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl font-black">Noviembre</CardTitle>
                <Badge className="bg-white text-yellow-800 font-black">PUNTUACIÓN DOBLE</Badge>
              </CardHeader>
              <CardContent className="text-center py-8 bg-gradient-to-br from-yellow-50 to-orange-50">
                <p className="font-black text-yellow-800 text-lg">Real Club de Golf de Las Palmas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
