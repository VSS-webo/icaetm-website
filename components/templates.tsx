"use client"

import React from "react"

const Templates = () => {
  return (
    <section
      id="template"
      className="py-20 bg-gradient-to-br from-sky-50 via-indigo-50 to-violet-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-black-800">
            Templates
          </h2>
          <p className="text-slate-600 mt-4 text-lg">
            
          </p>
        </div>

        
        <div className="grid md:grid-cols-1 gap-8">

          
          <a
            href="/templates/Template_for_Paper.docx"
            download
            className="bg-white rounded-2xl shadow-md p-8 text-center 
                       hover:shadow-xl transition duration-300 border"
          >
            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              Author Paper Template
            </h3>
            <p className="text-slate-600 mb-4">
              Microsoft Word format for full paper submission.
            </p>
            <span className="inline-block mt-2 text-blue-600 font-medium">
              Click to Download
            </span>
          </a>

          

        </div>
      </div>
    </section>
  )
}

export default Templates