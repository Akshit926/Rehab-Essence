import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      text: "She's one of the best occupational therapists I have ever met. We did a few sessions with her, as my 4-year-old daughter has low attention and learning disability. Although we couldn't do more sessions as I am out of the country, my daughter improved a lot in those few sessions. I wish I could do more sessions with her.",
      author: "Parent of a 4-year-old",
      relation: "Paediatric Client",
      initials: "P"
    },
    {
      text: "Pallavi is an exceptional therapist, committed to the wellbeing of her clients. She goes above and beyond to create holistic interventions.",
      author: "Shruti Nikhil",
      relation: "Professional Colleague",
      initials: "SN"
    },
    {
      text: "Very happy and satisfied with the therapy session for my father... Dr. Pallavi is the best I found after many attempts.",
      author: "Xavier Alphonso",
      relation: "Son of Geriatric Client",
      initials: "XA"
    },
    {
      text: "Therapy with Pallavi helped me regain focus, structure, and peace of mind after my recovery phase from schizophrenia.",
      author: "Nisheal Kale",
      relation: "Adult Rehabilitation Client",
      initials: "NK"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const nextSlide = () => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [currentIndex, isHovered, testimonials.length]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section className="py-20 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0046A5]/10 text-[#0046A5] font-sans font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <span>Client Stories</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0046A5] tracking-tight">
            Client Experiences
          </h2>
          <div className="h-1 w-12 bg-[#00A8A8] mx-auto mt-4 rounded-full" />
        </div>

        {/* Carousel Frame */}
        <div 
          className="relative max-w-4xl mx-auto bg-[#F5F7FA] border border-gray-100/50 rounded-3xl p-8 sm:p-12 md:p-16 shadow-lg"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Quote mark decorator */}
          <div className="absolute top-8 left-8 text-[#00A8A8]/10 pointer-events-none">
            <Quote className="w-20 h-20 fill-current" />
          </div>

          <div className="relative min-h-[200px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="w-full text-center space-y-6"
              >
                {/* 5-star rating */}
                <div className="flex justify-center gap-1 text-[#00A8A8]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="font-sans text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-medium italic">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author Credentials */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#0046A5] text-white font-sans font-bold flex items-center justify-center text-sm shadow-md mb-3">
                    {testimonials[currentIndex].initials}
                  </div>
                  <h4 className="font-heading font-extrabold text-base text-gray-800">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="font-sans font-bold text-xs text-[#00A8A8] uppercase tracking-wider mt-0.5">
                    {testimonials[currentIndex].relation}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-10">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'bg-[#0046A5] w-6' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-xl bg-white border border-gray-100 hover:border-gray-200 text-gray-600 hover:text-[#0046A5] shadow-sm hover:shadow transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-xl bg-white border border-gray-100 hover:border-gray-200 text-gray-600 hover:text-[#0046A5] shadow-sm hover:shadow transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
