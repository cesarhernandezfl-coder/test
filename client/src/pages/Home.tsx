import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import HomeHeader from "@/components/HomeHeader";
import OmniXLogo from "@/components/logo/OmniXLogo";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HomeHeader />
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="pt-20 pb-24 lg:pt-32 lg:pb-36">
            <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-neutral-800">Omni | X</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark mt-1">
                  Humanoid & Drone Systems
                </span>
              </h1>
              <p className="mt-6 text-xl text-neutral-600 max-w-3xl">
                We specialize in managing humanoid robots and drones for logistics, transportation, mobility, and emergency response. 
                Our IRIS platform enables interoperable AI systems, ensuring equitable technology deployment by design.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Button size="lg" className="px-8 py-6 text-lg">
                  <Link href="/dashboard">Try Demo</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-6 text-lg border-primary text-primary hover:bg-primary/5"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-2/5 h-4/5 bg-gradient-to-bl from-primary-light to-primary rounded-l-3xl opacity-10 z-0"></div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-800 sm:text-4xl">
              Advanced Robotics & AI Solutions
            </h2>
            <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
              Our integrated systems empower government agencies with equitable technology designed for complex operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg text-primary flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">Humanoid Robot Management</h3>
              <p className="text-neutral-600">
                Advanced control systems for humanoid robots specializing in logistics, transportation, and emergency response operations.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg text-primary flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">Drone Fleet Systems</h3>
              <p className="text-neutral-600">
                Comprehensive drone management platforms for surveillance, delivery, and emergency response with seamless coordination.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg text-primary flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">Interoperable AI Systems</h3>
              <p className="text-neutral-600">
                Our IRIS platform connects disparate AI systems for emergency management, defense systems, and mobility applications.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg text-primary flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">Government Consultation</h3>
              <p className="text-neutral-600">
                Expert consultation services to help governments build and manage AI-powered drone systems tailored to security needs.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg text-primary flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">Emergency Response Technology</h3>
              <p className="text-neutral-600">
                Specialized systems for disaster recovery, crisis management, and emergency services coordination using our robotics fleet.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg text-primary flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">Equitable AI Design</h3>
              <p className="text-neutral-600">
                Our technology is developed with a focus on fairness, transparency, and ethical considerations built into every system.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Video Showcase */}
      <div className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Advanced Solutions in Action
            </h2>
            <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto">
              Watch how our technology is revolutionizing emergency response and defense operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Video 1 */}
            <div className="rounded-xl overflow-hidden">
              <div className="relative aspect-video bg-neutral-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-dark transition-colors duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-bold">Humanoid First Responders</h3>
                  <p className="text-neutral-300 text-sm">Advanced robots for hazardous environments</p>
                </div>
              </div>
            </div>
            
            {/* Video 2 */}
            <div className="rounded-xl overflow-hidden">
              <div className="relative aspect-video bg-neutral-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-dark transition-colors duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-bold">Autonomous Drone Systems</h3>
                  <p className="text-neutral-300 text-sm">Coordinated fleet operations for crisis response</p>
                </div>
              </div>
            </div>
            
            {/* Video 3 */}
            <div className="rounded-xl overflow-hidden">
              <div className="relative aspect-video bg-neutral-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-dark transition-colors duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-bold">IRIS Platform Demo</h3>
                  <p className="text-neutral-300 text-sm">Multi-agency coordination in real-time</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" className="border-primary text-primary bg-white/10 hover:bg-white/20">
              View All Product Videos
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-800 sm:text-4xl">
              Trusted by Government Agencies
            </h2>
            <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
              See how agencies are leveraging IRIS to transform their crisis response capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-neutral-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    ER
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-neutral-800">Emergency Response Division</h4>
                  <p className="text-neutral-500">Federal Government</p>
                </div>
              </div>
              <p className="text-neutral-600 italic">
                "IRIS has transformed our ability to coordinate multiple agencies during large-scale emergencies. 
                The AI predictions have been remarkably accurate, giving us precious time to prepare and respond."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-neutral-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    FD
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-neutral-800">Metropolitan Fire Department</h4>
                  <p className="text-neutral-500">State Government</p>
                </div>
              </div>
              <p className="text-neutral-600 italic">
                "The resource allocation suggestions from IRIS helped us optimize our response to last year's wildfires. 
                We estimate it improved our efficiency by over 40% compared to previous years."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-neutral-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    EM
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-neutral-800">Emergency Management Office</h4>
                  <p className="text-neutral-500">County Government</p>
                </div>
              </div>
              <p className="text-neutral-600 italic">
                "Being able to connect all our different AI systems through IRIS has eliminated information silos that 
                plagued our previous response efforts. We now have a unified operational picture."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16" style={{ background: "linear-gradient(135deg, hsl(0, 85%, 45%), hsl(0, 0%, 0%))" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:p-12 lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                  Ready to transform your emergency response?
                </h2>
                <p className="mt-4 text-lg text-neutral-700 max-w-3xl">
                  Schedule a personalized demo to see how <span className="text-primary font-semibold">Omni | X</span> and IRIS can integrate your humanoid and drone systems.
                </p>
                <div className="mt-2 text-sm text-secondary font-medium">Powered by <span className="font-bold">OmniPublic.global</span> technology</div>
              </div>
              <div className="mt-8 lg:mt-0 lg:ml-8 flex flex-shrink-0">
                <Button size="lg" className="px-8 py-6 text-lg bg-primary hover:bg-primary-dark text-white">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <OmniXLogo size="sm" />
              </div>
              <p className="text-neutral-400 mb-4">
                A division of <span className="text-primary">OmniPublic.global</span> - Creators of IRIS (Interoperable Response Intelligence System) - 
                Revolutionizing how government agencies coordinate AI during crisis response.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-neutral-400 hover:text-primary">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-neutral-400 hover:text-primary">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="text-neutral-400 hover:text-primary">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-neutral-400 hover:text-primary">About</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-primary">Leadership</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-primary">Careers</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-primary">News</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-primary">Partners</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-neutral-400 hover:text-primary">Documentation</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-primary">API</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-primary">Case Studies</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-primary">Blog</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-primary">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-400">
            <p>© 2025 Omni | <span className="text-primary">X</span>, a division of <span className="text-primary">OmniPublic.global</span>. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}