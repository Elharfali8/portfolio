import React from 'react'
import { LettersPullUp } from './ui/LettersPullUp'

const Hero = () => {
  return (
    <section className='min-h-[calc(100vh-80px)] w-full grid place-items-center'>
      <div className='w-full max-w-7xl mx-auto px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        
        {/* Left Column - Main Content */}
        <div className='text-left space-y-6 order-2 lg:order-1'>
          {/* Badge */}
          <span className='inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 backdrop-blur-sm'>
            ✨ Hi, my name is
          </span>
          
          {/* Name with animation */}
          <div>
            <LettersPullUp 
              text='Youssef Elharfali' 
              className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white' 
              align='left' 
            />
          </div>
          
          {/* Title/Role */}
          <div className='space-y-2'>
            <h2 className='text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent'>
              Full Stack Developer
            </h2>
            <p className='text-gray-300 text-lg leading-relaxed max-w-lg'>
              I build exceptional digital experiences with React, Next.js, and modern web technologies.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className='flex flex-wrap gap-4 pt-4'>
            <button className='px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 cursor-pointer'>
              View My Work
            </button>
            <button className='px-6 py-3 border border-blue-400/50 hover:border-blue-400 text-blue-300 hover:text-white font-medium rounded-lg transition-all duration-300 backdrop-blur-sm cursor-pointer'>
              Contact Me
            </button>
          </div>
          
          {/* Social Links */}
          <div className='flex gap-4 pt-6'>
  {/* WhatsApp - Green hover */}
  <a href="https://wa.me/212611765659" target='_blank' className='text-gray-400 hover:text-green-400 transition-colors'>
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
    </svg>
  </a>
  
  {/* GitHub - White hover */}
  <a href="https://github.com/Elharfali8" target='_blank' className='text-gray-400 hover:text-white transition-colors'>
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  </a>
  
  {/* LinkedIn - Blue hover */}
  <a href="https://www.linkedin.com/in/youssef-el-harfali-73a465230/" target='_blank' className='text-gray-400 hover:text-blue-400 transition-colors'>
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.222 0 22.225 0z"/>
    </svg>
  </a>
</div>
        </div>

        {/* Right Column - Image/Illustration */}
        <div className='flex justify-center lg:justify-end order-1 lg:order-2'>
          <div className='relative'>
            {/* Gradient orb background */}
            <div className='absolute inset-0 bg-blue-600/20 rounded-full blur-3xl'></div>
            
            {/* Profile Image Placeholder */}
            <div className='relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-800/20 border border-blue-500/30 backdrop-blur-sm flex items-center justify-center overflow-hidden'>
              {/* Replace with your actual image */}
              <div className='text-center'>
                <svg className="w-24 h-24 mx-auto text-blue-400/50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <p className='text-sm text-blue-300 mt-2'>Your Photo Here</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className='absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl'></div>
            <div className='absolute -bottom-4 -left-4 w-20 h-20 bg-blue-600/20 rounded-full blur-2xl'></div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero