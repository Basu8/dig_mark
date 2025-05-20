"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Matched to footer style */}
          <div className="flex items-center">
            <div className="h-12 w-12 border border-white rounded-md overflow-hidden">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="GrowthInfinity Logo"
                  width={80}
                  height={80}
                  className="w-full h-full scale-110 object-cover"
                  style={{ transform: 'scale(1.1)' }}
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink href="/">Home</NavLink>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors flex items-center"
              >
                Services
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {servicesDropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-56 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <div className="py-1">
                    <DropdownLink href="/services#seo">SEO Optimization</DropdownLink>
                    <DropdownLink href="/services#social-media">Social Media Marketing</DropdownLink>
                    <DropdownLink href="/services#content">Content Marketing</DropdownLink>
                    <DropdownLink href="/services#web-dev">Web Development</DropdownLink>
                    <div className="border-t border-gray-100"></div>
                    <DropdownLink href="/services" className="font-semibold text-blue-600">
                      View All Services
                    </DropdownLink>
                  </div>
                </div>
              )}
            </div>

            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1">
              <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`h-0.5 w-full bg-white transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="bg-gray-800 shadow-lg pb-4">
          <MobileLink href="/" onClick={() => setIsOpen(false)}>Home</MobileLink>
          
          {/* Mobile Services Dropdown */}
          <div className="border-b border-gray-700">
            <button 
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className="flex justify-between items-center w-full px-4 py-3 text-left text-white hover:bg-gray-700 transition-colors text-base font-medium"
            >
              Services
              <svg 
                className={`ml-1 h-4 w-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {servicesDropdownOpen && (
              <div className="pl-6 bg-gray-700">
                <MobileLink href="/services#seo" onClick={() => setIsOpen(false)}>SEO Optimization</MobileLink>
                <MobileLink href="/services#social-media" onClick={() => setIsOpen(false)}>Social Media Marketing</MobileLink>
                <MobileLink href="/services#content" onClick={() => setIsOpen(false)}>Content Marketing</MobileLink>
                <MobileLink href="/services#web-dev" onClick={() => setIsOpen(false)}>Web Development</MobileLink>
                <MobileLink href="/services" onClick={() => setIsOpen(false)} className="font-semibold text-blue-400">
                  View All Services
                </MobileLink>
              </div>
            )}
          </div>

          <MobileLink href="/blog" onClick={() => setIsOpen(false)}>Blog</MobileLink>
          <MobileLink href="/about" onClick={() => setIsOpen(false)}>About</MobileLink>
          <MobileLink href="/contact" onClick={() => setIsOpen(false)}>Contact</MobileLink>
        </div>
      </div>
    </nav>
  );
}

// Desktop NavLink Component
function NavLink({ href, children }) {
  return (
    <Link href={href} className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
      {children}
    </Link>
  );
}

// Dropdown Link Component
function DropdownLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${className}`}
    >
      {children}
    </Link>
  );
}

// Mobile NavLink Component
function MobileLink({ href, onClick, children, className = "" }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block px-4 py-3 text-white hover:bg-gray-700 transition-colors text-base font-medium ${className}`}
    >
      {children}
    </Link>
  );
}