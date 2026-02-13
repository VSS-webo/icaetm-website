// 'use client'
// import { motion } from 'framer-motion'
// import Image from 'next/image'

// export default function Committee() {
//   return (
//     <section id="committee" className="py-20 bg-white-900">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Section Heading */}
//         <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-4">
//           Conference Committee
//         </h2>
//         <p className="text-center text-black-300 max-w-3xl mx-auto mb-14">
//           ICAETM 2026 is guided by an experienced academic and administrative committee
//           ensuring quality, transparency, and global standards.
//         </p>

//         {/* ===== Chief Patron ===== */}
//         <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//         className="mb-16"
//         >
//         <h3 className="text-3xl font-semibold text-violet-400 mb-8 text-center">
//             Chief Patrons
//         </h3>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">

//             {/* CARD 1 */}
//             <div className="flex bg-white-800/70 backdrop-blur rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            
//             {/* Vertical Image */}
//             {/* <div className="w-28 relative">
//                 <Image
//                 src="/committee/rajendra.jpg"
//                 alt="Dr. XYZ ABC"
//                 fill    
//                 className="object-cover"
//                 />
//             </div> */}

//             <div className="p-6 flex flex-col justify-center">
//                 <p className="text-lg font-semibold text-black">
//                 Shri R. V. Borhade
//                 </p>
//                 <p className="text-dark-grey-300 mt-1 text-sm">
//                 Chairman, Pune Vidyarthi Griha, Pune
//                 </p>
//             </div>
//             </div>

            
//             <div className="flex bg-white-800/70 backdrop-blur rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            
//             {/* <div className='w-28 relative'>
//                 <Image
//                  src="/committee/gunjal.jpg"
//                  alt="Gunjal sir"
//                  fill
//                  className='object-cover'
//                 />
//             </div> */}
//             <div className="p-6 flex flex-col justify-center">
//                 <p className="text-lg font-semibold text-black">
//                 Shri S. N. Gunjal
//                 </p>
//                 <p className="text-black-300 mt-1 text-sm">
//                 Secretary, Pune Vidyarthi Griha, Pune
//                 </p>
//             </div>
//             </div>

            
//             <div className="flex bg-white-800/70 backdrop-blur rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
//             {/* <div className='w-28 relative'>
//                 <Image
//                  src="/committee/redekar.jpg"
//                  alt="redekar sir"
//                  fill
//                  className='object-cover'
//                 />
//             </div> */}
//             <div className="p-6 flex flex-col justify-center">
//                 <p className="text-lg font-semibold text-black">
//                 Shri S. P. Redekar
//                 </p>
//                 <p className="text-black-300 mt-1 text-sm">
//                 Director, PVG’s COETM, Pune
//                 </p>
//             </div>
//             </div>

            
//             <div className="flex bg-white-800/70 backdrop-blur rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
//             {/* <div className='w-28 relative'>
//                 <Image
//                  src="/committee/kaduskar.jpg"
//                  alt="kaduskar sir"
//                  fill
//                  className='object-cover'
//                 />
//             </div> */}
//             <div className="p-6 flex flex-col justify-center">
//                 <p className="text-lg font-semibold text-black">
//                 Prof. R. G. Kaduskar
//                 </p>
//                 <p className="text-black-300 mt-1 text-sm">
//                 Director, PVG’s COETM, Pune
//                 </p>
//             </div>
//             </div>

//         </div>
//         </motion.div>


//         {/* ===== Patron ===== */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="mb-16"
//         >
//           <h3 className="text-3xl font-semibold text-violet-400 mb-8 text-center">
//             Patron
//           </h3>

//           <div className="flex max-w-md mx-auto bg-white-800/70 backdrop-blur rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">

//             {/* <div className='w-28 relative'>
//                 <Image
//                  src="/committee/tarambale.jpg"
//                  alt="tarambale sir"
//                  fill
//                  className='object-cover'
//                 />
//             </div> */}
//             <div className="p-6 flex flex-col justify-center">
//                 <p className="text-lg font-semibold text-white">
//                 Dr. Manoj R. Tarambale
//                 </p>
//                 <p className="text-gray-300 mt-1 text-sm">
//                 Principal, PVG’s COETM, Pune
//                 </p>
//             </div>
//             </div>
//         </motion.div>

