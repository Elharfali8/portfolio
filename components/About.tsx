import React from 'react'
import SectionTitle from './global/SectionTitle'
import Image from 'next/image'

const About = () => {
  return (
    <section id='about' className='py-12 lg:py-20'>
      <div className='w-full max-w-7xl mx-auto px-4 lg:px-0'>
        <SectionTitle title='About Me' centered={true} />
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-12 items-center'>
          {/* Left Side - Image */}
          <div className='relative rounded-2xl overflow-hidden border border-blue-500/30 shadow-2xl'>
            <div className='aspect-square'>
              <img 
                src='/assets/about.jpeg' // Replace with your actual image
                alt='Youssef Elharfali'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className='space-y-4 text-gray-300'>
  <h3 className='text-2xl font-bold text-white mb-4'>
    Who Am I?
  </h3>

  <p>
    I'm Youssef, a passionate Frontend Web Developer from Morocco who enjoys
    turning ideas into modern, responsive, and user-friendly web applications.
    My journey into web development started with a curiosity about how websites
    work, and it quickly became a career path that I genuinely enjoy pursuing.
  </p>

  <p>
    I specialize in building applications using React, Next.js, JavaScript,
    Tailwind CSS, and Redux. I enjoy creating clean interfaces, smooth user
    experiences, and projects that solve real-world problems. From weather
    apps and e-commerce platforms to booking systems and restaurant websites,
    I constantly challenge myself with new projects to improve my skills.
  </p>

  <p>
    My goal is to grow as a professional developer, work with clients around
    the world, and build digital products that make a positive impact. I'm
    always learning new technologies, improving my craft, and looking for
    exciting opportunities to collaborate and create amazing web experiences.
  </p>
</div>
        </div>
      </div>
    </section>
  )
}

export default About