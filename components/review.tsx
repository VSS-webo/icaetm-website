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

export default function Reviewer() {
  return (
    <section 
    id="reviewer"
    className="bg-gradient-to-br from-sky-10 via-indigo-50 to-violet-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ================= ABOUT PUNE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-black-800">
            Reviewer
          </h2>

          <p className="text-center text-slate-600 max-w-4xl mx-auto mb-16 text-lg leading-relaxed text-justify">
            Reviewer
            To maintain the quality of articles intended for Scopus publication, we invite you to review manuscripts in
            your area of specialization. The review process will be conducted in a blind peer-review manner to ensure
            fairness and transparency. The registration link is provided below.
            A certificate of appreciation will be issued upon successful completion of the review process.
            <br/>
            <a href='https://forms.gle/LQGkGC55HAxezBG29'
            target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 text-lg flex items-center gap-1 hover:underline">Google Form Link</a>
            </p>
            

          
        </motion.div>

      </div>
        
    </section>
  )
}

// last date 25 sep
// 