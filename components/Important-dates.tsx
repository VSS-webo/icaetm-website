'use client'
import { motion } from 'framer-motion'

export default function ImportantDates() {
  return (
    <section id="important-dates" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-normal text-white mb-4">
            Important Dates
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Please note the following key deadlines for ICAETM 2026.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">

          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />

          {[
            { title: 'Last Date for Full Paper Submission', date: '15 April 2026' },
            { title: 'Intimation of Acceptance', date: '15 May 2026' },
            { title: 'Camera-Ready Paper Submission', date: '31 May 2026' },
            { title: 'Last Date for Registration', date: '15 June 2026' },
            { title: 'Conference Dates', date: 'July 2026' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative flex gap-6 mb-8"
            >
              {/* Point */}
              <div className="w-8 flex justify-center">
                <span className="w-3 h-3 rounded-full bg-violet-400 mt-2" />
              </div>

              {/* Content */}
              <div className="bg-slate-800/70 backdrop-blur
                              border border-white/10 rounded-xl
                              px-5 py-4 flex-1">
                <p className="text-white font-medium">
                  {item.title}
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  {item.date}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
