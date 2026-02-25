// 'use client'

// import { motion } from 'framer-motion'
// import Image from 'next/image'

// const publications = [
//   { src: '/publications/C_Series.jpeg', alt: 'C Series' },
//   { src: '/publications/Scientific-net.png', alt: 'Scientific Net Journal' },
//   { src: '/publications/IJECS.jpeg', alt: 'IJECS' },
//   { src: '/publications/Polymer.jpeg', alt: 'Polymer Journal' },
//   { src: '/publications/Sigma.jpeg', alt: 'Sigma Journal' },
//   { src: '/publications/Thermal.jpeg', alt: 'Thermal Engineering' },
//   { src: '/publications/Vehicles.jpeg', alt: 'Vehicles Journal' },
// ]

// export default function Publications() {
//   return (
//     <motion.section
//       id="publications"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//       className="
//         py-24
//         bg-gradient-to-br
//         from-sky-50
//         via-indigo-50
//         to-violet-50
//       "
//     >
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <h3 className="text-center text-5xl md:text4xl font-semibold text-black-800 mb-6">
//           Publication Details
//         </h3>

//         {/* Description */}
        
//         <p className='text-center text-slate-600 max-w-6xl mx-auto mb-14 text-lg'>
//         All accepted abstracts will be published in the Conference Abstract Proceedings. Selected full-length
//         papers will be forwarded for possible publication in reputed journals indexed such as Scopus, Web
//         of Science (WoS), and Google Scholar, subject to editorial review and publisher approval. Selected
//         papers may also be considered for publication in a book with an ISBN.
//         Please note that any additional publication charges, if applicable, will be borne by the authors as per
//         the publisher’s policy
//         </p>


//         {/* Publications Grid – 3 ROWS */}
//         <div
//           className="
//             grid
//             grid-cols-1
//             sm:grid-cols-2
//             lg:grid-cols-3
//             gap-x-14
//             gap-y-16
//             items-center
//           "
//         >
//           {publications.map((pub, idx) => (
//             <div
//               key={idx}
//               className="
//                 relative
//                 h-44
//                 rounded-2xl
//                 bg-white/70
//                 backdrop-blur
//                 border border-slate-200
//                 shadow-lg
//                 flex items-center justify-center
//                 transition-all duration-300
//                 hover:shadow-xl
//                 hover:-translate-y-1
//                 group
//               "
//             >
//               <Image
//                 src={pub.src}
//                 alt={pub.alt}
//                 fill
//                 className="
//                 object-contain
//                 p-6
//                 transition
//                 "

//               />
//             </div>
//           ))}
//         </div>

//       </div>
//     </motion.section>
//   )
// }


// 'use client'

// import { motion } from 'framer-motion'
// import Image from 'next/image'

// const publications = [
//   { src: '/publications/C_Series.jpeg', alt: 'C Series' },
//   { src: '/publications/Scientific-net.png', alt: 'Scientific Net Journal' },
  
//   { src: '/publications/Polymer.jpeg', alt: 'Polymer Journal' },
//   { src: '/publications/Sigma.jpeg', alt: 'Sigma Journal' },
//   { src: '/publications/Thermal.jpeg', alt: 'Thermal Engineering' },
  
// ]

// /* peer_reviewed JOURNAL IMAGES — 3 ROWS × 4 */
// const peer_reviewedPublications = [
//   '/publications/peer_reviewed/AEF.jpeg',
//   '/publications/peer_reviewed/AMM.jpeg',
//   '/publications/peer_reviewed/AMR.jpeg',
//   '/publications/peer_reviewed/CTA.jpeg',
//   '/publications/peer_reviewed/DFMA.jpeg',
//   '/publications/peer_reviewed/EC.jpeg',
//   '/publications/peer_reviewed/EH.jpeg',
//   '/publications/peer_reviewed/EI.jpeg',
//   '/publications/peer_reviewed/IJECS-Mech.jpeg',
//   '/publications/peer_reviewed/IJVSS-Mech.png',
//   '/publications/peer_reviewed/JMNM.jpeg',
// ]

// export default function Publications() {
//   return (
//     <motion.section
//       id="publications"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//       className="
//         py-24
//         bg-gradient-to-br
//         from-sky-50
//         via-indigo-50
//         to-violet-50
//       "
//     >
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <h3 className="text-center text-5xl md:text-4xl font-semibold text-slate-800 mb-6">
//           Publication Details
//         </h3>

//         {/* Description */}
//         <p className="text-center text-slate-600 max-w-5xl mx-auto mb-10 text-lg leading-relaxed text-justify">
//           All accepted abstracts will be published in the Conference Abstract Proceedings. Selected full-length
//           papers will be forwarded for possible publication in reputed journals indexed such as Scopus, Web
//           of Science (WoS), and Google Scholar, subject to editorial review and publisher approval.
//         </p>

//         <p className="text-center text-slate-900 max-w-5xl mx-auto mb-10 text-lg leading-relaxed text-justify">
//             Selected papers may also be considered for publication in a book with an ISBN. 
//         </p>

//         <p className="text-center text-slate-900 max-w-5xl mx-auto mb-16 text-lg leading-relaxed text-justify">
//              Any additional publication charges, if applicable, will be borne by the authors as per publisher policy.
//         </p>



