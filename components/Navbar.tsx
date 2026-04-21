
'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Publications from './Publication'
import { register } from 'module'
import { trackDynamicHoleInStaticShell } from 'next/dist/server/app-render/dynamic-rendering'
import Committee from './Committee'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  
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
            href="https://icaetm.org"
            className="text-white font-semibold tracking-wide text-lg hover:text-indigo-300 transition"
          >
            ICAETM<span className="text-indigo-400 ml-1">2026</span>
          </a>

          
          <div className="hidden md:flex items-center gap-1 text-sm text-slate-200">

            {[
              ['About', '#about'],
              ['Tracks', '#conference-track'],
              ['Publications', '#publications'],
              ['Committee', '#committee'],
              ['Important Details', '#important-dates'],
              
              // ['Registration', '#Registration'],
              ['Templates', '#template'],
              ['Acknowledgement', '#acknowledgement'],
              ['Note', '#speakers'],
              
              ['Contact', '#venue'],
              ['Brochure', '#venue'],
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

            
            {/* <a
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
            </a> */}

            {/* ================= Advisory Dropdown ================= */}

            {/* <div className="relative ml-2" ref={dropdownRef}>
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
            </div> */}

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





//[W*&QJ6;FU$#DD&b
