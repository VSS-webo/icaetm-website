'use client'

import { motion } from "framer-motion"

export default function Brochure() {
  return (
    <motion.div
      id="travel"
      className="py-20 bg-gradient-to-br from-sky-50 via-indigo-50 to-violet-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-5 text-slate-800">
            Brochure
          </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src='/brochures/ICAETM_2026.png' 
              alt="Venue"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-xl p-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              src='/brochures/ICAETM_Brochure.pdf' 
              className="w-full h-[500px] rounded-lg border"
            />
          </motion.div>
          

        </div>

        

      </div>
    </motion.div>
  )
}