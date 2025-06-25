"use client"

import { Button, Badge } from "../components"
import { Zap, Sparkles, Users, Calendar, Trophy, Heart, Target, Star, Gift, Clock } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function Premio() {
  return (
    <>
      <section className="py-24 bg-gradient-to-br from-green-100 via-blue-50 to-cyan-100 relative">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-blue-500"></div>

        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <h2 className="text-5xl font-black bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Premio Final
              </h2>
            </div>
            <div className="w-32 h-2 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <Card className="max-w-5xl mx-auto bg-white text-gray-800 shadow-2xl border-0 overflow-hidden">
            <CardHeader className="text-center bg-gradient-to-r from-green-600 via-blue-500 to-cyan-400 text-white py-12 relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-12 h-12 text-white animate-pulse" />
                </div>
                <CardTitle className="text-4xl font-black mb-4">Fin de semana en Port Aventura</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-12 bg-gradient-to-br from-white to-green-50">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto">
                    <Gift className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-black text-2xl text-blue-800">Entradas al parque</h3>
                  <p className="text-gray-600 font-semibold">🎠 Acceso completo a Port Aventura</p>
                </div>
                <div className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-black text-2xl text-green-800">1 día de golf</h3>
                  <p className="text-gray-600 font-semibold">⛳ Experiencia de golf premium</p>
                </div>
                <div className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                    <Clock className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-black text-2xl text-green-800">2 noches en hotel</h3>
                  <p className="text-gray-600 font-semibold">🏨 Hotel dentro del parque</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