//         {/* EXISTING JOURNAL CARDS */}
//         <div className="
//           grid
//           grid-cols-1
//           sm:grid-cols-2
//           lg:grid-cols-3
//           gap-x-14
//           gap-y-16
//           items-center
//           mb-20
//         ">
//           {publications.map((pub, idx) => (
//             <div
//               key={idx}
//               className="
//                 relative
//                 h-44
//                 rounded-2xl
//                 bg-white/70
//                 backdrop-blur
//                 border border-slate-200
//                 shadow-lg
//                 flex items-center justify-center
//                 transition-all duration-300
//                 hover:shadow-xl
//                 hover:-translate-y-1
//               "
//             >
//               <Image
//                 src={pub.src}
//                 alt={pub.alt}
//                 fill
//                 className="object-contain p-6"
//               />
//             </div>
//           ))}
//         </div>


//         {/* EXTRA JOURNAL IMAGES — MEDIUM SIZE */}
//         <div
//           className="
//             grid
//             grid-cols-1
//             sm:grid-cols-2
//             lg:grid-cols-4
//             gap-x-10
//             gap-y-12
//             mt-16
//             items-center
//           "
//         >
//           {peer_reviewedPublications.map((src, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.05 }}
//               className="
//                 flex
//                 justify-center
//                 items-center
//               "
//             >
//               <Image
//                 src={src}
//                 alt={`Journal ${index + 1}`}
//                 width={200}
//                 height={160}
//                 className="
//                   object-contain
//                   transition-transform duration-300
//                   hover:scale-105
//                 "
//               />
//             </motion.div>
//           ))}
//         </div>




//       </div>
//     </motion.section>
//   )
// }


'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const publications = [
  { src: '/publications/C_Series.jpeg', alt: 'C Series', title: 'C Series Journal' },
  { src: '/publications/Scientific-net.png', alt: 'Scientific Net Journal', title: 'Scientific.Net' },
  { src: '/publications/Polymer.jpeg', alt: 'Polymer Journal', title: 'Polymer Journal' },
  { src: '/publications/Sigma.jpeg', alt: 'Sigma Journal', title: 'Sigma Journal' },
  { src: '/publications/Thermal.jpeg', alt: 'Thermal Engineering', title: 'Thermal Engineering Journal' },
]

const peer_reviewedPublications = [
  { src: '/publications/peer_reviewed/AEF.jpeg', title: 'Advanced Engineering Forum' },
  { src: '/publications/peer_reviewed/AMM.jpeg', title: 'Applied Mechanics & Materials' },
  { src: '/publications/peer_reviewed/AMR.jpeg', title: 'Advanced Materials Research' },
  { src: '/publications/peer_reviewed/CTA.jpeg', title: 'Construction Technologies & Architecture' },
  { src: '/publications/peer_reviewed/DFMA.jpeg', title: 'Diffusion Foundations & Material Applications' },
  { src: '/publications/peer_reviewed/EC.jpeg', title: 'Engineering Chemistry' },
  { src: '/publications/peer_reviewed/EH.jpeg', title: 'Engineering Headway' },
  { src: '/publications/peer_reviewed/EI.jpeg', title: 'Engineering Innovations ' },
  { src: '/publications/peer_reviewed/IJECS-Mech.jpeg', title: 'International Journal of Engineering & Computer Science' },
  { src: '/publications/peer_reviewed/IJVSS-Mech.png', title: 'International Journal of Vehicle Structures & Systems  ' },
  { src: '/publications/peer_reviewed/JMNM.jpeg', title: 'Journal of Metastable & Noncrystalline Materials' },
]

export default function Publications() {
  return (
    <motion.section
      id="publications"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-gradient-to-br from-sky-50 via-indigo-50 to-violet-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h3 className="text-center text-4xl md:text-5xl font-semibold text-slate-800 mb-6">
          Publication Details
        </h3>

        {/* Description */}
        <p className="text-center text-slate-600 max-w-5xl mx-auto mb-10 text-lg leading-relaxed text-justify">
          All accepted abstracts will be published in the Conference Abstract Proceedings.
          Selected full-length papers will be forwarded for possible publication in reputed
          journals indexed such as Scopus, Web of Science (WoS), and Google Scholar,
          subject to editorial review and publisher approval.
        </p>

        <p className="text-center text-slate-900 max-w-5xl mx-auto mb-10 text-lg leading-relaxed text-justify">
          Selected papers will be considered for publication in a book with an ISBN.
        </p>

        <p className="text-center text-slate-900 max-w-5xl mx-auto mb-16 text-lg leading-relaxed text-justify">
          Any additional publication charges, if applicable, will be borne by the authors as per publisher policy.
        </p>

        {/* EXISTING JOURNAL CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-16 items-center mb-20">
          {publications.map((pub, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">

              <div className="relative h-44 w-full rounded-2xl bg-white/70 backdrop-blur border border-slate-200 shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <Image
                  src={pub.src}
                  alt={pub.alt}
                  fill
                  className="object-contain p-6"
                />
              </div>

              {/* Title Below Card */}
              <p className="mt-4 text-base font-semibold text-slate-800 tracking-wide">
                {pub.title}
              </p>

            </div>
          ))}
        </div>

        {/* PEER REVIEWED JOURNALS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 mt-16 items-center">
          {peer_reviewedPublications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col items-center text-center"
            >

              <Image
                src={pub.src}
                alt={pub.title}
                width={200}
                height={160}
                className="object-contain transition-transform duration-300 hover:scale-105"
              />

              {/* Title Below Image */}
              <p className="mt-4 text-sm font-medium text-slate-700">
                {pub.title}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  )
}