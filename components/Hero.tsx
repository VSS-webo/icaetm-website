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
    <section className="min-h-screen pt-0 flex items-center justify-center text-center px-6 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        {/* Logo above the title */}
        <div className="mb-6">
          <Image
            src="/logo.jpg"       // put your logo in public/logo.png
            alt="ICAETM 2026 Logo"
            width={120}
            height={120}
            
          />
        </div>

        {/* Main heading */}
       
        <h1 className="text-5xl md:text-5xl  mb-6">ICAETM 2026</h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-white mb-4">
          International Conference on Advances in Engineering Technology & Management - 2026
        </p>

        {/* Date & location */}
        <p className="text-white mb-8">March 18–20, 2026 · Pune, India</p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <a
            className="px-6 py-3 bg-black/30 text-white rounded-xl hover:bg-black/50 transition-colors"
            href="#register"
          >
            Register Now
          </a>
          <a
            className="px-6 py-3 border border-white/40 text-white rounded-xl hover:bg-white/10 transition-colors"
            href="#speakers"
          >
            View Speakers
          </a>
        </div>
      </motion.div>
    </section>
  )
}
