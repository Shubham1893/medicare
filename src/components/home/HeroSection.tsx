import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Shield, Clock } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 opacity-70"></div>
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-blue-300/20 via-indigo-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-purple-300/20 via-pink-300/20 to-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="grid grid-cols-6 gap-4 transform rotate-12 scale-125 opacity-[0.02]">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-900 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 mb-8">
            <Activity className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">Transforming Healthcare</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8">
            <span className="block text-gray-900 mb-2">Your Health Records,</span>
            <span className="relative">
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                All in One Place
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 animate-expand"></div>
            </span>
          </h1>
          
          <p className="mt-6 text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Securely store, manage, and access your medical records anytime, anywhere. 
            Experience healthcare management reimagined.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/signup"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-2xl text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-purple-500/20"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="#features"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-2xl text-gray-700 bg-white hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl border border-gray-200"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Features Grid */}
          <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl opacity-0 group-hover:opacity-10 transform group-hover:scale-105 transition-all duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-100/50 transform group-hover:translate-y-[-5px] transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white mb-6 shadow-lg shadow-blue-500/30">
                  <Shield className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  100K+
                </div>
                <div className="text-gray-600 font-medium">Active Users</div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-10 transform group-hover:scale-105 transition-all duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-100/50 transform group-hover:translate-y-[-5px] transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white mb-6 shadow-lg shadow-purple-500/30">
                  <Activity className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <div className="text-gray-600 font-medium">Partner Hospitals</div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-10 transform group-hover:scale-105 transition-all duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-pink-100/50 transform group-hover:translate-y-[-5px] transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6 shadow-lg shadow-pink-500/30">
                  <Clock className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  1M+
                </div>
                <div className="text-gray-600 font-medium">Records Stored</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}