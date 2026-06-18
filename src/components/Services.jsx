
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Activity, 
  Brain, 
  Heart, 
  Users, 
  Check, 
  Eye,
  Smile,
  ShieldCheck,
  Compass
} from 'lucide-react';

export default function Services({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'paediatric', label: 'Paediatric Therapy', icon: Sparkles },
    { id: 'adult', label: 'Adult Rehabilitation', icon: Activity },
    { id: 'mental-health', label: 'Mental Health Rehab', icon: Brain },
    { id: 'geriatric', label: 'Geriatric Care', icon: Heart },
    { id: 'group', label: 'Group Programs', icon: Users }
  ];

  const serviceData = {
    paediatric: {
      title: 'Paediatric Therapy',
      subtitle: 'Occupational Therapy for Children',
      description: 'Helping children gain confidence in movement, play, learning, and self-expression. We create playful, research-driven environments where kids can master vital developmental milestones.',
      focusAreas: [
        'Sensory processing & emotional regulation',
        'Fine and gross motor skill development',
        'Handwriting and school readiness',
        'Play and social participation',
        'Feeding and self-care independence'
      ],
      specialFeatures: [
        {
          title: 'Signature Program: Sensory Safari',
          description: 'A 4-week group therapy experience for ages 4–8 that teaches children to calm, connect, and co-regulate through play and movement.',
          icon: Compass,
          highlight: true
        },
        {
          title: 'Functional Vision & Perceptual Therapy',
          description: 'Supporting children with reading, writing, and coordination challenges by strengthening visual-motor connections.',
          icon: Eye,
          highlight: false
        },
        {
          title: 'Parent Coaching & Home Programs',
          description: 'Structured guidance for parents to continue therapy goals at home with confidence.',
          icon: Smile,
          highlight: false
        }
      ]
    },
    adult: {
      title: 'Adult Rehabilitation',
      subtitle: 'Neurological & Cognitive Recovery',
      description: 'Comprehensive physical and cognitive therapy to restore functional independence and rebuild daily lives after injury or neurological conditions.',
      focusAreas: [
        'Restoring daily living independence (ADLs)',
        'Cognitive retraining (memory, attention, executive function)',
        'Fine motor and hand function rehabilitation',
        'Emotional and occupational adjustment post-injury',
        'Balance, coordination, and fall prevention training'
      ],
      specialFeatures: [
        {
          title: 'Stroke & Traumatic Brain Injury Recovery',
          description: 'Custom neuro-rehab regimens focused on task-specific training, neuroplasticity, and reclaiming independence.',
          icon: Activity,
          highlight: true
        },
        {
          title: 'Parkinson’s Disease & Dementia Care',
          description: 'Slowing progression, managing motor symptoms, and structuring safety-optimized home environments.',
          icon: ShieldCheck,
          highlight: false
        }
      ]
    },
    'mental-health': {
      title: 'Mental Health Rehab',
      subtitle: 'Psychosocial & Mindfulness Integration',
      description: 'Serene, structured occupational therapy helping adults rebuild function, daily balance, and self-identity through psychosocial interventions and mindful practices.',
      focusAreas: [
        'Developing healthy daily structures, habits, and self-care routines',
        'Enhancing focus, motivation, and emotional self-regulation',
        'Building social participation and work readiness',
        'Mindfulness and body-based relaxation strategies',
        'Caregiver education and joint lifestyle planning'
      ],
      specialFeatures: [
        {
          title: 'Mindful Recovery Approach',
          description: 'Combining functional occupational engagement (doing daily activities) with mindfulness-based techniques for mental well-being.',
          icon: Heart,
          highlight: true
        },
        {
          title: 'Workplace Wellness Workshops',
          description: 'Occupational balance programs targeting occupational stress, burnout, and ergonomic balance for corporate professionals.',
          icon: Brain,
          highlight: false
        }
      ]
    },
    geriatric: {
      title: 'Geriatric Care',
      subtitle: 'Active Ageing & Dementia Support',
      description: 'Gentle, client-centered, and family-inclusive sessions tailored to seniors, promoting memory engagement, safety, and physical mobility.',
      focusAreas: [
        'Memory stimulation and cognitive engagement',
        'Balance, coordination, and senior mobility',
        'Daily living skills and emotional wellbeing',
        'Environmental modifications and home safety audits',
        'Caregiver stress management and guidance'
      ],
      specialFeatures: [
        {
          title: 'Dementia & Mild Cognitive Impairment Support',
          description: 'Strengthening familiar routines, sensory regulation, and memory prompts to help seniors age in place with dignity.',
          icon: ShieldCheck,
          highlight: true
        }
      ]
    },
    group: {
      title: 'Group & Community',
      subtitle: 'Collaborative Skill Development',
      description: 'Shared spaces designed for peer connection, mutual support, and cooperative learning under the guidance of our clinical team.',
      focusAreas: [
        'Sensory Safari (Group experience for children 4-8 years)',
        'Occupational Balance for Professionals Workshops',
        'Mindful Movement & Senior Wellness Sessions',
        'Mental Health Support Groups for emotional regulation',
        'Parent and Caregiver Support Circles'
      ],
      specialFeatures: [
        {
          title: 'Peer Support & Cooperative Play',
          description: 'Small, curated group sessions ensuring children and adults receive individual attention while practicing social skills.',
          icon: Users,
          highlight: true
        }
      ]
    }
  };

  const activeData = serviceData[activeTab] || serviceData.paediatric;

  return (
    <section id="services" className="py-20 bg-[#F5F7FA]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#00A8A8]/10 text-[#00A8A8] font-sans font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <span>Clinical Offerings</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0046A5] tracking-tight">
            What We Offer
          </h2>
          <div className="h-1 w-12 bg-[#00A8A8] mx-auto mt-4 rounded-full" />
          <p className="font-sans text-gray-500 mt-4 text-base sm:text-lg">
            We provide evidence-based, holistic occupational therapy programs designed to match developmental stages and clinical conditions.
          </p>
        </div>

        {/* Tab Buttons (Horizontal scrollable on mobile) */}
        <div className="flex overflow-x-auto pb-4 mb-12 border-b border-gray-200/60 justify-start md:justify-center scrollbar-none gap-2 px-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 font-sans font-bold text-sm px-5 py-3.5 rounded-full transition-all duration-300 whitespace-nowrap outline-none ${
                  isActive
                    ? 'bg-[#0046A5] text-white shadow-md shadow-[#0046A5]/10'
                    : 'bg-white text-gray-500 hover:text-gray-800 hover:bg-gray-100/80 border border-gray-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#B3E5FC]' : 'text-gray-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Panel Content */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left"
            >
              
              {/* Left Side: Overview & Core Focus */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00A8A8]">
                    {activeData.subtitle}
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0046A5] mt-1">
                    {activeData.title}
                  </h3>
                </div>
                
                <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
                  {activeData.description}
                </p>

                <div className="h-[1px] bg-gray-100" />

                {/* Core Focus List */}
                <div className="space-y-3">
                  <h4 className="font-heading font-bold text-sm text-gray-800 uppercase tracking-wide">
                    Areas of Clinical Focus
                  </h4>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {activeData.focusAreas.map((area, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <div className="bg-[#00A8A8]/10 text-[#00A8A8] p-0.5 rounded-full mt-0.5 shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Side: Features / Signature Programs */}
              <div className="lg:col-span-6 space-y-6">
                <h4 className="font-heading font-bold text-sm text-gray-800 uppercase tracking-wide">
                  Specialized Methods & Programs
                </h4>
                
                <div className="space-y-6">
                  {activeData.specialFeatures.map((feature, idx) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <div 
                        key={idx}
                        className={`p-6 rounded-2xl border transition-all duration-300 ${
                          feature.highlight 
                            ? 'bg-[#B3E5FC]/20 border-[#B3E5FC] shadow-sm'
                            : 'bg-white border-gray-100/80 hover:border-gray-200'
                        }`}
                      >
                        <div className="flex gap-4">
                          <div className={`p-3 rounded-xl shrink-0 ${
                            feature.highlight ? 'bg-[#0046A5] text-white' : 'bg-[#F5F7FA] text-[#00A8A8]'
                          }`}>
                            <FeatureIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <h5 className="font-heading font-extrabold text-sm sm:text-base text-gray-800">
                              {feature.title}
                            </h5>
                            <p className="font-sans text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
