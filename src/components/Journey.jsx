import React from 'react';
import { Briefcase, TrendingUp, BarChart3 } from 'lucide-react';

export default function Journey() {
  const experiences = [
    {
      role: "Account Executive",
      company: "QaBunch",
      duration: "Dec 2023 – Apr 2026",
      achievements: [
        {
          text: "Improved reporting accuracy by 25%",
          icon: <BarChart3 className="w-5 h-5 text-[#9932CC]" />
        },
        {
          text: "Enhanced performance monitoring by 30%",
          icon: <TrendingUp className="w-5 h-5 text-[#9932CC]" />
        }
      ]
    }
  ];

  return (
    <section className="py-20 px-8 md:px-16 relative z-10" id="journey">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-12">
          <Briefcase className="w-8 h-8 text-[#9932CC]" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Professional Journey</h2>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#9932CC] before:via-[#9932CC]/50 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#2F4F4F] bg-[#9932CC] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow" />
              
              <div className="glass w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl">
                <div className="flex flex-col space-y-1 mb-4">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-[#9932CC] font-semibold">{exp.company}</span>
                  <span className="text-sm text-gray-300">{exp.duration}</span>
                </div>
                
                <ul className="space-y-3">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="mt-1 shrink-0">{item.icon}</div>
                      <span className="text-gray-200">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
