'use client'

export default function Register() {
  return (
    <section id="register" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Paper Submission & Registration
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          Authors are required to submit papers and complete registration
          through the official Microsoft CMT conference management system.
        </p>

        <a
          href="https://cmt3.research.microsoft.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center
                     px-8 py-4 rounded-full
                     bg-violet-600 hover:bg-violet-500
                     text-white font-semibold
                     transition-all duration-300
                     shadow-lg hover:shadow-xl"
        >
          Register / Login on CMT
        </a>

      </div>
    </section>
  )
}
