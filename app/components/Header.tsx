"use client"

import Image from "next/image"

export function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b-4 border-gradient-to-r from-green-500 to-blue-500">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
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
              <span className="text-2xl font-black bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Circuito Familiar
              </span>
              <div className="text-xs text-gray-500 font-medium">GOLF CANARIAS</div>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-green-600 hover:text-blue-500 transition-colors font-semibold relative group"
            >
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/contact"
              className="text-green-600 hover:text-blue-500 transition-colors font-semibold relative group"
            >
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
