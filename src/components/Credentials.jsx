import React from 'react';
import { Award, GraduationCap } from 'lucide-react';

export default function Credentials() {
  return (
    <section className="py-20 px-8 md:px-16 relative z-10" id="credentials">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center space-x-4 mb-12">
          <Award className="w-8 h-8 text-[#9932CC]" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Credentials & Education</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#DA70D6] flex items-center gap-2">
              <GraduationCap className="w-6 h-6" /> Academic Background
            </h3>
            
            <div className="glass p-6 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#9932CC]/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150" />
              <h4 className="text-xl font-bold text-white mb-1">Master's in Finance</h4>
              <p className="text-gray-300">Galgotias University</p>
            </div>

            <div className="glass p-6 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#DA70D6]/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150" />
              <h4 className="text-xl font-bold text-white mb-1">Bachelor's Degree</h4>
              <p className="text-gray-300">Delhi University</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#DA70D6] flex items-center gap-2">
              <Award className="w-6 h-6" /> Certifications
            </h3>
            
            <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#9932CC]/20 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150" />
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Finance Literacy Quiz</h4>
                  <p className="text-gray-300 font-medium">NISM (National Institute of Securities Markets)</p>
                  <p className="text-sm text-gray-400 mt-4">Certified for foundational knowledge in finance, markets, and investment strategies.</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#9932CC]/20 flex items-center justify-center shrink-0 border border-[#9932CC]/50">
                  <Award className="w-6 h-6 text-[#DA70D6]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
