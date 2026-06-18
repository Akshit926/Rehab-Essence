import { useState } from 'react';
import { Phone, Clock, MapPin, Send, CheckCircle2, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const servicesList = [
    { value: 'paediatric', label: 'Paediatric Therapy' },
    { value: 'adult', label: 'Adult Rehabilitation' },
    { value: 'mental-health', label: 'Mental Health Rehab' },
    { value: 'geriatric', label: 'Geriatric Care' },
    { value: 'group', label: 'Group Programs & Workshops' },
    { value: 'general', label: 'General Enquiry' }
  ];

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Enter a valid email';
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      tempErrors.phone = 'Enter a valid phone number';
    }
    if (!formData.service) tempErrors.service = 'Please select a service';
    if (!formData.message.trim()) tempErrors.message = 'Message cannot be empty';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API post
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      }, 1500);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#F5F7FA]/50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0046A5]/10 text-[#0046A5] font-sans font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <span>Get in touch</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0046A5] tracking-tight">
            Contact Us
          </h2>
          <div className="h-1 w-12 bg-[#00A8A8] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-xl">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6 text-left"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full bg-[#F5F7FA] border ${errors.name ? 'border-red-400' : 'border-transparent'} focus:border-[#00A8A8] text-sm rounded-xl px-4 py-3 outline-none transition-colors`}
                      />
                      {errors.name && <p className="text-xs text-red-500 font-semibold">{errors.name}</p>}
                    </div>

                    {/* Phone input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 91721 33791"
                        className={`w-full bg-[#F5F7FA] border ${errors.phone ? 'border-red-400' : 'border-transparent'} focus:border-[#00A8A8] text-sm rounded-xl px-4 py-3 outline-none transition-colors`}
                      />
                      {errors.phone && <p className="text-xs text-red-500 font-semibold">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full bg-[#F5F7FA] border ${errors.email ? 'border-red-400' : 'border-transparent'} focus:border-[#00A8A8] text-sm rounded-xl px-4 py-3 outline-none transition-colors`}
                      />
                      {errors.email && <p className="text-xs text-red-500 font-semibold">{errors.email}</p>}
                    </div>

                    {/* Service selector */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Service Interest</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full bg-[#F5F7FA] border ${errors.service ? 'border-red-400' : 'border-transparent'} focus:border-[#00A8A8] text-sm rounded-xl px-4 py-3.5 outline-none transition-colors text-gray-600 font-semibold`}
                      >
                        <option value="">Select Service Area</option>
                        {servicesList.map((svc) => (
                          <option key={svc.value} value={svc.value}>{svc.label}</option>
                        ))}
                      </select>
                      {errors.service && <p className="text-xs text-red-500 font-semibold">{errors.service}</p>}
                    </div>
                  </div>

                  {/* Message input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">How can we help?</label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your requirements or clinical concerns..."
                      className={`w-full bg-[#F5F7FA] border ${errors.message ? 'border-red-400' : 'border-transparent'} focus:border-[#00A8A8] text-sm rounded-xl px-4 py-3 outline-none transition-colors resize-none`}
                    />
                    {errors.message && <p className="text-xs text-red-500 font-semibold">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-[#0046A5] hover:bg-[#003680] text-white font-sans font-extrabold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Booking Enquiry</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4 flex flex-col items-center justify-center"
                >
                  <div className="bg-green-50 p-4 rounded-full text-green-500 mb-2">
                    <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl text-gray-800">Booking Enquiry Sent!</h3>
                  <p className="font-sans text-sm sm:text-base text-gray-500 max-w-md">
                    Thank you for reaching out to Rehab Essence. Dr. Pallavi Bhat’s clinical support team will review your details and contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-sm font-bold text-[#00A8A8] hover:underline"
                  >
                    Submit another response
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Clinic Information & Styled Vector Map */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Address, Phone, Email Cards */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl space-y-6">
              
              {/* Address card */}
              <div className="flex items-start gap-4">
                <div className="bg-[#00A8A8]/10 text-[#00A8A8] p-3 rounded-2xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-gray-400 uppercase tracking-wider">Our Clinic</h4>
                  <p className="font-sans font-bold text-gray-800 mt-0.5 text-base">Rehab Essence</p>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed mt-0.5">8th Floor, Silvio Heights, St. Inez, Panaji, Goa 403001</p>
                </div>
              </div>

              {/* Timings card */}
              <div className="flex items-start gap-4">
                <div className="bg-[#B3E5FC] text-[#0046A5] p-3 rounded-2xl shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-gray-400 uppercase tracking-wider">Timings</h4>
                  <p className="font-sans font-bold text-gray-800 mt-0.5 text-base">Mon – Fri: 9:00 AM – 7:00 PM</p>
                  <p className="font-sans text-sm text-gray-600 mt-0.5">Sat: 9:00 AM – 5:00 PM (Sunday Closed)</p>
                </div>
              </div>

              {/* Contact list card */}
              <div className="flex items-start gap-4">
                <div className="bg-[#0046A5]/10 text-[#0046A5] p-3 rounded-2xl shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-gray-400 uppercase tracking-wider">Phone & Email</h4>
                  <p className="font-sans font-bold text-gray-800 mt-0.5 text-base">+91 91721 33791</p>
                  <p className="font-sans text-sm text-gray-600 mt-0.5">rehabessence@gmail.com</p>
                </div>
              </div>

            </div>

            {/* Custom Premium Vector Map Card */}
            <div className="bg-[#0046A5] text-white rounded-3xl p-6 relative overflow-hidden shadow-xl border border-[#0046A5] h-[220px] flex flex-col justify-between">
              
              {/* Map SVG abstract backdrop */}
              <svg className="absolute inset-0 opacity-15 w-full h-full pointer-events-none" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Simulated islands & land outline */}
                <path d="M40 80C100 60 140 120 180 80C220 40 280 140 340 70C360 80 380 120 400 90V200H0V90C15 80 25 80 40 80Z" fill="white" />
                <path d="M10 20C80 20 110 50 140 30C180 10 230 40 290 20C330 20 370 10 390 30" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
              </svg>

              {/* Pin representation */}
              <div className="absolute top-[85px] left-[175px] flex flex-col items-center">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A8A8] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#B3E5FC]"></span>
                </span>
                <div className="bg-white text-gray-800 font-sans font-bold text-[10px] px-2 py-1 rounded-md shadow-lg border border-gray-100 mt-1 uppercase tracking-wide">
                  Rehab Essence
                </div>
              </div>

              {/* Tagline details */}
              <div className="relative z-10 space-y-1">
                <div className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5 text-[#B3E5FC]" />
                  <span>St. Inez, Goa, India</span>
                </div>
                <p className="text-xs text-white/70 pt-2 font-medium leading-relaxed max-w-[280px]">
                  Located centrally in Panaji, Goa. Online consultation sessions are available across India.
                </p>
              </div>

              {/* Directions Button */}
              <a 
                href="https://www.google.com/maps/place/Dr.+Pallavi+Bhat%E2%80%99s+Rehab+Essence/@15.489072,73.8191692,17z/data=!3m1!4b1!4m6!3m5!1s0x8f1458a92c1be0db:0x5b1e7ee0382cfef0!8m2!3d15.489072!4d73.8191692!16s%2Fg%2F11t5_7v3w4!18m1!1e1?entry=ttu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative z-10 w-full bg-white hover:bg-gray-100 text-[#0046A5] font-sans font-bold text-center py-2.5 rounded-xl shadow-md transition-colors text-sm"
              >
                Get Directions
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
