"use client"

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Contact } from "../components/Contact"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-4">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}
