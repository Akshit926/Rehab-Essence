
import { BookOpen, CheckCircle, ArrowUpRight, FileText, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const InstagramIcon = ({ className = "w-6 h-6" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Resources() {
  return (
    <section id="resources" className="py-20 bg-[#F5F7FA]/30 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#00A8A8]/10 text-[#00A8A8] font-sans font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <span>Learning & community</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0046A5] tracking-tight">
            Resources & Community
          </h2>
          <div className="h-1 w-12 bg-[#00A8A8] mx-auto mt-4 rounded-full" />
          <p className="font-sans text-gray-500 mt-4 text-base sm:text-lg">
            Empowering insights, practical home tools, and daily therapeutic tips designed to support parents, adults, and caregivers.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Card 1: Book Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-md hover:shadow-xl transition-all flex flex-col justify-between text-left"
          >
            <div>
              {/* Badge */}
              <div className="flex justify-between items-start mb-6">
                <div className="bg-[#B3E5FC] text-[#0046A5] p-3 rounded-2xl">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="bg-[#00A8A8]/10 text-[#00A8A8] font-sans font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full">
                  Handwriting Book
                </span>
              </div>

              {/* Title & Info */}
              <h3 className="font-heading font-extrabold text-2xl text-gray-800">
                Fix the Flip
              </h3>
              <p className="font-sans font-bold text-xs text-[#00A8A8] uppercase tracking-wider mt-0.5 mb-4">
                30 Worksheets for Reversal Correction
              </p>
              
              <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                An expert-designed workbook packed with 30 interactive worksheets and practical tips to help children see, write, and remember letters and numbers in the correct orientation.
              </p>

              {/* Checklist */}
              <ul className="space-y-2.5 mb-8">
                <li className="flex items-center gap-2.5 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#00A8A8] shrink-0" />
                  <span>Correct letter & number reversals</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#00A8A8] shrink-0" />
                  <span>Strengthen visual spatial skills</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#00A8A8] shrink-0" />
                  <span>Fun, child-friendly trace patterns</span>
                </li>
              </ul>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#0046A5] hover:bg-[#003680] text-white font-sans font-bold py-3.5 px-6 rounded-xl shadow-md transition-all self-start"
            >
              <FileText className="w-4 h-4" />
              <span>Inquire about Workbook</span>
            </a>
          </motion.div>

          {/* Card 2: Instagram Social Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-md hover:shadow-xl transition-all flex flex-col justify-between text-left"
          >
            <div>
              {/* Badge */}
              <div className="flex justify-between items-start mb-6">
                <div className="bg-[#00A8A8]/10 text-[#00A8A8] p-3 rounded-2xl">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <span className="bg-[#0046A5]/10 text-[#0046A5] font-sans font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full">
                  Follow Us
                </span>
              </div>

              {/* Title & Info */}
              <h3 className="font-heading font-extrabold text-2xl text-gray-800">
                @theessenceofot
              </h3>
              <p className="font-sans font-bold text-xs text-[#0046A5] uppercase tracking-wider mt-0.5 mb-4">
                Videos, Exercises & Daily OT Tips
              </p>
              
              <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                Join our active digital community! We share bite-sized clinical guides, sensory circuit demonstrations, self-regulation tips, and physical coordination activities.
              </p>

              {/* Checklist */}
              <ul className="space-y-2.5 mb-8">
                <li className="flex items-center gap-2.5 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#00A8A8] shrink-0" />
                  <span>Interactive exercise demonstrations</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#00A8A8] shrink-0" />
                  <span>Sensory activity breakdowns for home</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#00A8A8] shrink-0" />
                  <span>Answers to common OT questions</span>
                </li>
              </ul>
            </div>

            <a
              href="https://www.instagram.com/theessenceofot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#00A8A8] text-[#00A8A8] hover:bg-[#00A8A8]/5 font-sans font-bold py-3.5 px-6 rounded-xl transition-all self-start"
            >
              <Smartphone className="w-4 h-4" />
              <span>Visit Instagram Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

        </div>

        {/* Small prompt */}
        <p className="text-center font-sans text-sm text-gray-400 mt-12 max-w-lg mx-auto">
          These resources are designed to help you <strong>continue therapy at home</strong>, stay informed, and engage with your child or loved one in practical, meaningful ways.
        </p>

      </div>
    </section>
  );
}
