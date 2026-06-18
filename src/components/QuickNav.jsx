
import { Sparkles, Brain, Activity, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function QuickNav({ onSelectCategory }) {
  const categories = [
    {
      id: 'paediatric',
      title: 'For Children',
      subtitle: 'Paediatric Therapy',
      description: 'Supporting kids in gaining confidence in sensory processing, handwriting, play, social communication, and motor skills development.',
      icon: Sparkles,
      color: 'from-[#00A8A8] to-[#00A8A8]/80',
      bgLight: 'bg-[#00A8A8]/5 hover:bg-[#00A8A8]/10',
      iconColor: 'text-[#00A8A8]',
      borderColor: 'hover:border-[#00A8A8]/30',
    },
    {
      id: 'adult',
      title: 'For Adults',
      subtitle: 'Rehabilitation & Functional Recovery',
      description: 'Evidence-based cognitive and physical rehab supporting recovery post-stroke, traumatic brain injuries, and motor impairments.',
      icon: Activity,
      color: 'from-[#0046A5] to-[#0046A5]/80',
      bgLight: 'bg-[#0046A5]/5 hover:bg-[#0046A5]/10',
      iconColor: 'text-[#0046A5]',
      borderColor: 'hover:border-[#0046A5]/30',
    },
    {
      id: 'mental-health',
      title: 'For Mental Health',
      subtitle: 'Wellbeing & Cognitive Balance',
      description: 'Mindful occupational therapy for managing anxiety, depression, burnout, schizophrenia, and rebuilding productive daily routines.',
      icon: Brain,
      color: 'from-[#B3E5FC] to-[#0046A5]',
      bgLight: 'bg-[#B3E5FC]/10 hover:bg-[#B3E5FC]/20',
      iconColor: 'text-[#0046A5]',
      borderColor: 'hover:border-[#B3E5FC]/50',
    }
  ];

  return (
    <section className="py-16 bg-[#F5F7FA]/50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0046A5] tracking-tight">
            Who are you seeking therapy for?
          </h2>
          <div className="h-1 w-16 bg-[#00A8A8] mx-auto mt-4 rounded-full" />
          <p className="font-sans text-gray-500 mt-4 text-base sm:text-lg">
            Choose a path below to discover our specialized programs tailored to restore confidence, participation, and independence.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => onSelectCategory(cat.id)}
                className={`group cursor-pointer bg-white rounded-3xl p-8 border border-gray-100/80 shadow-md ${cat.borderColor} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-left flex flex-col justify-between`}
              >
                <div>
                  {/* Icon Frame */}
                  <div className={`inline-flex items-center justify-center p-4 rounded-2xl ${cat.bgLight} ${cat.iconColor} mb-6 transition-colors duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading font-extrabold text-xl text-gray-800 mb-1">
                    {cat.title}
                  </h3>
                  <p className="font-sans font-bold text-xs uppercase tracking-wider text-gray-400 mb-4">
                    {cat.subtitle}
                  </p>

                  {/* Description */}
                  <p className="font-sans text-sm text-gray-600 leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                {/* Explore Link */}
                <div className="flex items-center gap-2 font-sans font-bold text-sm text-gray-700 group-hover:text-[#00A8A8] transition-colors self-start">
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
