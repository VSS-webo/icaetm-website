'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Committee() {
  return (
    <section id="committee" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Conference Committee
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-14">
          ICAETM 2026 is guided by an experienced academic and administrative committee
          ensuring quality, transparency, and global standards.
        </p>

        {/* ===== Chief Patron ===== */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
        >
        <h3 className="text-3xl font-semibold text-violet-400 mb-8 text-center">
            Chief Patrons
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* CARD 1 */}
            <div className="flex bg-slate-800/70 backdrop-blur rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            
            {/* Vertical Image */}
            <div className="w-28 relative">
                <Image
                src="/committee/rajendra.jpg"
                alt="Dr. XYZ ABC"
                fill    
                className="object-cover"
                />
            </div>

            <div className="p-6 flex flex-col justify-center">
                <p className="text-lg font-semibold text-white">
                Shri R. V. Borhade
                </p>
                <p className="text-gray-300 mt-1 text-sm">
                Chairman, Pune Vidyarthi Griha, Pune
                </p>
            </div>
            </div>

            
            <div className="flex bg-slate-800/70 backdrop-blur rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            
            <div className='w-28 relative'>
                <Image
                 src="/committee/gunjal.jpg"
                 alt="Gunjal sir"
                 fill
                 className='object-cover'
                />
            </div>
            <div className="p-6 flex flex-col justify-center">
                <p className="text-lg font-semibold text-white">
                Shri S. N. Gunjal
                </p>
                <p className="text-gray-300 mt-1 text-sm">
                Secretary, Pune Vidyarthi Griha, Pune
                </p>
            </div>
            </div>

            
            <div className="flex bg-slate-800/70 backdrop-blur rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className='w-28 relative'>
                <Image
                 src="/committee/redekar.jpg"
                 alt="redekar sir"
                 fill
                 className='object-cover'
                />
            </div>
            <div className="p-6 flex flex-col justify-center">
                <p className="text-lg font-semibold text-white">
                Shri S. P. Redekar
                </p>
                <p className="text-gray-300 mt-1 text-sm">
                Director, PVG’s COETM, Pune
                </p>
            </div>
            </div>

            
            <div className="flex bg-slate-800/70 backdrop-blur rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className='w-28 relative'>
                <Image
                 src="/committee/kaduskar.jpg"
                 alt="kaduskar sir"
                 fill
                 className='object-cover'
                />
            </div>
            <div className="p-6 flex flex-col justify-center">
                <p className="text-lg font-semibold text-white">
                Prof. R. G. Kaduskar
                </p>
                <p className="text-gray-300 mt-1 text-sm">
                Director, PVG’s COETM, Pune
                </p>
            </div>
            </div>

        </div>
        </motion.div>


        {/* ===== Patron ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-semibold text-violet-400 mb-8 text-center">
            Patron
          </h3>

          <div className="flex max-w-md mx-auto bg-slate-800/70 backdrop-blur rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">

            <div className='w-28 relative'>
                <Image
                 src="/committee/tarambale.jpg"
                 alt="tarambale sir"
                 fill
                 className='object-cover'
                />
            </div>
            <div className="p-6 flex flex-col justify-center">
                <p className="text-lg font-semibold text-white">
                Dr. Manoj R. Tarambale
                </p>
                <p className="text-gray-300 mt-1 text-sm">
                Principal, PVG’s COETM, Pune
                </p>
            </div>
            </div>
        </motion.div>

        {/* ===== Convenors ===== */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        >
        <h3 className="text-3xl font-semibold text-violet-400 mb-5 text-center">
            Convenors
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            
            <div className="flex bg-slate-800/70 backdrop-blur rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="w-28 relative">
                <Image
                src="/committee/bhoomkar.png"
                alt="Dr. Manmohan Bhoomkar"
                fill
                className="object-cover"
                />
            </div>
            <div className="p-6 flex flex-col justify-center">
                <p className="text-lg font-semibold text-white">
                Dr. Manmohan M. Bhoomkar
                </p>
                <p className="text-gray-300 mt-1 text-sm">
                Head, Department of Mechanical Engineering
                </p>
            </div>
            </div>

            {/* Convenor 2 */}
            <div className="flex bg-slate-800/70 backdrop-blur rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="w-28 relative">
                <Image
                src="/committee/edlabadkar.png"
                alt="Dr. Rajendra Borhade"
                fill
                className="object-cover"
                />
            </div>
            <div className="p-6 flex flex-col justify-center">
                <p className="text-lg font-semibold text-white">
                Dr. Ravindra L. Edlabadkar
                </p>
                <p className="text-gray-300 mt-1 text-sm">
                Dean, Autonomy
                </p>
            </div>
            </div>

        </div>
        </motion.div>


      </div>
    </section>
  )
}
