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
  {src: '/pune/LalMahal.png', name:'Laal Mahal'},
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

          <p className="text-center text-slate-600 max-w-4xl mx-auto mb-16 text-lg leading-relaxed">
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-24">
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


        {/* ================= TRAVEL SECTION ================= */}
        <motion.div
          id="travel"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-14">
            <h2 className="text-4xl font-semibold text-slate-800 mb-4">                
              Travel & Connectivity
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto">
              
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">

            {/* Airports */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white/80 backdrop-blur border border-slate-200 rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <Plane className="text-indigo-600" size={24} />
                <h3 className="text-xl font-semibold text-slate-800">
                  Nearest Airports
                </h3>
              </div>

              <div className="space-y-4 text-slate-600">

                <div>
                  <p className="font-medium text-slate-800">
                    Pune International Airport
                  </p>
                  <p className="text-sm flex items-center gap-1">
                    <MapPin size={14} /> 20 km from venue
                  </p>
                  <a
                    href="https://www.aai.aero/en/airports/pune"
                    target="_blank"
                    className="text-indigo-600 text-sm flex items-center gap-1 hover:underline"
                  >
                    Official Website <ExternalLink size={14} />
                  </a>
                </div>

                <div>
                  <p className="font-medium text-slate-800">
                    Chhatrapati Shivaji Maharaj International Airport, Mumbai
                  </p>
                  <p className="text-sm flex items-center gap-1">
                    <MapPin size={14} /> 180 km from venue
                  </p>
                  <a
                    href="https://csmia-mumbai.adaniairports.com/en/"
                    target="_blank"
                    className="text-indigo-600 text-sm flex items-center gap-1 hover:underline"
                  >
                    Official Website <ExternalLink size={14} />
                  </a>
                </div>
            
              </div>
            </motion.div>

            {/* Railway */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white/80 backdrop-blur border border-slate-200 rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <Train className="text-indigo-600" size={24} />
                <h3 className="text-xl font-semibold text-slate-800">
                  Railway Connectivity
                </h3>
              </div>

              <p className="font-medium text-slate-800">
                Pune Junction Railway Station
              </p>

              <p className="text-sm">Station Code: PUNE</p>

              <p className="text-sm text-slate-700 flex items-center gap-1">
                <MapPin size={14} /> 10 km from venue
              </p>
                

            </motion.div>

            {/* Bus */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white/80 backdrop-blur border border-slate-200 rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <Bus className="text-indigo-600" size={24} />
                <h3 className="text-xl font-semibold text-slate-800">
                  Bus Connectivity
                </h3>
              </div>

              <div className="space-y-3 text-slate-600">
                <div>
                  <p className="font-medium text-slate-800">
                    Swargate Bus Stand
                  </p>
                  <p className="text-sm flex items-center gap-1">
                    <MapPin size={14} /> 2 km from venue
                  </p>
                </div>

                <div>
                  <p className="font-medium text-slate-800">
                    Shivajinagar (Wakadewadi) Bus Stand
                  </p>
                  <p className="text-sm flex items-center gap-1">
                    <MapPin size={14} /> 8 km from venue
                  </p>
                </div>

                <div>
                  <p className="font-medium text-slate-800">
                    Pune Station
                  </p>
                  <p className="text-sm flex items-center gap-1">
                    <MapPin size={14} /> 9 km from venue
                  </p>
                </div>
                
              </div>
            </motion.div>


            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white/80 backdrop-blur border border-slate-200 rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <Train className="text-indigo-600" size={24} />
                <h3 className="text-xl font-semibold text-slate-800">
                  Metro Connectivity
                </h3>
              </div>

              <div className="space-y-3 text-slate-600">
                <div>
                  <p className="font-medium text-slate-800">
                    Swargate 
                  </p>
                  <p className="text-sm flex items-center gap-1">
                    <MapPin size={14} /> 2 km from venue
                  </p>
                </div>                
                
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white/80 backdrop-blur border border-slate-200 rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <Hotel className="text-indigo-600" size={24} />
                <h3 className="text-xl font-semibold text-slate-800">
                  Nearest Hotel
                </h3>
              </div>

              <div className="space-y-3 text-slate-600">
                <div>
                  <p className="font-medium text-slate-800">
                    Hotel Utsav Deluxe 
                  </p>
                  <p className="text-sm flex items-center gap-1">
                    <a href='https://hotelutsavdeluxe.com/'>https://hotelutsavdeluxe.com/</a>
                  </p>
                </div>                
                
              </div>
            </motion.div>

          </div>
        </motion.div>


        <div
          className="
            mt-12 max-w-5xl mx-auto
            bg-white/70 backdrop-blur
            border border-slate-200
            border-t-2 border-r-indigo-500
            rounded-2xl
            p-8 md:p-10
            shadow-lg
          "
        >
          <h3 className="text-2xl font-semibold text-black-800 mb-5">
            Note: Visa Details
          </h3>
          <h4> If you need a visa to attend the conference, we can provide an official invitation letter
from the conference side. <a href='https://indianvisaonline.gov.in/'>https://indianvisaonline.gov.in</a></h4>

          
        </div>


      </div>
    </section>
  )
}
