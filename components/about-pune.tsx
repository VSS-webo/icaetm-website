'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Plane,
  Train,
  Bus,
  ExternalLink,
  MapPin,
  Hotel,
  
} from 'lucide-react'

const punePlaces = [
  { src: '/pune/dagduseth-bappa.jpg', name: 'Dagdusheth Halwai Ganpati' },
  { src: '/pune/shaniwarwada.jpg', name: 'Shaniwar Wada' },
  { src: '/pune/sinhagad.jpg', name: 'Sinhagad Fort' },
  { src: '/pune/torna.jpg', name: 'Torna Fort' },
  { src: '/pune/lohagad.jpg', name: 'Lohagad Fort' },
  { src: '/pune/shivneri.jpg', name: 'Shivneri Fort' },
  {src: '/pune/AgaKhan.png', name:'Aga Khan Palace'},
  {src: '/pune/DinkarKelkar.png', name:'Raja Dinkar Kelkar Museum'},
  {src: '/pune/alibag.jpg', name:'Alibaug Beach'},
  {src: '/pune/parvati.jpg', name:'Parvati '},
  {src: '/pune/iskcon.jpg', name:'ISKCON Temple'},
  {src: '/pune/zoo.jpg', name:'Katraj Zoo'},
]

export default function AboutPune() {
  return (
    <section className="bg-gradient-to-br from-sky-50 via-indigo-50 to-violet-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ================= ABOUT PUNE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-black-800">
            About Pune
          </h2>

          <p className="text-center text-slate-600 max-w-4xl mx-auto mb-16 text-lg leading-relaxed text-justify">
            Pune, often referred to as the “Oxford of the East,” is a vibrant
            city known for its rich cultural heritage, academic excellence, and
            dynamic industrial growth. Home to prestigious universities and
            research institutions, the city blends historical significance with
            modern technological advancement. Landmarks such as Shaniwar Wada,
            Sinhagad, Lohagad, Torna, Purandar, and Shivneri Fort reflect its
            glorious legacy, while its thriving IT and automobile industries
            make it an ideal destination for international conferences and
            academic collaboration.
          </p>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-0">
            {punePlaces.map((place, idx) => (
              <div
                key={idx}
                className="relative h-64 rounded-3xl overflow-hidden shadow-lg group"
              >
                <Image
                  src={place.src}
                  alt={place.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-black/10 px-5 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium text-sm tracking-wide">
                    {place.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
        
    </section>
  )
}

// last date 25 sep
// 