//         {/* ===== Convenors ===== */}
//         <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5, delay: 0.1 }}
//         >

        
//         <h3 className="text-3xl font-semibold text-violet-400 mb-5 text-center">
//             Convenors
//         </h3>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            
//             <div className="flex bg-white-800/70 backdrop-blur rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
//             {/* <div className="w-28 relative">
//                 <Image
//                 src="/committee/bhoomkar.png"
//                 alt="Dr. Manmohan Bhoomkar"
//                 fill
//                 className="object-cover"
//                 />
//             </div> */}
//             <div className="p-6 flex flex-col justify-center  hover:border-violet-400/40">
//                 <p className="text-lg font-semibold text-white">
//                 Dr. Manmohan M. Bhoomkar
//                 </p>
//                 <p className="text-gray-300 mt-1 text-sm">
//                 Head, Department of Mechanical Engineering
//                 </p>
//             </div>
//             </div>

//             {/* Convenor 2 */}
//             <div className="flex bg-white-800/70 backdrop-blur rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
//             {/* <div className="w-28 relative">
//                 <Image
//                 src="/committee/edlabadkar.png"
//                 alt="Dr. Rajendra Borhade"
//                 fill
//                 className="object-cover"
//                 />
//             </div> */}
//             <div className="p-6 flex flex-col justify-center">
//                 <p className="text-lg font-semibold text-white">
//                 Dr. Ravindra L. Edlabadkar
//                 </p>
//                 <p className="text-gray-300 mt-1 text-sm">
//                 Dean, Autonomy
//                 </p>
//             </div>
//             </div>

//         </div>
//         </motion.div>



//         {/* ===== Programme Chair ===== */}
//         <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5, delay: 0.15 }}
//         className="mt-20"
//         >
//         <h3 className="text-3xl font-semibold text-violet-400 mb-4 text-center">
//             Programme Chair
//         </h3>

//         <p className="text-center text-gray-300 mb-10 max-w-3xl mx-auto">
//             Members of the Organizing Committee contributing to the planning and
//             execution of ICAETM-2026.
//         </p>

//         <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">

//             {[
//             {
//                 name: 'Dr. Dipak S. Patil',
//                 role: 'Registrar, PVG’s COETM, Pune',
//             },
//             {
//                 name: 'Dr. Prasanna G. Shete',
//                 role: 'Head, E&TC Engg.',
//             },
//             {
//                 name: 'Prof. Mrs. Madhura P. Mahajan',
//                 role: 'Head of Print. Packg. Tech',
//             },
//             {
//                 name: 'Dr. Mangesh S. Thakare',
//                 role: 'Head of Electrical Engg.',
//             },
//             {
//                 name: 'Dr. Surendra A. Mahajan',
//                 role: 'Head, IT',
//             },
//             {
//                 name: 'Prof. Mrs. Urmila M. Kalshetti',
//                 role: 'Head, Comp. Engg.',
//             },
//             {
//                 name: 'Dr. Mrs. Minakshi P. Atre',
//                 role: 'Head, AIDS',
//             },
//             {
//                 name: 'Prof. Mrs. Anjali S. Waghmare',
//                 role: 'Head, Applied Science',
//             },
//             {
//                 name: 'Dr. Mrs. Smita R. Temgire',
//                 role: 'Head MBA',
//             },
//             {
//                 name: 'Dr. Mahesh P. Potdar',
//                 role: 'Dean Academics',
//             },
//             {
//                 name: 'Prof. Omkar S. Pawaskar',
//                 role: 'CEO, PVG’s COETM, Pune',
//             },
//             {
//                 name: 'Dr. Mrs. Ujjawala S. Thakar',
//                 role: 'Dean NBA',
//             },
//             {
//                 name: 'Dr. Naresh G. Jaiswal',
//                 role: 'Dean Faculty Development',
//             },
//             {
//                 name: 'Dr. Pravin G. Kulkarni',
//                 role: 'Dean Quality Assurance',
//             }


//             ].map((member, idx) => (
//             <div
//                 key={idx}
                
//                 className="
//                     border border-white/10 rounded-xl
//                     px-5 py-4
//                     hover:border-violet-400/40
//                     transition-all duration-300
//                     "
//                 >
//                 <p className="text-white font-medium">
//                 {member.name}
//                 </p>
//                 <p className="text-gray-400 text-sm mt-1">
//                 {member.role}
//                 </p>
//             </div>
//             ))}

//         </div>
//         </motion.div>
        

//         <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5, delay: 0.15 }}
//         className="mt-20"
//         >
//         <h3 className="text-3xl font-semibold text-violet-400 mb-4 text-center">
//             Coordinators
//         </h3>

