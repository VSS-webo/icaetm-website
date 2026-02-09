'use client'
import React from "react"

export default function Acknowledge(){
    return (
        <section
        id="acknowledgement"
        className="py-28 bg-gradient-to-br from-sky-50 via-indigo-50 to-violet-50"
        >
      <div className="max-w-7xl mx-auto px-6 space-y-28">

        
          <h3 className= "text-4xl md:text-5xl font-semibold text-center mb-5 text-slate-800">
            Acknowledgement
          </h3>

          <p className="text-slate-600 text-lg leading-relaxed">
            The Microsoft CMT service was used for managing the peer-reviewing process for this conference.
            This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.

          </p>
        </div>
        </section>

    )
}