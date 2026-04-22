import React from 'react';
import { Target } from 'lucide-react';

export default function Skills() {
  const skills = [
    { name: "SAP", level: 85, color: "#9932CC" },
    { name: "Tally", level: 90, color: "#4B0082" },
    { 
      name: "Advanced MS Excel", 
      level: 95, 
      color: "#DA70D6",
      subskills: ["Pivot Tables", "VLOOKUP", "Dashboards"]
    }
  ];

  return (
    <section className="py-20 px-8 md:px-16 relative z-10" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center space-x-4 mb-12">
          <Target className="w-8 h-8 text-[#9932CC]" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Growth Rings</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="glass p-8 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              {/* Ring Visualization (Simulated) */}
              <div className="relative w-32 h-32 mb-6 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle 
                    cx="50" cy="50" r="40" 
                    fill="transparent" 
                    stroke="rgba(255,255,255,0.1)" 
                    strokeWidth="8" 
                  />
                  <circle 
                    cx="50" cy="50" r="40" 
                    fill="transparent" 
                    stroke={skill.color} 
                    strokeWidth="8" 
                    strokeDasharray={`${skill.level * 2.51} 251.2`} 
                    strokeLinecap="round" 
                  />
                </svg>
                <div className="absolute text-xl font-bold text-white">
                  {skill.level}%
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{skill.name}</h3>
              
              {skill.subskills && (
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {skill.subskills.map((sub, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-200">
                      {sub}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
