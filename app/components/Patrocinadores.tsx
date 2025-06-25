"use client"

import { Button, Badge } from "../components"
import { Zap, Sparkles, Users, Calendar, Trophy, Heart, Target, Star, Gift, Clock, Award } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function Patrocinadores() {
  return (
    <>
      <section id="patrocinadores" className="py-24 bg-gradient-to-br from-gray-50 to-green-50 relative">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-blue-500"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <h2 className="text-5xl font-black bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Patrocinadores
              </h2>
            </div>
            <div className="w-32 h-2 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-green-500"
              >
                <img
                  src={`/patrocineos/logo${i}.png`}
                  alt={`Patrocinador ${i}`}
                  className="w-full h-24 object-contain"
                />
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h3 className="text-3xl font-black bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-8">
              Colabora
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-blue-500"
              >
                <img
                  src={`/colabora/logo${i}.png`}
                  alt={`Colabora ${i}`}
                  className="w-full h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
