import { useState } from 'react';
import { ShieldAlert, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const InstagramIcon = ({ className = "w-5 h-5" }) => (
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

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = ({ className = "w-5 h-5" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  const [activePolicy, setActivePolicy] = useState(null);

  const policies = {
    privacy: {
      title: 'Privacy & Confidentiality Policy',
      content: 'All client information shared at Rehab Essence is confidential and used solely for therapeutic purposes. Personal data, session notes, and reports are securely stored and never disclosed without written consent, except where required by law.'
    },
    cancellation: {
      title: 'Cancellation & Rescheduling Policy',
      content: 'Appointments can be rescheduled with 24 hours’ notice. Missed sessions or late cancellations may be charged to ensure fair scheduling for all clients. We value your time and our therapists’ prep time equally.'
    },
    licensing: {
      title: 'Credentials & Licensing',
      content: 'All therapy sessions are conducted by qualified and registered Occupational Therapists, trained in physical, neurological, and mental health rehabilitation under ethical professional standards.'
    },
    consent: {
      title: 'Consent for Therapy Policy',
      content: 'Before beginning therapy, clients (or guardians) will receive a detailed explanation of goals, methods, and confidentiality. Informed consent is obtained to promote transparency, safety, and collaborative healing.'
    }
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#0046A5] text-white py-16 border-t border-[#0046A5]/20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Col 1: Logo & Slogan */}
          <div className="md:col-span-5 space-y-6">
            {/* White variant of the logo container */}
            <div className="bg-white/95 inline-block p-4 rounded-3xl shadow-md">
              <Logo variant="horizontal" size="md" />
            </div>
            <p className="font-sans text-sm text-white/80 leading-relaxed max-w-sm italic">
              "From Ability to Possibility" — empowering individuals to move, think, and live independently through science-backed, compassionate rehabilitation.
            </p>
            {/* Socials */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/theessenceofot"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 hover:scale-115 transition-all"
                aria-label="Instagram link"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/pallavi-bhat-85b84b167/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 hover:scale-115 transition-all"
                aria-label="LinkedIn link"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 hover:scale-115 transition-all"
                aria-label="Facebook link"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-heading font-extrabold text-sm uppercase tracking-widest text-[#B3E5FC]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 font-sans text-sm text-white/80">
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#how-it-works" onClick={(e) => handleLinkClick(e, '#how-it-works')} className="hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#resources" onClick={(e) => handleLinkClick(e, '#resources')} className="hover:text-white transition-colors">Resources & Blog</a>
              </li>
              <li>
                <a href="#faqs" onClick={(e) => handleLinkClick(e, '#faqs')} className="hover:text-white transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Policies Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-heading font-extrabold text-sm uppercase tracking-widest text-[#B3E5FC]">
              Legal & Policies
            </h4>
            <ul className="space-y-2.5 font-sans text-sm text-white/80">
              <li>
                <button onClick={() => setActivePolicy('privacy')} className="hover:text-white transition-colors text-left outline-none">
                  Privacy & Confidentiality
                </button>
              </li>
              <li>
                <button onClick={() => setActivePolicy('cancellation')} className="hover:text-white transition-colors text-left outline-none">
                  Cancellation / Rescheduling
                </button>
              </li>
              <li>
                <button onClick={() => setActivePolicy('licensing')} className="hover:text-white transition-colors text-left outline-none">
                  Credentials & Licensing
                </button>
              </li>
              <li>
                <button onClick={() => setActivePolicy('consent')} className="hover:text-white transition-colors text-left outline-none">
                  Consent for Therapy
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider line */}
        <div className="h-[1px] bg-white/10 w-full" />

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/60 font-sans">
          <p>© {new Date().getFullYear()} Rehab Essence. All rights reserved.</p>
          <div className="flex gap-2 items-center">
            <span className="font-bold">Tagline:</span>
            <span className="italic">From Ability to Possibility</span>
          </div>
        </div>

      </div>

      {/* Policy Modal Overlay */}
      <AnimatePresence>
        {activePolicy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePolicy(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 bg-white text-gray-800 rounded-3xl p-8 max-w-md w-full shadow-2xl border border-gray-100 flex flex-col gap-4"
            >
              <div className="flex justify-between items-start">
                <div className="bg-[#0046A5]/10 p-2.5 rounded-xl text-[#0046A5]">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <button
                  onClick={() => setActivePolicy(null)}
                  className="p-1 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 focus:outline-none transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-2">
                <h3 className="font-heading font-extrabold text-xl text-[#0046A5]">
                  {policies[activePolicy].title}
                </h3>
                <div className="h-0.5 w-10 bg-[#00A8A8] rounded-full" />
              </div>

              <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed pt-2">
                {policies[activePolicy].content}
              </p>

              <button
                onClick={() => setActivePolicy(null)}
                className="mt-4 bg-[#00A8A8] hover:bg-[#008f8f] text-white font-sans font-bold py-2.5 rounded-xl shadow-md transition-colors"
              >
                Understood
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
