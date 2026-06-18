import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickNav from './components/QuickNav';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';
import Resources from './components/Resources';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeServiceTab, setActiveServiceTab] = useState('paediatric');

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 90; // offset for the sticky header
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

  const handleSelectServiceTab = (tabId) => {
    setActiveServiceTab(tabId);
    scrollToSection('#services');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-body selection:bg-[#B3E5FC] selection:text-[#0046A5]">
      {/* Sticky Glassmorphic Header */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          onExplorePaediatric={() => handleSelectServiceTab('paediatric')} 
          onExploreAdult={() => handleSelectServiceTab('adult')} 
          onBookAssessment={() => scrollToSection('#contact')} 
        />

        {/* Quick Access Card Navigation */}
        <QuickNav onSelectCategory={handleSelectServiceTab} />

        {/* Deep Dive Services Dashboard */}
        <Services activeTab={activeServiceTab} setActiveTab={setActiveServiceTab} />

        {/* About Us: Stories, Mission, Founder Bio & Team */}
        <AboutUs />

        {/* How Therapy Works: Vertical Step Timeline */}
        <HowItWorks />

        {/* Resources & Community Feed */}
        <Resources />

        {/* Client Experiences & Reviews Carousel */}
        <Testimonials />

        {/* Frequently Asked Questions Accordion Drawer */}
        <FAQs />

        {/* Live Booking Enquiry & Contact Details */}
        <Contact />
      </main>

      {/* Spacious Policy-Integrated Footer */}
      <Footer />
    </div>
  );
}

export default App;
