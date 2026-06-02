// components/Navbar.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useNavbarStore } from "../../store/navbar-store";

const Navbar = () => {
  const { isScrolled, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useNavbarStore();

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
          ${isScrolled 
            ? "max-w-7xl mx-auto rounded-full mt-4 shadow-lg backdrop-blur-md bg-blue-900/80 border border-blue-500/30" 
            : "w-full bg-transparent"
          }
        `}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-20" onClick={closeMobileMenu}>
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 group ">
                <Image
                  src="/assets/dark-logo.png"
                  alt="Youssef Elharfali Logo"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>

                      {/* CV */}
            <div className="hidden md:block">
              <a
                href="/assets/Youssef_Elharfali_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  ml-4 px-4 py-2 rounded-lg border border-blue-500/30 bg-blue-800/50 text-white font-medium transition-colors duration-300 hover:bg-blue-700/70
                `}
              >
                Download CV
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden relative z-20 p-2 rounded-lg hover:bg-blue-800/50 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-around">
                <span 
                  className={`w-full h-0.5 bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`} 
                />
                <span 
                  className={`w-full h-0.5 bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`} 
                />
                <span 
                  className={`w-full h-0.5 bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <MobileMenu />
    </>
  );
};

// Separate component for mobile menu to keep code organized
const MobileMenu = () => {
  const { isMobileMenuOpen, closeMobileMenu } = useNavbarStore();

  if (!isMobileMenuOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 bg-blue-950/95 backdrop-blur-md transition-all duration-500 md:hidden"
      onClick={closeMobileMenu}
    >
      <div className="flex flex-col items-center justify-center min-h-screen space-y-8 text-2xl">
        <MobileNavLink href="/" onClick={closeMobileMenu}>Home</MobileNavLink>
        <MobileNavLink href="#about" onClick={closeMobileMenu}>About</MobileNavLink>
        <MobileNavLink href="#projects" onClick={closeMobileMenu}>Projects</MobileNavLink>
              <MobileNavLink href="#contact" onClick={closeMobileMenu}>Contact</MobileNavLink>
              
              {/* CV */}
              <a href="/assets/Youssef_Elharfali_CV.pdf" onClick={closeMobileMenu} target="_blank" rel="noopener noreferrer" className="mt-4 px-6 py-3 rounded-lg border border-blue-500/30 bg-blue-800/50 text-white font-medium transition-colors duration-300 hover:bg-blue-700/70">
                Download CV
              </a>
      </div>
    </div>
  );
};

// Navigation Link Component with scroll-aware styling
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const { isScrolled } = useNavbarStore();
  
  return (
    <Link
      href={href}
      className={`
        relative font-medium transition-all duration-300
        ${isScrolled ? "text-white hover:text-blue-300" : "text-white hover:text-blue-300"}
        after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 
        after:transition-all after:duration-300 hover:after:w-full
      `}
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => {
  return (
    <Link
      href={href}
      className="text-white hover:text-blue-300 transition-colors duration-300 font-medium text-xl"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;