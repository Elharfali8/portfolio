import React from 'react'
import SectionTitle from './global/SectionTitle'

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl" />

  <div className="relative max-w-7xl mx-auto px-4">
    <SectionTitle title="Get In Touch" centered />

    <div className="grid lg:grid-cols-2 gap-10 mt-16">
          {/* Left Side */}
          <div className='space-y-6'>
            <h3 className='text-2xl font-bold text-white'>Let's Connect</h3>
            <p className='text-gray-300'>
              I'm currently available for freelance work and full-time opportunities. 
              Feel free to reach out if you have any questions or just want to say hi!
            </p>
            
            <div className='space-y-4'>
              <div className='flex items-center gap-4 p-4 bg-white/5 rounded-lg'>
                <span className='text-2xl'>📧</span>
                <div>
                  <p className='text-sm text-blue-400'>Email</p>
                  <a href='mailto:youssef@example.com' className='text-white hover:text-blue-400'>
                    youssef@example.com
                  </a>
                </div>
              </div>
              
              <div className='flex items-center gap-4 p-4 bg-white/5 rounded-lg'>
                <span className='text-2xl'>📱</span>
                <div>
                  <p className='text-sm text-blue-400'>Phone</p>
                  <a href='tel:+212600000000' className='text-white hover:text-blue-400'>
                    +212 600 000 000
                  </a>
                </div>
              </div>
              
              <div className='flex items-center gap-4 p-4 bg-white/5 rounded-lg'>
                <span className='text-2xl'>📍</span>
                <div>
                  <p className='text-sm text-blue-400'>Location</p>
                  <p className='text-white'>Casablanca, Morocco</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <form className='space-y-4'>
            <input
              type='text'
              placeholder='Your Name'
              className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none text-white'
            />
            <input
              type='email'
              placeholder='Your Email'
              className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none text-white'
            />
            <textarea
              placeholder='Your Message'
              rows={5}
              className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none text-white resize-none'
            ></textarea>
            <button className='w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;