import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, User, Users } from 'lucide-react';

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState('parents');
  const [openIndex, setOpenIndex] = useState(null);

  const categories = [
    { id: 'parents', label: 'For Parents', icon: Users },
    { id: 'adults', label: 'For Adults & Caregivers', icon: User }
  ];

  const faqData = {
    parents: [
      {
        q: "What signs show my child needs Occupational Therapy (OT)?",
        a: (
          <div className="space-y-3">
            <p>If your child struggles with daily activities — like dressing, feeding, writing, sitting still, or playing with other kids — OT can help. You might notice your child:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Is easily distracted or overly sensitive to sounds or touch</li>
              <li>Has trouble with balance, coordination, or handwriting</li>
              <li>Avoids messy play or dislikes certain clothes or textures</li>
              <li>Finds it hard to calm down or follow routines</li>
              <li>Needs extra help with daily activities (ADLs)</li>
              <li>Shows learning difficulties or poor attention span</li>
            </ul>
            <p className="font-semibold text-[#00A8A8] pt-1">OT helps children develop the skills they need to feel confident, focused, and independent in their everyday life.</p>
          </div>
        )
      },
      {
        q: "How often will my child need sessions?",
        a: "The number of sessions depends on your child's needs and goals. Usually, children start with 1–2 sessions per week, and as they improve, the frequency may reduce. Progress also depends on how regularly home activities are practiced. We’ll always review and adjust the plan together so it fits your family’s schedule and comfort."
      },
      {
        q: "Can I attend the sessions?",
        a: "Yes, absolutely. Parents are welcome — and encouraged — to be part of the process. In some sessions, you may observe quietly; in others, you’ll learn techniques to use at home. Your involvement helps your child make faster progress because therapy continues beyond the clinic — into daily life."
      },
      {
        q: "What is Sensory Integration Therapy?",
        a: "Sensory Integration Therapy helps children who are over- or under-sensitive to things like sound, touch, movement, or light. Through playful, movement-based activities (like swinging, balancing, or deep pressure games), children learn to organize and respond to sensory input calmly. This helps them focus better, manage emotions, and enjoy everyday experiences like school, play, and family time."
      }
    ],
    adults: [
      {
        q: "Can Occupational Therapy help with memory loss or dementia?",
        a: (
          <div className="space-y-3">
            <p>Yes. Occupational Therapy can make daily life easier and more meaningful for people with memory loss or dementia. We work on:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Simple routines to stay oriented and independent</li>
              <li>Cognitive exercises to keep the brain active</li>
              <li>Adapting the home to make it safer</li>
              <li>Supporting caregivers with stress management and practical guidance</li>
            </ul>
            <p className="font-semibold text-[#0046A5] pt-1">The goal is to help both the person and the family maintain dignity, safety, and connection.</p>
          </div>
        )
      },
      {
        q: "How soon should therapy start after a stroke?",
        a: "Ideally, therapy should begin as soon as the person is medically stable — the earlier, the better. Early Occupational Therapy helps prevent stiffness, improves movement, and retrains the brain to do daily tasks again (like dressing, writing, or eating). Even if the stroke happened months or years ago, therapy can still make a difference in regaining function and confidence."
      },
      {
        q: "How does Occupational Therapy support mental health recovery?",
        a: (
          <div className="space-y-3">
            <p>Occupational Therapy helps individuals rebuild structure, purpose, and balance in daily life after mental health challenges such as depression, anxiety, or schizophrenia. We focus on:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Creating healthy daily routines</li>
              <li>Building concentration and motivation</li>
              <li>Developing coping skills and emotional regulation</li>
              <li>Reconnecting with work, study, and meaningful roles</li>
            </ul>
            <p className="italic text-gray-500 pt-1">It’s not just about feeling better — it’s about living better, one day and one routine at a time.</p>
          </div>
        )
      },
      {
        q: "Do you provide home or tele-sessions?",
        a: "Yes. Therapy can be done in-clinic, at home, or online depending on your needs. Home visits are great for clients who need help in their own environment, while online sessions are convenient for those living outside Goa or with busy schedules. Whichever format you choose, your therapy plan will be personalized, structured, and supported every step of the way."
      }
    ]
  };

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setOpenIndex(null); // Close accordion on category change
  };

  const currentFAQs = faqData[activeCategory] || faqData.parents;

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#00A8A8]/10 text-[#00A8A8] font-sans font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <span>Got Questions?</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0046A5] tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-12 bg-[#00A8A8] mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Switch Tabs */}
        <div className="flex bg-[#F5F7FA] border border-gray-100 p-1.5 rounded-2xl max-w-md mx-auto mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`flex-1 flex items-center justify-center gap-2 font-sans font-bold text-sm py-3 px-4 rounded-xl transition-all duration-200 outline-none ${
                  isActive
                    ? 'bg-white text-[#0046A5] shadow-sm'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 text-left">
          {currentFAQs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow transition-shadow"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full flex items-center justify-between gap-4 p-6 font-heading font-extrabold text-base sm:text-lg text-gray-800 focus:outline-none transition-colors hover:text-[#00A8A8]"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#00A8A8] shrink-0" />
                    <span>{faq.q}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#00A8A8]' : ''}`} />
                </button>

                {/* Accordion Panel Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="border-t border-gray-50/50"
                    >
                      <div className="p-6 font-sans text-sm sm:text-base text-gray-600 leading-relaxed bg-[#F5F7FA]/30">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
