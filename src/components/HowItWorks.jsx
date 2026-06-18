
import { motion } from 'framer-motion';
import { Search, Compass, Shield, Home, RefreshCw } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation & Assessment',
      subtitle: 'Understanding Strengths & Goals',
      description: 'A comprehensive assessment conducted by Senior OT Dr. Pallavi Bhat (MOT - Neurorehabilitation), supported by our clinical team, to analyze functional capabilities, sensory processing, and individual aspirations.',
      icon: Search,
    },
    {
      number: '02',
      title: 'Collaborative Planning & Goal-Setting',
      subtitle: 'Tailored Strategy & Milestones',
      description: 'We co-create a personalized plan alongside the client and family, aligning on meaningful, measurable rehabilitation goals that easily fit into daily routines and lifestyle.',
      icon: Compass,
    },
    {
      number: '03',
      title: 'Trained Therapy Sessions',
      subtitle: 'Hands-on, Play or Function-Based care',
      description: 'Engaging, specialized sessions delivered by trained therapists under Dr. Pallavi Bhat’s direct clinical supervision, ensuring the highest standard of practice and consistent progress.',
      icon: Shield,
    },
    {
      number: '04',
      title: 'Carryover at Home',
      subtitle: 'Empowering Parents & Caregivers',
      description: 'We structure guidance, simple exercises, and emotional regulation techniques to practice at home, ensuring that healing extends beyond the clinic doors.',
      icon: Home,
    },
    {
      number: '05',
      title: 'Progress Review & Reassessment',
      subtitle: 'Celebrating Growth & Adjusting Plans',
      description: 'Regular clinical reviews to track functional milestones, adjust therapy objectives, and celebrate key transitions towards complete independence.',
      icon: RefreshCw,
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative vertical line in background */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gray-100 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-[#0046A5]/10 text-[#0046A5] font-sans font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <span>Our Approach</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0046A5] tracking-tight">
            How Therapy Works
          </h2>
          <div className="h-1 w-12 bg-[#00A8A8] mx-auto mt-4 rounded-full" />
          <p className="font-sans text-gray-500 mt-4 text-base sm:text-lg">
            Our Rehab Essence Integrated Team Model follows a clear, structured 5-step journey to convert potential into everyday independence.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative space-y-12 lg:space-y-0">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isEven = idx % 2 === 0;

            return (
              <div key={idx} className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Timeline Dot (Middle on large, left on small) */}
                <div className="absolute left-4 lg:left-1/2 top-4 -translate-y-1/2 lg:-translate-x-1/2 z-10">
                  <div className="timeline-dot relative w-9 h-9 bg-white border-2 border-[#00A8A8] rounded-full flex items-center justify-center shadow-md">
                    <div className="w-2.5 h-2.5 bg-[#0046A5] rounded-full" />
                  </div>
                </div>

                {/* Left Block (Text on even, spacer on odd) */}
                <div className={`col-span-1 lg:col-span-5 ${isEven ? 'lg:text-right lg:block' : 'lg:order-last lg:block'} text-left pl-16 lg:pl-0`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#F5F7FA] border border-gray-100 rounded-3xl p-8 hover:shadow-md transition-shadow relative"
                  >
                    {/* Step Number Tag */}
                    <span className={`absolute top-6 ${isEven ? 'lg:left-auto lg:right-8' : 'left-8'} text-5xl font-heading font-extrabold text-[#00A8A8]/10`}>
                      {step.number}
                    </span>

                    <div className={`flex flex-col ${isEven ? 'lg:items-end' : 'items-start'} gap-4`}>
                      <div className="bg-white p-3 rounded-2xl text-[#0046A5] shadow-sm border border-gray-100">
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      <div>
                        <h4 className="font-heading font-extrabold text-lg text-gray-800">
                          {step.title}
                        </h4>
                        <p className="font-sans font-bold text-xs text-[#00A8A8] uppercase tracking-wider mt-0.5">
                          {step.subtitle}
                        </p>
                      </div>

                      <p className="font-sans text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Center Gap Spacer for Layout Grid */}
                <div className="col-span-1 lg:col-span-2 hidden lg:block" />

                {/* Right Block (Spacer on even, text on odd) */}
                <div className="col-span-1 lg:col-span-5 hidden lg:block" />

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
