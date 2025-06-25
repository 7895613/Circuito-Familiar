"use client"

import { Button, Badge } from "../components"
import { Users, Trophy, Heart, Target } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function Modalidad() {
  return (
    <>
      {/* Modalidad */}
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-blue-500"></div>
        <div>
          <section className="py-24 bg-gradient-to-br from-green-100 via-blue-50 to-cyan-100">
            <div className="container mx-auto px-4">
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-3 mb-6">
                  <h2 className="text-5xl font-black bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Modalidad
                  </h2>
                </div>
                <div className="w-32 h-2 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>

              </div>
              <Card className="max-w-5xl mx-auto shadow-2xl border-0 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-green-600 via-blue-500 to-cyan-400 text-white text-center py-12 relative">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6">
                      <Trophy className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-4xl font-black mb-4">Scramble Familiar</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-12 bg-gradient-to-br from-white to-green-50">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-black text-xl text-green-800 mb-2">Parejas</h3>
                          <p className="text-gray-600 font-semibold">👨‍👩‍👧‍👦 1 Adulto + 1 Niño/a Sub 14</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-black text-xl text-blue-800 mb-2">Vínculo Familiar</h3>
                          <p className="text-gray-600 font-semibold">❤️ Vínculo familiar reconocido</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-8">
                      <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg border-l-4 border-cyan-500">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-yellow-400 rounded-full flex items-center justify-center">
                          <Target className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-black text-xl text-orange-800 mb-2">Formato</h3>
                          <p className="text-gray-600 font-semibold">⛳ 9 hoyos de pura diversión</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg border-l-4 border-yellow-500">
                        <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                          <Trophy className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-black text-xl text-yellow-800 mb-2">Ranking</h3>
                          <p className="text-gray-600 font-semibold">🏆 Por los 2 mejores resultados</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