//         <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">

//             {[
//             {
//                 name: 'Dr. Shubhangi M. Gondane',
//                 role: 'Dept. of Mechanical Engg.',
//                 email: 'smg_mech@pvgcoet.ac.in',
//                 mobile: '+91 9326062418'
//             },
//             {
//                 name: 'Dr. Ganesh Vijay More',
//                 role: 'Dept. of Mechanical Engg.',
//                 email: 'gvm_mech@pvgcoet.ac.in',
//                 mobile: '+91 7387031919',
//             }
//         ].map((member, idx) => (
//             <div
//                 key={idx}
                
//                 className="
//                     border border-white/10 rounded-xl
//                     px-5 py-4
//                     hover:border-violet-400/40
//                     transition-all duration-300
//                     "
//                 >
//                 <p className="text-white font-medium">
//                 {member.name}
//                 </p>
//                 <p className="text-gray-400 text-sm mt-1">
//                 {member.role}
//                 </p>
//                 <p className="text-gray-400 text-sm mt-1">
//                 {member.email}
//                 </p>
//                 <p className="text-gray-400 text-sm mt-1">
//                 {member.mobile}
//                 </p>
//             </div>
//             ))}

//         </div>
//         </motion.div>



//         {/* ===== Organizing Committee ===== */}
//         <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5, delay: 0.15 }}
//         className="mt-20"
//         >
//         <h3 className="text-3xl font-semibold text-violet-400 mb-4 text-center">
//             Organizing Committee
//         </h3>

//         <p className="text-center text-gray-300 mb-10 max-w-3xl mx-auto">
//             Members of the Organizing Committee contributing to the planning and
//             execution of ICAETM-2026.
//         </p>

//         <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">

//             {[
//             {
//                 name: 'Prof. Radha A. Ranjekar',
//                 role: 'Dept. of Elect. Engg',
//             },
//             {
//                 name: 'Prof. Satish G. Kamble',
//                 role: 'Dept. of IT',
//             },
//             {
//                 name: 'Prof. Anand S. Najan',
//                 role: 'Dept. of E&TC Engg.',
//             },
//             {
//                 name: 'Prof. Aditya G. Dongare',
//                 role: 'Dept. of Comp. Engg.',
//             },
//             {
//                 name: 'Prof. Ravindra H. Mule',
//                 role: 'Dept. of AIDS',
//             },
//             {
//                 name: 'Dr. Kalpana S. Lodha',
//                 role: 'Dept. of MBA',
//             },
//             {
//                 name: 'Prof. Chittaranjan R. More',
//                 role: 'Dept. of Mech. Engg.',
//             },
//             {
//                 name: 'Dr. Sachin R. Suryawanshi',
//                 role: 'Dept. of Applied Science',
//             },
//             {
//                 name: 'Prof. Amit K. Redhu',
//                 role: 'Dept. of Print. Packg. Tech',
//             },
//             {
//                 name: 'Dr. Mahesh B. Naikwade',
//                 role: 'Dept. of Applied Science',
//             }


//             ].map((member, idx) => (
//             <div
//                 key={idx}
                
//                 className="
//                     border border-white/10 rounded-xl
//                     px-5 py-4
//                     hover:border-violet-400/40
//                     transition-all duration-300
//                     "
//                 >
//                 <p className="text-white font-medium">
//                 {member.name}
//                 </p>
//                 <p className="text-gray-400 text-sm mt-1">
//                 {member.role}
//                 </p>
//             </div>
//             ))}

//         </div>
//         </motion.div>



//       </div>
//     </section>
//   )
// }




'use client'

import { motion } from 'framer-motion'

