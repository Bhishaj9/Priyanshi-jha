import React from 'react';
import { Presentation } from 'lucide-react';

export default function Projects() {
  return (
    <section className="py-20 px-8 md:px-16 relative z-10" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center space-x-4 mb-12">
          <Presentation className="w-8 h-8 text-[#9932CC]" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Project Showcase</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="glass group rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(153,50,204,0.3)] transition-all duration-300">
            <div className="h-48 bg-gradient-to-br from-[#9932CC]/40 to-[#2F4F4F] relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:scale-110 transition-transform duration-500">
                {/* Abstract shape representing comparison */}
                <div className="w-20 h-20 border-4 border-white rounded-lg rotate-12 -mr-6" />
                <div className="w-20 h-20 border-4 border-[#9932CC] rounded-full -ml-6 z-10 bg-[#2F4F4F]/50" />
              </div>
            </div>
            <div className="p-8">
              <div className="text-sm text-[#DA70D6] font-semibold mb-2">Jan 2026</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Comparative Financial Analysis
              </h3>
              <p className="text-gray-300 mb-6">
                A comprehensive evaluation and comparison of the financial health, performance, and market standing of Tata Motors vs. Mahindra & Mahindra (M&M).
              </p>
              <button className="px-6 py-2 rounded-full border border-[#9932CC] text-[#DA70D6] hover:bg-[#9932CC] hover:text-white transition-colors">
                View Analysis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
