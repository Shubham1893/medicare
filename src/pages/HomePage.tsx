import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import DeviceConnectSection from '../components/home/DeviceConnectSection';
import HowItWorks from '../components/common/HowItWorks';
import ContactMap from '../components/contact/ContactMap';
import { Mail, Phone, MapPin } from 'lucide-react';
import ChatBot from '../components/chat/ChatBot';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-purple-50/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-3xl transform -skew-y-2"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-blue-100/50">
              <FeaturesSection />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 via-purple-50/50 to-pink-50/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-purple-100/50">
            <HowItWorks />
          </div>
        </div>
      </section>

      {/* Device Connect Section */}
      <section id="connect" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-indigo-50/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-100/20 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-indigo-100/50">
            <DeviceConnectSection />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-pink-50/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-pink-100/20 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="mt-4 text-xl text-gray-600">Get in touch with our team for any queries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Contact Cards */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl opacity-0 group-hover:opacity-10 transform group-hover:scale-105 transition-all duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-blue-100/50 transform group-hover:translate-y-[-5px] transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white mb-6 shadow-lg shadow-blue-500/30">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+91 1234567890</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-10 transform group-hover:scale-105 transition-all duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-purple-100/50 transform group-hover:translate-y-[-5px] transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6 shadow-lg shadow-purple-500/30">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">contact@medsync.com</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl opacity-0 group-hover:opacity-10 transform group-hover:scale-105 transition-all duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-pink-100/50 transform group-hover:translate-y-[-5px] transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white mb-6 shadow-lg shadow-pink-500/30">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">Find a hospital near you</p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-10 transform group-hover:scale-[1.01] transition-all duration-300"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-purple-100/50 transform group-hover:translate-y-[-5px] transition-all duration-300">
              <div className="h-[500px]">
                <ContactMap />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Bot */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="transform hover:scale-105 transition-transform duration-200">
          <ChatBot />
        </div>
      </div>
    </div>
  );
}