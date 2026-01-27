// 'use client'
// import {motion} from 'framer-motion'

// export default function Hero(){
//   return(
//     <section className="min-h-screen pt-16 flex items-center justify-center text-center px-6 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700">
//       <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
//         <h1 className="text-5xl md:text-5xl  mb-6">ICAETM 2026</h1>
//         <p className="text-xl md:text-3xl mb-4">International Conference on Advances in Engineering Technology 
// & Management-2026</p>
//         {/* <p className='text-l md:text-2xl mb-8'>ICAETM 2026</p> */}
//         <p className="mb-8">March 18–20, 2026 · Pune, India</p>
//         <div className="flex gap-4 justify-center">
//           <a className="px-6 py-3 bg-black/30 rounded-xl hover:bg-black/50" href="#register">Register Now</a>
//           <a className="px-6 py-3 border border-white/40 rounded-xl hover:bg-white/10" href="#speakers">View Speakers</a>
//         </div>
//       </motion.div>
//     </section>
//   )
// }

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* ================= Background Image ================= */}
      <Image
        src="/about/pvgcoet.jpg"   // full campus / college image
        alt="PVG COETM Campus"
        fill
        priority
        className="object-cover"
      />

      {/* ================= Dark Gradient Overlay ================= */}
      <div className="
        absolute inset-0
        bg-gradient-to-b
        from-black/70
        via-black/55
        to-black/80
      " />

      {/* ================= Content ================= */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-4xl text-center flex flex-col items-center"
        >

          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/logo.jpg"
              alt="ICAETM 2026 Logo"
              width={140}
              height={140}
              className="full shadow-2xl"
            />
          </div>

          {/* Conference Title */}
          <h1 className="
            text-white
            text-4xl md:text-6xl
            font-semibold
            tracking-wide
            mb-6
          ">
            ICAETM <span className="text-indigo-400">2026</span>
          </h1>

          {/* Subtitle */}
          <p className="
            text-slate-200
            text-lg md:text-2xl
            leading-relaxed
            mb-4
          ">
            International Conference on Advances in
            Engineering, Technology & Management
          </p>

          {/* Date & Location */}
          <p className="text-slate-300 mb-10 tracking-wide">
            March 18–20, 2026 · Pune, India
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2F"
              target="_blank"
              className="
                px-8 py-3
                rounded-full
                bg-indigo-600 text-white
                hover:bg-indigo-500
                transition-all
                shadow-lg hover:shadow-xl
              "
            >
              Register Now
            </a>

            <a
              href="#speakers"
              className="
                px-8 py-3
                rounded-full
                border border-white/40
                text-white
                hover:bg-white/10
                transition-all
              "
            >
              View Speakers
            </a>

          </div>

        </motion.div>
      </div>
    </section>
  )
}
