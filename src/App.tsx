import React, { useState } from 'react';
import { Menu, X, Home, Users, Settings, HelpCircle, Mail } from 'lucide-react';
import pfcLogo from '../dist/assets/pfc-logo.png';
import headerImage from '../dist/assets/header.jpg'

// Navigation items with icons
const navItems = [
  { icon: Home, label: 'Dashboard', href: '#dashboard' },
  { icon: Users, label: 'Team', href: '#team' },
  { icon: Mail, label: 'Messages', href: '#messages' },
  { icon: Settings, label: 'Settings', href: '#settings' },
  { icon: HelpCircle, label: 'Support', href: '#support' },
];

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDesktopSidebarExpanded, setIsDesktopSidebarExpanded] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDesktopSidebar = () => setIsDesktopSidebarExpanded(!isDesktopSidebarExpanded);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-md h-40 fixed w-full top-0 z-30">
        <div className="flex items-center justify-between px-4 h-full">
          {/* Center aligned container */}
          <div className="flex items-center justify-center w-full">
            {/* Logo and title container */}
            <div className="flex flex-col items-center justify-center space-x-4">
              {/* Logo image */}
              <img 
                src={pfcLogo}
                alt="PFC Logo" 
                className="w-16 h-16 object-contain"
              />
              {/* Title */}
              <span className="text-2xl font-bold bg-gradient-to-r text-[#00a6a2]  bg-clip-text text-center">
                PARISHUDHATMA FELLOWSHIP MINISTRIES
              </span>
            </div>
          </div>

          {/* Mobile menu button - moved to the right */}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg lg:hidden hover:bg-gray-100 absolute right-4"
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? <X size={24} className="text-gray-600" /> : <Menu size={24} className="text-gray-600" />}
          </button>
        </div>
      </header>

      <div className="flex flex-1 pt-40">
        {/* Sidebar - Desktop */}
        <aside
          className={`hidden lg:block fixed h-[calc(100vh-4rem)] bg-white shadow-lg transition-all duration-300 ${
            isDesktopSidebarExpanded ? 'w-64' : 'w-20'
          }`}
        >
          <div className="flex-1 py-6">
            <nav className="space-y-1 px-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center px-3 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 rounded-lg group"
                >
                  <item.icon size={20} className="group-hover:text-blue-600" />
                  {isDesktopSidebarExpanded && (
                    <span className="ml-3 font-medium">{item.label}</span>
                  )}
                </a>
              ))}
            </nav>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
            <button
              onClick={toggleDesktopSidebar}
              className="flex items-center justify-center w-full px-4 py-2 text-sm text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 rounded-lg transition-colors"
            >
              <Menu size={20} />
              {isDesktopSidebarExpanded && <span className="ml-2">Collapse</span>}
            </button>
          </div>
        </aside>

        {/* Sidebar - Mobile */}
        <div
          className={`lg:hidden fixed inset-0 z-40 ${
            isSidebarOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="fixed inset-0 bg-gray-600/50 backdrop-blur-sm" onClick={toggleSidebar} />
          <aside className="fixed top-0 left-0 bottom-0 w-72 bg-white shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex items-center space-x-2">
                {/* <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Bolt
                </span> */}
                  <div className="flex flex-col items-center justify-center space-x-4">
              {/* Logo image */}
              <img 
                src={pfcLogo}
                alt="PFC Logo" 
                className="w-12 h-12 object-contain"
              />
              {/* Title */}
              <span className="text-[14px] font-bold bg-gradient-to-r text-[#00a6a2]  bg-clip-text text-center">
              PARISHUDHATMA FELLOWSHIP MINISTRIES
              </span>
            </div>
              </div>
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>
            <nav className="p-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center px-3 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 rounded-lg group"
                >
                  <item.icon size={20} className="group-hover:text-blue-600" />
                  <span className="ml-3 font-medium">{item.label}</span>
                </a>
              ))}
            </nav>
          </aside>
        </div>

        {/* Main content */}
        {/* <main className={`flex-1 ${isDesktopSidebarExpanded ? 'lg:ml-64' : 'lg:ml-20'}`}>
          <div className="max-w-7xl mx-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">
                New Project
              </button>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Welcome Back!</h2>
              <p className="text-gray-600">
                This is your dashboard where you can manage all your activities.
                The layout is fully responsive and adapts to different screen
                sizes. The sidebar can be collapsed on desktop for more space,
                and on mobile devices, it transforms into a full-screen popup
                menu.
              </p>
            </div>
          </div>
        </main> */}
        <main className={`text-gray-600 ${isDesktopSidebarExpanded ? 'lg:ml-64' : 'lg:ml-20'}`}>
          <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            {/* Header Section */}
            <div className="text-center mb-12">
              {/* College Name with Background Image */}
              <div 
                className="relative bg-cover bg-center rounded-2xl mb-8 overflow-hidden h-[600px]"
                style={{
                  backgroundImage: `url(${headerImage})`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% auto'
                }}
              >
                {/* Dark overlay with blur */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>
                
                {/* Content container with glass effect */}
                <div className="relative z-10 h-full flex items-center justify-center px-4">
                  {/* Title container with stronger blur for emphasis */}
                  <div className="max-w-4xl w-full mx-auto  bg-black/10 p-10 rounded-2xl 
                    transform hover:scale-[1.02] transition-all duration-300 border border-white/10">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-wide drop-shadow-xl">
                      LIGHT TO THE WORLD
                      <br />
                      <span className="text-yellow-400">BIBLE COLLEGE</span>
                    </h1>
                    <div className="w-40 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
                    <p className="text-white text-xl md:text-2xl mb-4 font-medium drop-shadow-lg">
                      Illuminating Minds, Transforming Lives
                    </p>
                    <p className="text-yellow-300/90 text-lg font-medium">
                      (Reg no 63 of 2022)
                    </p>
                  </div>
                </div>
              </div>

              {/* Affiliations */}
              <div className="space-y-6 max-w-4xl mx-auto bg-white/50 backdrop-blur-sm p-6 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* NTA Affiliation */}
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                    <p className="text-gray-700">
                      <span className="font-semibold text-[#00a6a2]">Member of</span><br />
                      NATIONAL THEOLOGICAL ASSOCIATION (NTA)
                    </p>
                  </div>

                  {/* APQN & KIU Partnership */}
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                    <p className="text-gray-700">
                      <span className="font-semibold text-[#00a6a2]">Member of</span><br />
                      APQN & GLOBAL ETHICS PARTNERSHIP WITH<br />
                      KESMONDS INTERNATIONAL UNIVERSITY (KIU)
                    </p>
                  </div>

                  {/* New Jerusalem Accreditation */}
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                    <p className="text-gray-700">
                      <span className="font-semibold text-[#00a6a2]">Accredited by</span><br />
                      NEW JERUSALEM INTERNATIONAL<br />
                      BIBLE THEOLOGICAL COLLEGE
                    </p>
                  </div>
                </div>

                {/* Registered Office */}
                <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-md border border-gray-100 mt-8">
                  <h3 className="text-lg font-semibold text-[#00a6a2] mb-3">Registered Office</h3>
                  <div className="text-gray-700 space-y-1">
                    <p>111 ROYAL CRESCENT NEW BURY PARK,</p>
                    <p>ILFORD, LONDON, ENGLAND 1927JZ</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Info */}
              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-[#00a6a2] mb-6">Contact Information</h3>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex flex-col items-center p-4 rounded-xl bg-white shadow-sm">
                      <span className="font-semibold text-lg text-[#00a6a2] mb-2">Principal</span>
                      <p className="text-gray-800 font-medium">P. Ameer babu</p>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 rounded-xl bg-white shadow-sm">
                      <span className="font-semibold text-lg text-[#00a6a2] mb-2">Address</span>
                      <div className="space-y-1">
                        <p>Door no:1-61, Satyawada,</p>
                        <p>undrajavaram Mandal</p>
                        <p>East godavari district, 535218,</p>
                        <p>Andhra Pradesh, India.</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 rounded-xl bg-white shadow-sm">
                      <span className="font-semibold text-lg text-[#00a6a2] mb-2">Phone</span>
                      <p className="text-gray-800 font-medium">9110775524</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Courses */}
              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-[#00a6a2] mb-6">Courses Offered</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      'Certificate of theology',
                      'Diploma of theology',
                      'Bachelor of Divinity',
                      'Bachelor of theology',
                      'Master of Divinity',
                      'Master of theology'
                    ].map((course, index) => (
                      <div 
                        key={index}
                        className="p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:bg-gray-50 cursor-pointer"
                      >
                        <p className="text-gray-800 font-medium">{course}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-center text-gray-700">
                <p className="font-medium">Accreditation period: 2025 - 2030</p>
                <p className="text-sm text-gray-500 mt-1">(Reg no 63 of 2022)</p>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className={`bg-gradient-to-r bg-[#00a6a2] text-white ${isDesktopSidebarExpanded ? 'lg:ml-64' : 'lg:ml-20'}`}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                {/* <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">B</span>
                </div>
                <span className="text-2xl font-bold">Bolt</span> */}
                  <div className="flex items-center justify-center space-x-4">
              {/* Logo image */}
              <img 
                src={pfcLogo}
                alt="PFC Logo" 
                className="w-20 h-20 object-contain"
              />
              {/* Title */}
             
            </div>
              </div>
              {/* <p className="text-blue-100 text-sm">
                Building the future of web applications with modern tools and technologies.
              </p> */}
            </div>
            
            {/* <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                <a href="#" className="text-blue-100 hover:text-white transition-colors">About</a>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">Features</a>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">Pricing</a>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">Contact</a>
              </div>
            </div> */}
            
            {/* <div className="space-y-4">
              <h3 className="text-lg font-semibold">Legal</h3>
              <div className="space-y-2">
                <a href="#" className="block text-blue-100 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="block text-blue-100 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="block text-blue-100 hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div> */}
          </div>
          
          {/* <div className="mt-12 pt-8 border-t border-blue-800/50">
            <div className="text-center text-blue-200 text-sm">
              © 2024 Bolt, Inc. All rights reserved.
            </div>
          </div> */}
        </div>
      </footer>
    </div>
  );
}

export default App;