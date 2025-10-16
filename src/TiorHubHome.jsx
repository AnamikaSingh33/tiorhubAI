import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, Paintbrush, BarChart3, Bot, Search } from 'lucide-react';
import logo from './assets/logo.png';

// ✅ Local reusable Button component
const Button = ({ children, className = '', ...props }) => (
  <button
    className={`px-6 py-2 font-bold border-2 border-black shadow-comic rounded-md transition-transform active:translate-y-1 ${className}`}
    {...props}
  >
    {children}
  </button>
);

// ✅ Local reusable Card component
const Card = ({ children, className = '' }) => (
  <div className={`bg-white border-4 border-black rounded-xl shadow-comic p-6 ${className}`}>
    {children}
  </div>
);

export default function TiorHubHome() {
  return (
    <div className="font-poppins bg-yellow-300 text-gray-900 overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between p-4 bg-white shadow-comic border-b-4 border-black">
        <div className="flex items-center gap-2">
          <img src={logo} alt="TiorHub.ai" className="h-10" />
          <h1 className="text-2xl font-black tracking-tight">
            TiorHub<span className="text-red-500">.AI</span>
          </h1>
        </div>
        <nav className="hidden md:flex gap-6 font-semibold">
          {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-red-500">
              {item}
            </a>
          ))}
        </nav>
        <Button className="bg-yellow-400 border-2 border-black text-black font-bold hover:bg-yellow-500 shadow-comic">
          Let's Talk
        </Button>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center text-center py-24 bg-gradient-to-br from-yellow-300 via-orange-300 to-red-400 comic-dots"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-black uppercase text-white drop-shadow-comic"
        >
          Empowering Brands With <br /> Digital Superpowers!
        </motion.h2>
        <p className="mt-4 max-w-2xl text-white font-medium">
          We blend AI innovation and creative marketing to help your brand dominate the digital universe.
        </p>
        <Button className="mt-6 bg-black text-yellow-400 font-bold text-lg border-2 border-white shadow-comic hover:bg-gray-900">
          Launch Your Brand
        </Button>
        <Rocket className="absolute bottom-0 right-10 text-white h-16 animate-bounce" />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white border-t-4 border-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.img
  src="https://via.placeholder.com/500x350/FFD93D/000000?text=About+TiorHub.ai"
  alt="About TiorHub.ai"
  className="rounded-2xl border-4 border-black shadow-comic"
  whileHover={{ scale: 1.05 }}
/>
          <div>
            <h3 className="text-4xl font-black mb-4 text-red-500">Who We Are</h3>
            <p className="text-lg font-medium mb-4">
              At TiorHub.ai, creativity meets intelligence. We craft marketing strategies powered by data and design.
            </p>
            <Button className="bg-red-500 text-white border-2 border-black shadow-comic hover:bg-red-600">
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-yellow-200 border-t-4 border-black">
        <h2 className="text-5xl font-black text-center mb-12">Our Superpowers</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <Rocket />, title: 'Digital Marketing Strategy' },
            { icon: <Sparkles />, title: 'Social Media Management' },
            { icon: <Bot />, title: 'AI Automation Tools' },
            { icon: <Search />, title: 'SEO & Content Optimization' },
            { icon: <Paintbrush />, title: 'Brand Design Studio' },
            { icon: <BarChart3 />, title: 'Analytics & Growth' },
          ].map(({ icon, title }) => (
            <Card
              key={title}
              className="border-4 border-black shadow-comic bg-white hover:-rotate-1 transition-transform flex flex-col items-center justify-center py-10"
            >
              <div className="text-4xl mb-4 text-red-500">{icon}</div>
              <h3 className="text-xl font-bold text-center">{title}</h3>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button className="bg-black text-yellow-400 border-2 border-white font-bold hover:bg-gray-800 shadow-comic">
            Explore All Services
          </Button>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white border-t-4 border-black">
        <h2 className="text-5xl font-black text-center mb-10">Our Success Stories</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="border-4 border-black shadow-comic grayscale hover:grayscale-0 bg-yellow-100 h-60 rounded-xl flex items-center justify-center font-bold text-xl"
            >
              Case Study #{i}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-yellow-300 border-t-4 border-black text-center">
        <h2 className="text-5xl font-black mb-12">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white border-4 border-black rounded-2xl p-6 shadow-comic max-w-sm"
            >
              <p className="italic font-medium">
                “TiorHub.ai transformed our brand presence with creativity and intelligence!”
              </p>
              <h4 className="mt-4 font-bold">— Client {i}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white border-t-4 border-black">
        <h2 className="text-5xl font-black text-center mb-10">Insights & Stories</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="border-4 border-black shadow-comic bg-yellow-100 p-6 rounded-2xl hover:-rotate-1 transition-transform"
            >
              <h3 className="font-bold text-xl mb-2">Blog Post #{i}</h3>
              <p className="text-gray-700">
                Explore new insights about AI-driven marketing and brand growth.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        className="py-20 bg-yellow-400 border-t-4 border-black text-center relative overflow-hidden"
      >
        {/* ✅ Fix path to comic burst background */}
        <div
          className="absolute inset-0 bg-[url('./assets/comic-burst.svg')] bg-cover opacity-10"
          aria-hidden="true"
        ></div>
        <h2 className="text-5xl font-black mb-6">Ready to Power Up Your Brand?</h2>
        <Button className="bg-black text-yellow-400 text-lg border-2 border-white font-bold shadow-comic hover:bg-gray-900">
          Contact Our Team
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-black text-yellow-400 py-8 border-t-4 border-yellow-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="TiorHub.ai" className="h-8" />
            <span className="font-bold">TiorHub.ai</span>
          </div>
          <div className="flex gap-6 text-sm font-medium">
            {['Home', 'Services', 'Blog', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white">
                {item}
              </a>
            ))}
          </div>
          <div className="text-xs">© 2025 TiorHub.ai | All Rights Reserved</div>
        </div>
      </footer>
    </div>
  );
}
