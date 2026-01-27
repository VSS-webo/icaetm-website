// export default function Speakers(){
//   const speakers=['Dr. A. Kumar','Prof. J. Smith','Dr. L. Chen','Dr. M. Rao']
//   return(
//     <section id="speakers" className="py-20 bg-slate-900">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl font-semibold mb-10">Keynote Speakers</h2>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           {speakers.map((s,i)=>(
//             <div key={i} className="p-6 rounded-2xl bg-slate-800 hover:bg-slate-700 transition">
//               <div className="h-40 bg-slate-700 rounded-xl mb-4" />
//               <h3 className="text-xl font-medium">{s}</h3>
//               <p className="text-sm text-slate-400">International Speaker</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


'use client'

export default function Speakers() {
  const speakers = [
    { name: 'Dr. A. Kumar', role: 'International Keynote Speaker' },
    { name: 'Prof. J. Smith', role: 'Distinguished Researcher' },
    { name: 'Dr. L. Chen', role: 'IEEE Fellow & Speaker' },
    { name: 'Dr. M. Rao', role: 'Industry & Academia Expert' },
  ]

  return (
    <section
      id="speakers"
      className="
        py-20
        bg-gradient-to-br
        from-sky-50
        via-indigo-50
        to-violet-50
      "
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-slate-800 mb-4">
          Keynote Speakers
        </h2>

        <p className="text-center text-slate-600 max-w-3xl mx-auto mb-14 text-base md:text-lg">
          Renowned academicians and industry leaders delivering keynote
          addresses at ICAETM 2026.
        </p>

        {/* Speaker cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, i) => (
            <div
              key={i}
              className="
                group
                bg-white/80 backdrop-blur
                border border-slate-200
                rounded-3xl
                p-6
                shadow-md
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
              "
            >
              {/* Avatar placeholder */}
              <div className="flex justify-center mb-6">
                <div
                  className="
                    w-28 h-28
                    rounded-full
                    bg-gradient-to-br
                    from-indigo-200
                    via-sky-200
                    to-violet-200
                    flex items-center justify-center
                    text-indigo-700
                    text-2xl font-semibold
                    shadow-inner
                  "

                >
                  {speaker.name.charAt(0)}
                </div>
              </div>

              {/* Speaker info */}
              <h3 className="text-lg font-semibold text-slate-800 text-center">
                {speaker.name}
              </h3>

              <p className="text-sm text-indigo-600 text-center mt-2 font-medium">
                {speaker.role}
              </p>
            </div>
            
          ))}
        </div>

      </div>
    </section>
  )
}

