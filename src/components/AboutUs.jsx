
import { Target, Compass, Award, Star, BookOpen, GraduationCap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import founderPhoto from '../assets/pallavi_bhatt.jpg';

export default function AboutUs() {
  const founderHighlights = [
    'Specializes in Neurological Rehabilitation, Paediatric Sensory Integration, and Mental Health Recovery.',
    'Former Consultant at Soukhya, Goa (2024).',
    'Resource Person for national seminars by MSJE (GOI), NISD, and CSSC-RRTC.',
    'Delivered lectures on Dementia Care, Sensory Integration, and Executive Function Disorders.',
    'Certified Fall Prevention Specialist (2023).',
    'President, ICG Toastmasters Club, Goa (2025 term).',
    'Passionate advocate for occupational balance, emotional regulation, and functional independence.'
  ];

  const teamMembers = [
    {
      name: 'Suvidha Gaunekar',
      role: 'Occupational Therapist',
      bio: 'Dedicated therapist specializing in paediatric neurodevelopmental therapy and sensory regulation programs, bringing warmth and structured play to child development.',
    },
    {
      name: 'Urja Vernekar',
      role: 'Occupational Therapist',
      bio: 'Expert in adult physical rehabilitation, hand therapy, and cognitive retraining, helping individuals restore motor control and regain independence post-injury.',
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Row 1: Our Story, Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Our Story */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 bg-[#0046A5]/10 text-[#0046A5] font-sans font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <span>Our Roots</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0046A5] tracking-tight">
              Our Story
            </h2>
            <div className="h-1 w-12 bg-[#00A8A8] rounded-full" />
            <p className="font-sans text-gray-600 text-base sm:text-lg leading-relaxed">
              Rehab Essence was born from the belief that true rehabilitation begins when therapy touches both the <strong>body</strong> and the <strong>essence</strong> of the individual.
            </p>
            <p className="font-sans text-gray-600 text-base sm:text-lg leading-relaxed">
              Founded by <strong>Dr. Pallavi Bhat (MOT - Neurorehabilitation) in 2022</strong>, the clinic embodies her vision of transforming therapy into a journey of connection, awareness, and empowerment. Through evidence-based practices and mindfulness-based models, we create spaces where healing meets daily purpose.
            </p>
          </motion.div>

          {/* Right: Mission & Vision Cards */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full"
          >
            {/* Mission Card */}
            <div className="bg-[#F5F7FA] border border-gray-100 rounded-3xl p-8 flex flex-col justify-start text-left shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#00A8A8]/10 p-3.5 rounded-2xl text-[#00A8A8] self-start mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-lg text-gray-800 mb-2">Our Mission</h3>
              <p className="font-sans text-sm text-gray-600 leading-relaxed">
                To empower individuals to move, think, and live independently — turning every ability into a new possibility through holistic rehabilitation.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-[#F5F7FA] border border-gray-100 rounded-3xl p-8 flex flex-col justify-start text-left shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#0046A5]/10 p-3.5 rounded-2xl text-[#0046A5] self-start mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-lg text-gray-800 mb-2">Our Vision</h3>
              <p className="font-sans text-sm text-gray-600 leading-relaxed">
                A compassionate world where therapy restores function, dignity, and balance — in body, mind, and daily life.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Meet the Founder */}
        <div className="border-t border-gray-100 pt-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading font-extrabold text-3xl text-[#0046A5] tracking-tight">
              Meet the Founder
            </h2>
            <div className="h-1 w-12 bg-[#00A8A8] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch text-left">
            {/* Left: Premium Profile Photo Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 relative group overflow-hidden rounded-3xl shadow-xl aspect-[4/5] lg:aspect-auto lg:h-full min-h-[380px] bg-gray-50 border border-gray-100"
            >
              <img 
                src={founderPhoto} 
                alt="Dr. Pallavi Bhat" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent flex flex-col justify-end p-6">
                <h3 className="font-heading font-extrabold text-2xl text-white">Dr. Pallavi Bhat</h3>
                <p className="font-sans text-xs text-[#B3E5FC] font-semibold uppercase tracking-wider mt-0.5">
                  Founder & Director
                </p>
                <p className="font-sans text-[10px] text-white/60 font-semibold tracking-wide mt-0.5">
                  MOT - Neurorehabilitation
                </p>
              </div>
            </motion.div>

            {/* Middle: Bio Card Layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-4 bg-gradient-to-br from-[#0046A5] to-[#00A8A8] text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between"
            >
              {/* background graphic */}
              <div className="absolute right-0 bottom-0 opacity-10 translate-y-10 translate-x-10">
                <Award className="w-60 h-60" />
              </div>

              <div className="relative space-y-6">
                <div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl">Dr. Pallavi Bhat</h3>
                  <p className="font-sans font-bold text-sm uppercase tracking-wider text-[#B3E5FC] mt-1">
                    Occupational Therapist
                  </p>
                  <p className="text-xs text-white/70 font-semibold mt-1">
                    Established Rehab Essence in 2022
                  </p>
                </div>
                
                <div className="h-[1px] bg-white/20 w-full" />

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-[#B3E5FC] shrink-0" />
                    <p className="text-sm font-medium">MOT (Neurorehabilitation)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-[#B3E5FC] shrink-0" />
                    <p className="text-sm font-medium">10+ Years Professional Experience</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-[#B3E5FC] shrink-0" />
                    <p className="text-sm font-medium">Specialized in Neuro & Paediatric care</p>
                  </div>
                </div>

                <div className="bg-white/10 rounded-2xl p-4 border border-white/5">
                  <p className="text-xs sm:text-sm italic leading-relaxed text-white/90">
                    "Rehab is not just repeating exercises; it is about rebuilding connection, awareness, and empowerment to let every client thrive in their community."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Detailed CV list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 space-y-4 flex flex-col justify-center"
            >
              <h4 className="font-heading font-extrabold text-lg text-gray-800 uppercase tracking-wide">
                Professional Credentials & Milestones
              </h4>
              <ul className="space-y-3">
                {founderHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                    <CheckCircle className="w-5 h-5 text-[#00A8A8] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Row 3: Support Therapists */}
        <div className="border-t border-gray-100 pt-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="font-heading font-extrabold text-2xl text-[#0046A5] tracking-tight">
              Our Professional Staff
            </h3>
            <p className="font-sans text-gray-500 mt-2 text-sm sm:text-base">
              Trained therapists delivering programs under senior supervision for clinical excellence and consistent results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#F5F7FA] border border-gray-100/50 rounded-3xl p-8 text-left shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-[#00A8A8]" />
                <div className="pl-2">
                  <h4 className="font-heading font-extrabold text-lg text-gray-800">{member.name}</h4>
                  <p className="font-sans font-bold text-xs uppercase tracking-wider text-[#0046A5] mt-0.5">
                    {member.role}
                  </p>
                  <p className="font-sans text-sm text-gray-600 mt-4 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
