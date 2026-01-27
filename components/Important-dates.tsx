// 'use client'
// import { motion } from 'framer-motion'

// export default function ImportantDates() {
//   return (
//     <section id="important-dates" className="py-20 bg-slate-950">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="mb-16 text-center"
//         >
//           <h2 className="text-4xl md:text-5xl font-normal text-white mb-4">
//             Important Dates
//           </h2>
//           <p className="text-gray-300 max-w-2xl mx-auto">
//             Please note the following key deadlines for ICAETM 2026.
//           </p>
//         </motion.div>

//         {/* Timeline */}
//         <div className="max-w-3xl mx-auto relative">

//           {/* Vertical line */}
//           <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />

//           {[
//             { title: 'Last Date for Full Paper Submission', date: '15 April 2026' },
//             { title: 'Intimation of Acceptance', date: '15 May 2026' },
//             { title: 'Camera-Ready Paper Submission', date: '31 May 2026' },
//             { title: 'Last Date for Registration', date: '15 June 2026' },
//             { title: 'Conference Dates', date: 'July 2026' },
//           ].map((item, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: idx * 0.05 }}
//               className="relative flex gap-6 mb-8"
//             >
//               {/* Point */}
//               <div className="w-8 flex justify-center">
//                 <span className="w-3 h-3 rounded-full bg-violet-400 mt-2" />
//               </div>

//               {/* Content */}
//               <div className="bg-slate-800/70 backdrop-blur
//                               border border-white/10 rounded-xl
//                               px-5 py-4 flex-1">
//                 <p className="text-white font-medium">
//                   {item.title}
//                 </p>
//                 <p className="text-gray-300 text-sm mt-1">
//                   {item.date}
//                 </p>
//               </div>
//             </motion.div>
//           ))}

//         </div>
//       </div>
//     </section>
//   )
// }



'use client'

import { CalendarDays } from 'lucide-react'

const dates = [
  {
    title: 'Paper Submission Deadline',
    date: 'DD Month 2026',
  },
  {
    title: 'Notification of Acceptance',
    date: 'DD Month 2026',
  },
  {
    title: 'Camera Ready Paper Submission',
    date: 'DD Month 2026',
  },
  {
    title: 'Early Bird Registration Deadline',
    date: 'DD Month 2026',
  },
  {
    title: 'Conference Dates',
    date: 'DD–DD Month 2026',
  },
]

export default function ImportantDates() {
  return (
    <section
      id="important-dates"
      className="
        py-20
        bg-gradient-to-br from-sky-50 via-indigo-50 to-violet-50
      "
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <h2 className="
          text-4xl md:text-5xl font-semibold
          text-center mb-6
          text-slate-800
        ">
          Important Dates
        </h2>

        <p className="
          text-center text-slate-600
          mb-14 max-w-3xl mx-auto
          text-base md:text-lg
        ">
          Authors are requested to adhere to the following deadlines.
          All dates are subject to change with prior notification.
        </p>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="
            absolute left-5 top-0 h-full
            w-px bg-gradient-to-b
            from-indigo-300 via-indigo-200 to-transparent
          " />

          <div className="space-y-8">
            {dates.map((item, index) => (
              <div
                key={index}
                className="
                  relative flex gap-6
                  group
                "
              >
                {/* Dot */}
                <div className="
                  relative z-10
                  w-10 h-10
                  rounded-full
                  bg-white
                  border-2 border-indigo-400
                  flex items-center justify-center
                  shadow-md
                  group-hover:scale-110
                  transition
                ">
                  <CalendarDays className="w-5 h-5 text-indigo-500" />
                </div>

                {/* Card */}
                <div
                  className="
                    flex-1
                    bg-white/70 backdrop-blur
                    border border-slate-200
                    rounded-2xl
                    p-6 md:p-7
                    shadow-lg
                    hover:shadow-xl
                    transition
                  "
                >
                  <h3 className="
                    text-lg md:text-xl
                    font-medium
                    text-slate-800
                  ">
                    {item.title}
                  </h3>

                  <p className="
                    mt-2
                    text-indigo-600
                    font-semibold
                    text-sm md:text-base
                  ">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
