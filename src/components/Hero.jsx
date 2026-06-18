
import { ArrowRight, Calendar, Heart, ShieldCheck, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImg from '../assets/rehab_essence_hero.png';

export default function Hero({ onExplorePaediatric, onExploreAdult, onBookAssessment }) {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#B3E5FC]/10 via-white to-white py-12 md:py-24">
      {/* Background blobs for premium depth */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#00A8A8]/5 blur-3xl" />
      <div className="absolute bottom-10 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-[#0046A5]/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and description */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col text-left space-y-6"
          >
            {/* Small tag */}
            <div className="inline-flex items-center gap-2 self-start bg-[#00A8A8]/10 text-[#00A8A8] font-sans font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Compassionate Care</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0046A5] leading-tight">
                From Ability <br />
                <span className="text-[#00A8A8] relative">
                  to Possibility
                  {/* Decorative underline */}
                  <svg className="absolute left-0 bottom-[-8px] w-full h-2 text-[#B3E5FC]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,7 Q50,0 100,7" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </h2>
              <p className="font-sans font-bold text-base sm:text-lg text-gray-500 uppercase tracking-widest pt-2">
                Occupational Therapy & Neurorehabilitation
              </p>
            </div>

            {/* Subtext */}
            <div className="space-y-4">
              <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed">
                At Rehab Essence, we help children and adults reconnect with their potential — through science, compassion, and mindful rehabilitation.
              </p>
              <p className="font-sans text-sm sm:text-base text-gray-500 leading-relaxed border-l-2 border-[#00A8A8] pl-4 italic">
                Our therapy goes beyond improving skills — it's about rebuilding confidence, participation, and purpose — in body, mind, and daily life.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={onBookAssessment}
                className="inline-flex items-center justify-center gap-2 bg-[#0046A5] hover:bg-[#003680] text-white font-sans font-extrabold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                <span>Book an Assessment</span>
              </button>
              
              <button
                onClick={onExplorePaediatric}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#00A8A8] hover:bg-[#00A8A8]/5 text-[#00A8A8] font-sans font-bold px-6 py-3.5 rounded-xl transition-all duration-200"
              >
                <span>Paediatric Therapy</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreAdult}
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-600 font-sans font-bold px-6 py-3.5 rounded-xl transition-all duration-200"
              >
                <span>Adult Rehab</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Micro details */}
            <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <ShieldCheck className="w-5 h-5 text-[#00A8A8]" />
                <span className="font-semibold">Evidence-Based Therapy</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Award className="w-5 h-5 text-[#0046A5]" />
                <span className="font-semibold">Led by Senior OT</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Concept */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Custom styled shadow ring */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#00A8A8] to-[#0046A5] opacity-20 blur-xl" />
            
            {/* Hero Image */}
            <div className="relative overflow-hidden rounded-3xl bg-white p-3 shadow-2xl border border-gray-100 max-w-full lg:max-w-lg">
              <img 
                src={heroImg} 
                alt="Rehab Essence modern clinic and therapy space" 
                className="rounded-2xl object-cover w-full h-[320px] sm:h-[400px] object-center"
              />

              {/* Floating glassmorphic card overlays */}
              <div className="absolute top-8 -left-6 bg-white/90 backdrop-blur-md border border-gray-100/50 p-4 rounded-2xl shadow-lg flex items-center gap-3 animate-bounce-slow max-w-[180px] hidden sm:flex">
                <div className="bg-[#B3E5FC] p-2.5 rounded-xl text-[#0046A5]">
                  <Heart className="w-5 h-5 fill-current" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400 font-semibold uppercase">Patients</p>
                  <p className="text-sm font-extrabold text-gray-700">All Ages Welcome</p>
                </div>
              </div>

              <div className="absolute bottom-8 -right-6 bg-white/90 backdrop-blur-md border border-gray-100/50 p-4 rounded-2xl shadow-lg flex items-center gap-3 animate-float max-w-[180px] hidden sm:flex">
                <div className="bg-[#00A8A8]/10 p-2.5 rounded-xl text-[#00A8A8]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400 font-semibold uppercase">Care Model</p>
                  <p className="text-sm font-extrabold text-gray-700">1-on-1 Focused</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