export default function Committee() {
  return (
    
    <section
        id="committee"
        // className="py-20 bg-gradient-to-b from-slate-100 to-white"
        className="
            py-24
            bg-gradient-to-br
            from-sky-50
            via-indigo-50
            to-violet-50
            "

    >

      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Section Heading ===== */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-4">
          Conference Committee
        </h2>
        <p className="text-center text-slate-600 max-w-3xl mx-auto mb-16">
          ICAETM 2026 is guided by an experienced academic and administrative committee
          ensuring quality, transparency, and global standards.
        </p>

        {/* ===== Chief Patrons ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-semibold text-violet-600 mb-10 text-center">
            Chief Patrons
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Shri R. V. Borhade',
                role: 'Chairman, Pune Vidyarthi Griha, Pune',
              },
              {
                name: 'Shri S. N. Gunjal',
                role: 'Secretary, Pune Vidyarthi Griha, Pune',
              },
              {
                name: 'Shri S. P. Redekar',
                role: 'Director, PVG’s COETM, Pune',
              },
              {
                name: 'Prof. R. G. Kaduskar',
                role: 'Director, PVG’s COETM, Pune',
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="
                  bg-white
                  rounded-2xl
                  border border-slate-200
                  shadow-sm
                  hover:border-violet-400
                  hover:ring-1 hover:ring-violet-300/40
                  transition-all duration-300
                  p-6
                "
              >
                <p className="text-lg font-semibold text-slate-800">
                  {member.name}
                </p>
                <p className="text-slate-600 mt-1 text-sm">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ===== Patron ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-semibold text-violet-600 mb-10 text-center">
            Patron
          </h3>

          <div className="max-w-md mx-auto bg-white
            border border-slate-200
            rounded-2xl
            shadow-sm
            hover:shadow-md
            hover:border-violet-400
            hover:ring-1 hover:ring-violet-300/40
            transition-all duration-300 p-6 text-center">
          
            <p className="text-lg font-semibold text-slate-800">
              Dr. Manoj R. Tarambale
            </p>
            <p className="text-slate-600 mt-1 text-sm">
              Principal, PVG’s COETM, Pune
            </p>
          </div>
        </motion.div>

        {/* ===== Convenors ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-semibold text-violet-600 mb-10 text-center">
            Convenors
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Dr. Manmohan M. Bhoomkar',
                role: 'Head, Department of Mechanical Engineering',
              },
              {
                name: 'Dr. Ravindra L. Edlabadkar',
                role: 'Dean, Autonomy',
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="
                  bg-white
                  rounded-2xl
                  border border-slate-200
                  shadow-sm
                  hover:border-violet-400
                  hover:ring-1 hover:ring-violet-300/40
                  transition-all duration-300
                  p-6
                "
              >
                <p className="text-lg font-semibold text-slate-800">
                  {member.name}
                </p>
                <p className="text-slate-600 mt-1 text-sm">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </motion.div>


        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-20"
        >
        <h3 className="text-3xl font-semibold text-violet-600 mb-4 text-center">
            Coordinators
        </h3>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">

            {[
            {
                name: 'Dr. Shubhangi M. Gondane',
                role: 'Dept. of Mechanical Engg.',
                email: 'smg_mech@pvgcoet.ac.in',
                mobile: '+91 9326062418'
            },
            {
                name: 'Dr. Ganesh Vijay More',
                role: 'Dept. of Mechanical Engg.',
                email: 'gvm_mech@pvgcoet.ac.in',
                mobile: '+91 7387031919',
            }
        ].map((member, idx) => (
            <div
                key={idx}
                
                className="
                  bg-white
                  rounded-2xl
                  border border-slate-200
                  shadow-sm
                  hover:border-violet-400
                  hover:ring-1 hover:ring-violet-300/40
                  transition-all duration-300
                  p-6
                "
                >
                <p className="text-black font-medium">
                {member.name}
                </p>
                <p className="text-slate-700 text-sm mt-1">
                {member.role}
                </p>
                <p className="text-slate-700 text-sm mt-1">
                {member.email}
                </p>
                <p className="text-slate-700 text-sm mt-1">
                {member.mobile}
                </p>
            </div>
            ))}

        </div>
        </motion.div>

        {/* ===== Programme Chair ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-28 mb-20"

        >
          <h3 className="text-3xl font-semibold text-violet-600 mb-7 text-center">
            Local Advisory Committee
          </h3>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
            {[
              {name:'Dr. Dipak S. Patil',
                role:'Registrar, PVG’s COETM, Pune ',
              },

              {name:'Dr. Prasanna G. Shete',
                role:'Head, E&TC Engg.',
              },
              {name:'Prof. Mrs. Madhura P. Mahajan',
                role:'Head of Print. Packg. Tech ',
              },
              {name:'Dr. Mangesh S. Thakare',
                role:'Head of Electrical Engg.',
              },
              {name:'Dr. Surendra A. Mahajan',
                role:'Head, IT',
              },
              {name:'Prof. Mrs. Urmila M. Kalshetti',
                role:'Head, Comp. Engg.',
              },
              {name:'Dr. Mrs. Minakshi P. Atre',
                role:'Head, AIDS',
              },
              {name:'Prof. Mrs. Anjali S. Waghmare',
                role:'Head, Applied Science',
              },
              {name:'Dr. Mrs. Smita R. Temgire',
                role:'Head MBA',
              },
              {name:'Dr. Mahesh P. Potdar',
                role:'Dean Academics',
              },
              {name:'Prof. Omkar S. Pawaskar',
                role:'CEO, PVG’s COETM, Pune ',
              },
              {name:'Dr. Mrs. Ujjawala S. Thakar',
                role:'Dean NBA ',
              },
              {name:'Dr. Naresh G. Jaiswal',
                role:'Dean Faculty Development ',
              },
              {name:'Dr. Pravin G. Kulkarni',
                role:'Dean Quality Assurance ',
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="
                  bg-white
                  rounded-2xl
                  border border-slate-200
                  shadow-sm
                  hover:border-violet-400
                  hover:ring-1 hover:ring-violet-300/40
                  transition-all duration-300
                  p-6
                "
              >
                <p className="text-black-800 font-medium">{member.name}</p>
                <p className='text-slate-600 text-sm mt-1'>{member.role}</p>
              </div>
            ))}
          </div>
        </motion.div>

        



        {/* ===== Organizing Committee ===== */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-20"
        >
        <h3 className="text-3xl font-semibold text-violet-600 mb-4 text-center">
            Organizing Committee
        </h3>

        {/* <p className="text-center text-black-300 mb-10 max-w-3xl mx-auto">
            Members of the Organizing Committee contributing to the planning and
            execution of ICAETM-2026.
        </p> */}

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">

            {[
            {
                name: 'Prof. Radha A. Ranjekar',
                role: 'Dept. of Elect. Engg',
                email: 'rar_elect@pvgcoet.ac.in',
                mobile: '+91 9881901790'
            },
            {
                name: 'Prof. Satish G. Kamble',
                role: 'Dept. of IT',
                email: 'sgk_it@pvgcoet.ac.in',
                mobile: '+91 9822853296'
                
            },
            {
                name: 'Prof. Anand S. Najan',
                role: 'Dept. of E&TC Engg.',
                email: 'asn_entc@pvgcoet.ac.in',
                mobile: '+91 9028645023'
            },
            {
                name: 'Prof. Aditya G. Dongare',
                role: 'Dept. of Comp. Engg.',
                email: 'agd_comp@pvgcoet.ac.in',
                mobile: '+91 9372912735'
            },
            {
                name: 'Prof. Ravindra H. Mule',
                role: 'Dept. of AIDS',
                email: 'rhm_comp@pvgcoet.ac.in',
                mobile: '+91 9822497779'
            },
            {
                name: 'Dr. Kalpana S. Lodha',
                role: 'Dept. of MBA',
                email: 'ksl_mba@pvgcoet.ac.in',
                mobile: '+91 9922137285'
            },
            {
                name: 'Prof. Chittaranjan R. More',
                role: 'Dept. of Mech. Engg.',
                email: 'crm_mech@pvgcoet.ac.in',
                mobile: '+91 9422384226'
            },
            {
                name: 'Dr. Sachin R. Suryawanshi',
                role: 'Dept. of Applied Science',
                email: 'srs_fe@pvgcoet.ac.in',
                mobile: '+91 9763363966'
            },
            {
                name: 'Prof. Amit K. Redhu',
                role: 'Dept. of Print. Packg. Tech',
                email: 'akr_print@pvgcoet.ac.in',
                mobile: '+91 9467024324'
            },
            {
                name: 'Dr. Mahesh B. Naikwade',
                role: 'Dept. of Applied Science',
                email: 'mbn_fe@pvgcoet.ac.in',
                mobile: '+91 7775831259'
            }


            ].map((member, idx) => (
            <div
                key={idx}
                
                className="
                  bg-white
                  rounded-2xl
                  border border-slate-200
                  shadow-sm
                  hover:border-violet-400
                  hover:ring-1 hover:ring-violet-300/40
                  transition-all duration-300
                  p-6
                "
                >
                <p className="text-black font-medium">
                {member.name}
                </p>
                <p className="text-slate-600 text-sm mt-1">
                {member.role}
                </p>
                <p className="text-slate-600 text-sm mt-1">
                {member.email}
                </p>
                <p className="text-slate-600 text-sm mt-1">
                {member.mobile}
                
                </p>
            </div>
            ))}

        </div>
        </motion.div>

      </div>
    </section>
  )
}
