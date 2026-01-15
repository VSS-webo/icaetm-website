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


'use client'
import Image from 'next/image'

export default function Navbar(){
  return(
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-start gap-8">
        
        


        {/* Logo / Title */}
        <span className="font-semibold text-lg text-white mr-6">ICAETM 2026</span>

        {/* Tabs */}
        <div className="hidden md:flex gap-4 text-base items-center">

          <a 
            href="#about" 
            className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition-all duration-200"
          >
            About
          </a>

          <a 
            href="#conference-track" 
            className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition-all duration-200"
          >
            Conference Track
          </a>
          <a 
            href="#important-dates" 
            className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition-all duration-200"
          >
            Important Dates
          </a>
          <a 
            href="#committee" 
            className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition-all duration-200"
          >
            Committee
          </a>
          <a 
          
            href="#Registration" 
            className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition-all duration-200"
          >
            Registration
          </a>
          
          <a 
            href="#speakers" 
            className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition-all duration-200"
          >
            Speakers
          </a>
          <a 
            href="#schedule" 
            className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition-all duration-200"
          >
            Schedule
          </a>
          <a 
            href="#venue" 
            className="px-3 py-2 hover:bg-indigo-600/30 rounded-full transition-all duration-200"
          >
            Venue
          </a>

          {/* Register Button */}
          <a 
            href="#register" 
            className="px-5 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 transition-colors duration-200"
          >
            Register
          </a>
        </div>

        {/* Mobile placeholder */}
        <div className="md:hidden">
          {/* Hamburger icon can go here */}
        </div>
      </div>
    </nav>
  )
}
