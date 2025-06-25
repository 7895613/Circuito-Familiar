"use client"

import React from "react"
import { Calendar, Mail, Phone, Award, Target, Trophy } from "lucide-react"
import Image from "next/image"

export const Footer = () => {
  return (
    <footer className=" text-black py-16 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-blue-500"></div>

    <div className="absolute inset-0 bg-black/20"></div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center rounded-full">
              <Image
                src="/logo.webp"
                alt="Logo"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <div>
              <span className="text-2xl font-black">Circuito Familiar</span>
              <div className="text-xs font-medium">GOLF CANARIAS</div>
            </div>
          </div>
          <p className="text-black font-medium leading-relaxed">
            Uniendo familias a través del golf en las Islas Canarias. ¡La diversión está garantizada!
          </p>
        </div>

        <div>
          <h3 className="font-black text-xl mb-6 text-black">Contacto</h3>
          <div className="space-y-4 text-black">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-semibold">info@circuitofamiliar.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-semibold">+34 609 062 944</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-black text-xl mb-6 text-black">Síguenos</h3>
          <div className="flex flex-col space-y-4">
            <button
              type="button"
              className="bg-white/20 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-black font-bold rounded-full shadow-lg transform hover:scale-105 transition-all inline-flex items-center px-4 py-2"
            >
              📘 Facebook
            </button>
            <button
              type="button"
              className="bg-white/20 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-black font-bold rounded-full shadow-lg transform hover:scale-105 transition-all inline-flex items-center px-4 py-2"
            >
              📸 Instagram
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}
