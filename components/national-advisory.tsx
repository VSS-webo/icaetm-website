


'use client'
import React from 'react'

export default function NationalAdvisorySection() {
  const nationalAdvisoryMembers = [
    { name: 'Dr. Dattatray Jadhav', affiliation: 'Directorate of Technical Education, Pune, Maharashtra' },
    { name: 'Dr. Mukul Sutaone', affiliation: 'IIIT, Allahabad' },
    { name: 'Dr. Aditya S. Abhyankar', affiliation: 'Department of Technology, SPPU, Pune, Maharashtra' },
    { name: 'Dr. Vikram M. Gadre', affiliation: 'IIT Mumbai, Maharashtra' },
    { name: 'Dr. Surbhi Jain', affiliation: 'Dept. of Management Science, SPPU, Pune, Maharashtra' },
    { name: 'Dr. Anupa Kumbhar', affiliation: 'Dept. of Chemistry, SPPU, Pune, Maharashtra' },
    { name: 'Dr. Yogesh Bhalerao', affiliation: 'MIT Academy of Engineering, Pune, Maharashtra' },
    { name: 'Dr. Rakesh Mote', affiliation: 'IIT Bombay, Maharashtra' },
    { name: 'Dr. D. S. Patil', affiliation: 'IIT Bombay, Maharashtra' },
    { name: 'Dr. Yogesh Hote', affiliation: 'IIT Roorkee, Uttarakhand' },
    { name: 'Dr. Amod Umarikar', affiliation: 'IIT Indore, Madhya Pradesh' },
    { name: 'Dr. Ram B. Pachori', affiliation: 'IIT Indore, Madhya Pradesh' },
    { name: 'Dr. Dharmendra Kumar Dheer', affiliation: 'NIT Patna, Bihar' },
    { name: 'Dr. Jitendra V. Tembhurne', affiliation: 'IIIT, Nagpur, Maharashtra' },
    { name: 'Dr. Baburao Guduri', affiliation:'IIP, Mumbai, Maharashtra'},
    { name: 'Dr. Pramod M. Podoale', affiliation: 'VNIT, Nagpur, Maharashtra' },
    {name: 'Dr. Datta Kute', affiliation:'Manager, SPPU Press, Pune, Maharashtra'},
    {name: 'Dr. A. Arulmozhi',affiliation:'Avinashilingam University, Coimbatore, Tamil Nadu'},
    {name : 'Dr. Rituparna Datta',affiliation:' Cognizant AI Lab, Cognizant, Bangalore, Karnataka'},
    { name: 'Dr. N. V. Suresh', affiliation: 'ASET Institute, Chennai, Tamil Nadu' },
    { name: 'Dr. Kuldeep Saxena', affiliation: 'Galgotias University, Uttar Pradesh' },
    {name: 'Dr. Sanjeev Kumar',affiliation:'Guru Jambheshwar University S&T, Hisar, Haryana'},
    { name: 'Dr. Y. V. Hanumantha Rao', affiliation: 'QIS College of Engineering, Andhra Pradesh' },
    { name: 'Dr. B. Nageshwar Rao', affiliation: 'KL University, Andhra Pradesh' },
    { name: 'Dr. P. Issac Prasad', affiliation: 'Mohan Babu University, Andhra Pradesh' },
    { name: 'Dr. Samarjeet Borah', affiliation: 'Sikkim Manipal Institute of Technology, Sikkim' },
    { name: 'Dr. Preetam Suman', affiliation: 'VIT Bhopal University, Madhya Pradesh' },
    { name: 'Dr. Nilanjan Dey', affiliation: 'Techno International New Town, Kolkata, West Bengal' },
    { name: 'Dr. Chandrahans Chavan', affiliation: 'Jamnalal Bajaj Institute of Management Studies, Mumbai, Maharashtra' },
    { name: 'Dr. Satishchandra Ogale', affiliation: 'IISER, Pune, Maharashtra' },
    { name: 'Dr. D. S. Watvisave', affiliation: 'Cummins College of Engineering, Pune, Maharashtra' },
    { name: 'Dr. Anniruddha Gadhikar', affiliation: 'Govt. College, Karad, Maharashtra' },
    {name:'Dr Rajendrakumar Anayath',affiliation:'Maharshi Valmiki Sanskrit University, Kaithal , Haryana'},
    { name: 'Updating…', affiliation: '' },
  ]

  return (
    <section
      id="natl-advisory"
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
          National Advisory Committee
        </h2>

        <p className="text-center text-slate-600 max-w-3xl mx-auto mb-14 text-base md:text-lg">
          Esteemed academicians and industry experts guiding the vision and
          academic quality of ICAETM 2026.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {nationalAdvisoryMembers.map((member, idx) => (
            <div
              key={idx}
              className="
                bg-white/80 backdrop-blur
                border border-slate-200
                rounded-2xl
                p-5
                shadow-md
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
              "
            >
              <p className="text-slate-800 font-semibold text-base">
                {member.name}
              </p>

              {member.affiliation && (
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  {member.affiliation}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
