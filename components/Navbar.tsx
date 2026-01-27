// 'use client'

// export default function Navbar(){
//   return(
//     <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-white/10">
//       <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
//         <span className="font-semibold text-lg">ICAI 2026</span>
//         <div className="flex gap-6 text-sm">
//           <a href="#about" className="hover:text-indigo-400">About</a>
//           <a href="#speakers" className="hover:text-indigo-400">Speakers</a>
//           <a href="#schedule" className="hover:text-indigo-400">Schedule</a>
//           <a href="#venue" className="hover:text-indigo-400">Venue</a>
//           <a href="#register" className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500">Register</a>
//         </div>
//       </div>
//     </nav>
//   )
// }


// 'use client'
// import Image from 'next/image'

// export default function Navbar(){
//   return(
//     <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-white/10 font-sans">
//       <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-start gap-8">
        
        


//         {/* Logo / Title */}
//         <span className="font-semibold text-lg text-white mr-6">ICAETM 2026</span>

//         {/* Tabs */}
//         <div className="hidden md:flex gap-4 text-base items-center">

//           <a 
//             href="#about" 
//             className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition-all duration-200"
//           >
//             About
//           </a>

//           <a 
//             href="#conference-track" 
//             className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition-all duration-200"
//           >
//             Conference Track
//           </a>
//           <a 
//             href="#important-dates" 
//             className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition-all duration-200"
//           >
//             Important Dates
//           </a>
//           <a 
//             href="#committee" 
//             className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition-all duration-200"
//           >
//             Committee
//           </a>
//           <a 

//             href="#Registration" 
//             className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition-all duration-200"
//           >
//             Registration
//           </a>
          
//           <a 
//             href="#speakers" 
//             className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition-all duration-200"
//           >
//             Speakers
//           </a>
//           <a 
//             href="#schedule" 
//             className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition-all duration-200"
//           >
//             Schedule
//           </a>
//           <a 
//             href="#venue" 
//             className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition-all duration-200"
//           >
//             Venue
//           </a>

//           {/* Register Button */}
//           <a 
//             href="#register" 
//             className="px-5 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 transition-colors duration-200"
//           >
//             Register
//           </a>
//         </div>

//         {/* Mobile placeholder */}
//         <div className="md:hidden">
//           {/* Hamburger icon can go here */}
//         </div>
//       </div>
//     </nav>
//   )
// }



// 'use client'
// import { useEffect, useState } from 'react'

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20)
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   return (
//     <nav className="fixed top-0 w-full z-50">
      
//       {/* This NEVER moves */}
//       <div
//         className={`
//           mx-auto
//           backdrop-blur bg-slate-950/80
//           border border-white/10
//           transition-all duration-300
//           ${scrolled
//             ? 'max-w-7xl rounded-full shadow-lg'
//             : 'w-full rounded-none border-b'
//           }
//         `}
//       >
//         <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-8 font-sans">

//           <span className="font-semibold text-lg text-white mr-6">
//             ICAETM 2026
//           </span>

//           <div className="hidden md:flex gap-4 text-base items-center">
//             <a href="#about" className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition">
//               About
//             </a>
//             <a href="#conference-track" className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition">
//               Conference Track
//             </a>
//             <a href="#important-dates" className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition">
//               Important Dates
//             </a>
//             <a href="#committee" className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition">
//               Committee
//             </a>
//             <a href="#Registration" className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition">
//               Registration
//             </a>
//             <a href="#speakers" className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition">
//               Speakers
//             </a>
//             <a href="#schedule" className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition">
//               Schedule
//             </a>
//             <a href="#venue" className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition">
//               Venue
//             </a>
            
//             <a
//             href="https://cmt3.research.microsoft.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-5 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 transition-colors duration-200"
//           >
//             Register
//           </a>
//           </div>
//         </div>
//       </div>

//     </nav>
//   )
// }



'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown on outside click or ESC
  useEffect(() => {
    const handler = (e: MouseEvent | KeyboardEvent) => {
      if (
        e instanceof KeyboardEvent &&
        e.key === 'Escape'
      ) {
        setDropdownOpen(false)
      }

      if (
        e instanceof MouseEvent &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handler)
    document.addEventListener('keydown', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('keydown', handler)
    }
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50">
      <div
        className={`
          mx-auto transition-all duration-300
          backdrop-blur-xl bg-slate-950/75
          border border-white/10
          ${scrolled
            ? 'max-w-7xl rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.35)] mt-3'
            : 'w-full rounded-none border-b'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">

          {/* ================= Logo ================= */}
          <a
            href="https://icaetm-website-ebon.vercel.app/"
            className="text-white font-semibold tracking-wide text-lg hover:text-indigo-300 transition"
          >
            ICAETM<span className="text-indigo-400 ml-1">2026</span>
          </a>

          {/* ================= Desktop Nav ================= */}
          <div className="hidden md:flex items-center gap-1 text-sm text-slate-200">

            {[
              ['About', '#about'],
              ['Tracks', '#conference-track'],
              ['Important Dates', '#important-dates'],
              ['Committee', '#committee'],
              ['Registration', '#Registration'],
              ['Speakers', '#speakers'],
              ['Schedule', '#schedule'],
              ['Venue', '#venue'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="
                  px-3 py-2 rounded-full
                  hover:text-white
                  hover:bg-indigo-600/20
                  transition-all
                "
              >
                {label}
              </a>
            ))}

            {/* Register CTA */}
            <a
              href="https://cmt3.research.microsoft.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="
                ml-3 px-5 py-2 rounded-full
                bg-indigo-600 text-white
                hover:bg-indigo-500
                shadow-md hover:shadow-lg
                transition-all
              "
            >
              Register
            </a>

            {/* ================= Advisory Dropdown ================= */}
            <div className="relative ml-2" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-label="More"
                className="
                  w-9 h-9 flex items-center justify-center
                  rounded-full bg-white/10
                  hover:bg-white/20
                  transition
                "
              >
                <span className="text-xl text-white leading-none">⋮</span>
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="
                      absolute right-0 mt-3 w-56
                      rounded-2xl
                      bg-slate-900/90 backdrop-blur-xl
                      border border-white/10
                      shadow-xl
                      py-2
                    "
                  >
                    <a
                      href="#intl-advisory"
                      className="block px-5 py-2 text-sm text-slate-200 hover:bg-indigo-600/25 rounded-lg transition"
                    >
                      International Advisory
                    </a>

                    <a
                      href="#natl-advisory"
                      className="block px-5 py-2 text-sm text-slate-200 hover:bg-indigo-600/25 rounded-lg transition"
                    >
                      National Advisory
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* ================= Mobile Placeholder ================= */}
          <div className="md:hidden text-white text-sm">
            Menu
          </div>

        </div>
      </div>
    </nav>
  )
}
