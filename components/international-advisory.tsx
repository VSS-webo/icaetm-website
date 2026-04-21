'use client'
import React from 'react'

export default function AdvisorySection() {
  const advisoryMembers = [
    { name: 'Dr. Manoj Mugale', affiliation: 'Eastern Kentucky University, Richmond, Kentucky, USA' },
    { name: 'Dr. Manoj A. Joshi', affiliation: 'Advanced CMOS Technology Developments, TSMC, California, USA' },
    { name: 'Dr. Ajay P. Singh', affiliation: 'Ames National Laboratory, Iowa, USA' },
    { name: 'Dr. Vinod Kumar Shukla', affiliation: 'Amity University Dubai, UAE' },
    { name: 'Dr. Vijay Varade', affiliation: 'Amity University, Dubai, UAE' },
    { name: 'Dr. Bhajan L. Rahanu', affiliation: 'Universiti Teknologi Petronas, Malaysia' },
    { name: 'Dr. Norhashila Hashim', affiliation: 'Universiti Putra Malaysia' },
    { name: 'Dr. Chan Mieow Kee', affiliation: 'SEGi University, Malaysia' },
    { name: 'Dr. Apurav Koyande', affiliation: 'Universiti Teknologi Petronas, Malaysia' },
    { name: 'Dr. Zuhaina Zakaria', affiliation: 'MARA University of Technology, Malaysia' },
    { name: 'Dr. Arvind R. Singh', affiliation: 'Hanjiang Normal University, Hubei Shiyan, China' },
    { name: 'Dr. Palanivel Rathinasabapathi Velmurugan', affiliation: 'Berlin School of Business and Innovation, Germany' },
    { name: 'Dr. Juntakan Taweekun', affiliation: 'Prince of Songkla University (PSU), Thailand' },
    { name: 'Dr. Parmal Singh Solanki', affiliation: 'University of Technology and Applied Sciences, Oman' },
    { name: 'Dr. Nitin S. Goje', affiliation: 'Webster University, Tashkent, Uzbekistan' },
    { name: 'Dr. Mebrahtom Gabresemati', affiliation: 'Gachon University, South Korea' },
    { name: 'Dr. Nishith B. Desai', affiliation: 'Technical University of Denmark, Denmark' },
    { name: 'Updating...', affiliation: '' },
  ]

  return (
    <section
      id="intl-advisory"
      className="
        py-20
        bg-gradient-to-br
        from-sky-50 via-indigo-50 to-violet-50
      "
    >
      <div className="max-w-6xl mx-auto px-6">

        
        <h2 className="
          text-4xl md:text-5xl
          font-semibold
          text-center
          text-slate-800
          mb-6
        ">
          
          International Advisory Committee
        </h2>

        <p className="  
          text-center
          text-slate-600
          max-w-3xl
          mx-auto
          mb-14
          text-base md:text-lg
        ">
          Distinguished academicians and industry experts providing strategic
          guidance and global perspective to ICAETM 2026.
        </p>

        
        <div className="
          bg-white/70
          backdrop-blur-md
          border border-slate-200
          rounded-3xl
          p-8 md:p-10
          shadow-xl
        ">
          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          ">
            {advisoryMembers.map((member, idx) => (
              <div
                key={idx}
                className="
                  rounded-2xl
                  border border-slate-200
                  bg-white
                  p-5
                  transition
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <p className="
                  text-slate-800
                  font-bold
                  text-lg
                ">
                  {member.name}
                </p>

                {member.affiliation && (
                  <p className="
                    mt-2
                    text-slate-600
                    text-sm
                    leading-relaxed
                  ">
                    {member.affiliation}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
