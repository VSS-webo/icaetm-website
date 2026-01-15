// 'use client'
// import {useState} from 'react'

// export default function About(){
//   const [openPune,setOpenPune]=useState(false)
//   const [openInstitute,setOpenInstitute]=useState(false)

//   return(
//     <section
//       id="about"
//       className="scroll-mt-20 py-20 bg-slate-950"
//     >
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl font-semibold mb-12 text-center">
//           About
//         </h2>


//         {/* ABOUT CONFERENCE – FULL WIDTH */}
//         <div className="mb-12 rounded-2xl bg-slate-900 p-8">
//           <h3 className="text-2xl font-medium mb-4">
//             About the Conference
//           </h3>
//           <p className="text-slate-300 leading-relaxed">
//             ICAI 2026 is an international forum that brings together
//             researchers, academicians, and industry professionals
//             from across the globe to exchange ideas and discuss
//             emerging trends in computing, artificial intelligence,
//             data science, and interdisciplinary technologies.
//           </p>
//         </div>

//         {/* TWO PARALLEL PANELS */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//           {/* PUNE */}
//           <div
//             onClick={()=>setOpenPune(!openPune)}
//             className="cursor-pointer rounded-2xl bg-slate-900 p-6 hover:bg-slate-800 transition"
//           >
//             <h3 className="text-2xl font-medium mb-3">
//               About Pune
//             </h3>

//             <p className="text-slate-300">
//               Pune is known as the educational and cultural capital
//               of Maharashtra.
//             </p>

//             {openPune && (
//               <p className="mt-4 text-slate-400 leading-relaxed">
//                 Pune hosts numerous universities, research centers,
//                 and IT industries. With its pleasant climate,
//                 historical significance, and vibrant academic
//                 ecosystem, Pune is an ideal destination for
//                 international conferences and global collaboration.
//               </p>
//             )}
//           </div>

//           {/* INSTITUTE */}
//           <div
//             onClick={()=>setOpenInstitute(!openInstitute)}
//             className="cursor-pointer rounded-2xl bg-slate-900 p-6 hover:bg-slate-800 transition"
//           >
//             <h3 className="text-2xl font-medium mb-3">
//               About the Institute
//             </h3>

//             <p className="text-slate-300">
//               The organizing institute is committed to excellence
//               in education and research.
//             </p>

//             {openInstitute && (
//               <p className="mt-4 text-slate-400 leading-relaxed">
//                 The institute provides state-of-the-art
//                 infrastructure, experienced faculty, and a strong
//                 emphasis on innovation, interdisciplinary research,
//                 and industry collaboration, fostering an environment
//                 of academic excellence and global engagement.
//               </p>
//             )}
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }



'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutCreative() {
  return (
    <section id="about" className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <h2 className="text-5xl font-bold text-center text-white mb-12">
          About PVG & ICAETM 2026
        </h2>

        {/* PVG Overview with image */}
        <motion.div
          className="md:flex md:items-center md:gap-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/pvgcoet.jpg"
              alt="PVG Campus"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold text-violet-400 mb-4">Pune Vidyarthi Griha (PVG)</h3>
            <p className="text-gray-200 mb-2">
              <a href="https://www.punevidyarthigriha.org/" target="_blank" className="text-sky-400 hover:underline">PVG</a>, established in 1909, provides inclusive, value-based, and quality education across Pune, Mumbai, and Nashik. Over a century, PVG evolved into a comprehensive educational organization with programs from pre-primary to higher education in engineering, technology, management, science, and allied disciplines.
            </p>
            <p className="text-gray-200">
              PVG pioneered technical education, being the first in India to introduce formal Printing Engineering & Communication Technology programs since 1926. Social responsibility is a core value through hostels for needy students and an old-age home in Pune.
            </p>
          </div>
        </motion.div>

        {/* PVG COETM with reversed layout */}
        <motion.div
          className="md:flex md:items-center md:gap-12 mb-16 flex-col-reverse md:flex-row-reverse"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/coetm-building.jpg"
              alt="PVG COETM"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold text-violet-400 mb-4">PVG’s COETM, Pune</h3>
            <p className="text-gray-200 mb-2">
              <a href="https://www.pvgcoet.ac.in/" target="_blank" className="text-sky-400 hover:underline">PVG’s COETM</a>, established in 1985, is a premier autonomous institute permanently affiliated to SPPU, approved by AICTE, accredited by NAAC ‘A’ Grade and NBA programs.
            </p>
            <p className="text-gray-200">
              With modern labs, library, research ecosystem, and advanced computing facilities, COETM offers Undergraduate, Postgraduate, and Doctoral programs in Engineering, Technology, & Management — providing a perfect platform for learning, innovation, and interdisciplinary collaboration.
            </p>
          </div>
        </motion.div>

        {/* About Conference */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 text-center"
        >
          <h3 className="text-3xl font-semibold text-violet-400 mb-4">About ICAETM 2026</h3>
          <p className="text-gray-200 mb-4">
            ICAETM 2026 brings together academicians, researchers, industry experts, and students on a global platform to explore innovations, interdisciplinary research, and sustainable engineering solutions.
          </p>
          <p className="text-gray-200">
            The conference features keynote talks, technical sessions, and peer-reviewed paper presentations, with selected papers published in reputed Scopus-indexed journals/proceedings.
          </p>
        </motion.div>

        {/* Objectives as cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            "Provide a premier international platform for researchers, academics, and industry professionals.",
            "Exchange cutting-edge knowledge and present innovative research findings.",
            "Foster collaborations across Engineering, Technology & Management domains."
          ].map((obj, i) => (
            <div key={i} className="bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <p className="text-gray-200">{obj}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
