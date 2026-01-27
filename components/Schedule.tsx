// // export default function Schedule(){
// //   return(
// //     <section id="schedule" className="py-20 max-w-6xl mx-auto px-6">
// //       <h2 className="text-4xl font-semibold mb-8">Conference Schedule</h2>
// //       <ul className="space-y-4 text-slate-300">
// //         <li>Day 1 – Inauguration & Keynotes</li>
// //         <li>Day 2 – Technical Sessions & Workshops</li>
// //         <li>Day 3 – Panels & Closing Ceremony</li>
// //       </ul>
// //     </section>
// //   )
// // }


// type EventItem={
//   time:string
//   title:string
// }

// type DaySchedule={
//   day:string
//   date:string
//   events:EventItem[]
// }

// export default function Schedule(){
//   const days:DaySchedule[]=[
//     {
//       day:'Day 1',
//       date:'March 18, 2026',
//       events:[
//         {time:'09:00 AM',title:'Inauguration Ceremony'},
//         {time:'10:30 AM',title:'Keynote Address'},
//         {time:'01:00 PM',title:'Lunch Break'},
//         {time:'02:00 PM',title:'Technical Sessions'},
//       ],
//     },
//     {
//       day:'Day 2',
//       date:'March 19, 2026',
//       events:[
//         {time:'09:30 AM',title:'Keynote Talk'},
//         {time:'11:00 AM',title:'Paper Presentations'},
//         {time:'01:00 PM',title:'Lunch Break'},
//         {time:'02:30 PM',title:'Workshops'},
//       ],
//     },
//     {
//       day:'Day 3',
//       date:'March 20, 2026',
//       events:[
//         {time:'10:00 AM',title:'Panel Discussion'},
//         {time:'12:30 PM',title:'Valedictory Function'},
//       ],
//     },
//   ]

//   return(
//     <section
//       id="schedule"
//       className="scroll-mt-20 py-20 bg-slate-950"
//     >
//       <div className="max-w-5xl mx-auto px-6">
//         <h2 className="text-4xl font-semibold mb-12 text-center">
//           Conference Schedule
//         </h2>

//         <div className="space-y-14">
//           {days.map((day,i)=>(
//             <div key={i}>
//               <h3 className="text-2xl font-medium mb-1">
//                 {day.day}
//               </h3>
//               <p className="text-slate-400 mb-6">
//                 {day.date}
//               </p>

//               <div className="relative border-l border-slate-700 pl-8 space-y-6">
//                 {day.events.map((event,j)=>(
//                   <div
//                     key={j}
//                     className="relative"
//                   >
//                     <span className="absolute -left-[41px] top-1 w-3 h-3 rounded-full bg-indigo-500" />
//                     <div className="bg-slate-900 rounded-xl p-5 hover:bg-slate-800 transition">
//                       <p className="text-sm text-slate-400">
//                         {event.time}
//                       </p>
//                       <p className="text-lg font-medium">
//                         {event.title}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }



'use client'

type EventItem = {
  time: string
  title: string
}

type DaySchedule = {
  day: string
  date: string
  events: EventItem[]
}

export default function Schedule() {
  const days: DaySchedule[] = [
    {
      day: 'Day 1',
      date: 'March 18, 2026',
      events: [
        { time: '09:00 AM', title: 'Inauguration Ceremony' },
        { time: '10:30 AM', title: 'Keynote Address' },
        { time: '01:00 PM', title: 'Lunch Break' },
        { time: '02:00 PM', title: 'Technical Sessions' },
      ],
    },
    {
      day: 'Day 2',
      date: 'March 19, 2026',
      events: [
        { time: '09:30 AM', title: 'Keynote Talk' },
        { time: '11:00 AM', title: 'Paper Presentations' },
        { time: '01:00 PM', title: 'Lunch Break' },
        { time: '02:30 PM', title: 'Workshops' },
      ],
    },
    {
      day: 'Day 3',
      date: 'March 20, 2026',
      events: [
        { time: '10:00 AM', title: 'Panel Discussion' },
        { time: '12:30 PM', title: 'Valedictory Function' },
      ],
    },
  ]

  return (
    <section
      id="schedule"
      className="
        scroll-mt-20 py-20
        bg-gradient-to-b from-sky-50 via-white to-indigo-50
      "
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-14 text-slate-900">
          Conference Schedule
        </h2>

        <div className="space-y-16">
          {days.map((day, i) => (
            <div key={i} className="relative">

              {/* Day Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-indigo-600">
                  {day.day}
                </h3>
                <p className="text-slate-500">{day.date}</p>
              </div>

              {/* Timeline */}
              <div className="relative pl-10 space-y-6">

                {/* Vertical line */}
                <span
                  className="
                    absolute left-3 top-0 bottom-0
                    w-px bg-gradient-to-b
                    from-indigo-300 via-indigo-400 to-transparent
                  "
                />

                {day.events.map((event, j) => (
                  <div key={j} className="relative group">

                    {/* Timeline dot */}
                    <span
                      className="
                        absolute left-[6px] top-5
                        w-3 h-3 rounded-full
                        bg-indigo-500
                        ring-4 ring-indigo-200
                        transition-all
                        group-hover:scale-125
                      "
                    />

                    {/* Event card */}
                    <div
                      className="
                        bg-white rounded-xl p-5
                        border border-slate-200
                        shadow-sm
                        hover:shadow-md hover:border-indigo-300
                        transition-all duration-300
                      "
                    >
                      <p className="text-sm text-slate-500">
                        {event.time}
                      </p>
                      <p className="text-lg font-medium text-slate-800">
                        {event.title}
                      </p>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
