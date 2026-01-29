'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const publications = [
  { src: '/publications/C_Series.jpeg', alt: 'C Series' },
  { src: '/publications/CompSciJournal.jpeg', alt: 'Computer Science Journal' },
  { src: '/publications/IJECS.jpeg', alt: 'IJECS' },
  { src: '/publications/Polymer.jpeg', alt: 'Polymer Journal' },
  { src: '/publications/Sigma.jpeg', alt: 'Sigma Journal' },
  { src: '/publications/Thermal.jpeg', alt: 'Thermal Engineering' },
  { src: '/publications/Vehicles.jpeg', alt: 'Vehicles Journal' },
]

export default function Publications() {
  return (
    <motion.section
      id="publications"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="
        py-24
        bg-gradient-to-br
        from-sky-50
        via-indigo-50
        to-violet-50
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h3 className="text-3xl md:text-4xl font-semibold text-black-800 mb-6">
          Publications
        </h3>

        {/* Description */}
        <p className="text-slate-800 text-center leading-relaxed max-w-5xl mx-auto mb-16">
        All accepted and presented papers of ICAETM 2026 will be considered
        for publication in reputed journals and conference proceedings,
        subject to peer review, quality standards, and publisher guidelines.
        </p>


        {/* Publications Grid – 3 ROWS */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-x-14
            gap-y-16
            items-center
          "
        >
          {publications.map((pub, idx) => (
            <div
              key={idx}
              className="
                relative
                h-44
                rounded-2xl
                bg-white/70
                backdrop-blur
                border border-slate-200
                shadow-lg
                flex items-center justify-center
                transition-all duration-300
                hover:shadow-xl
                hover:-translate-y-1
                group
              "
            >
              <Image
                src={pub.src}
                alt={pub.alt}
                fill
                className="
                object-contain
                p-6
                transition
                "

              />
            </div>
          ))}
        </div>

      </div>
    </motion.section>
  )
}
