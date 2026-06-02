'use client'
import React, { useState } from 'react'
import SectionTitle from './global/SectionTitle'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const projects = {
    frontend: [
      {
        id: 1,
        title: 'Modern Dashboard UI',
        tech: 'React + Tailwind',
        image: '/assets/frontend-1.jpg',
        description: 'Analytics dashboard with charts and data visualization'
      },
      {
        id: 2,
        title: 'E-commerce Store',
        tech: 'Next.js + Redux',
        image: '/assets/frontend-2.jpg',
        description: 'Fully responsive online store with cart functionality'
      },
      {
        id: 3,
        title: 'Portfolio Template',
        tech: 'React + Framer Motion',
        image: '/assets/frontend-3.jpg',
        description: 'Creative portfolio with smooth animations'
      }
    ],
    fullstack: [
      {
        id: 4,
        title: 'Task Manager App',
        tech: 'MERN Stack',
        image: '/assets/fullstack-1.jpg',
        description: 'Full-featured task management with user auth'
      },
      {
        id: 5,
        title: 'Blog Platform',
        tech: 'Next.js + Prisma',
        image: '/assets/fullstack-2.jpg',
        description: 'Blog with CMS and markdown support'
      },
      {
        id: 6,
        title: 'Chat Application',
        tech: 'Socket.io + React',
        image: '/assets/fullstack-3.jpg',
        description: 'Real-time chat with rooms and private messaging'
      }
    ],
    realworld: [
      {
        id: 7,
        title: 'Healthcare System',
        tech: 'React + Node.js',
        image: '/assets/realworld-1.jpg',
        description: 'Patient management and appointment scheduling'
      },
      {
        id: 8,
        title: 'Food Delivery Platform',
        tech: 'Next.js + Stripe',
        image: '/assets/realworld-2.jpg',
        description: 'Online ordering with payment integration'
      },
      {
        id: 9,
        title: 'Real Estate App',
        tech: 'MERN + Maps API',
        image: '/assets/realworld-3.jpg',
        description: 'Property listing with search and filters'
      }
    ]
  };

  return (
    <section id='projects' className='py-12 lg:py-20'>
      <div className='w-full max-w-7xl mx-auto px-4 lg:px-0'>
        <SectionTitle title='My Projects' centered={true} />

        {/* Category Buttons */}
        <div className='flex justify-center gap-4 mb-12'>
          <button
            onClick={() => setActiveCategory('frontend')}
            className={`px-6 py-2 rounded-full transition-all ${
              activeCategory === 'frontend' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveCategory('fullstack')}
            className={`px-6 py-2 rounded-full transition-all ${
              activeCategory === 'fullstack' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            Fullstack
          </button>
          <button
            onClick={() => setActiveCategory('realworld')}
            className={`px-6 py-2 rounded-full transition-all ${
              activeCategory === 'realworld' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            Real World
          </button>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects[activeCategory].map((project) => (
            <div key={project.id} className='bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all hover:transform hover:-translate-y-1'>
              <div className='h-48 bg-gradient-to-br from-blue-600/20 to-blue-800/20 flex items-center justify-center'>
                <div className='text-center'>
                  <div className='text-4xl mb-2'>📁</div>
                  <p className='text-gray-400 text-sm'>Project Preview</p>
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-white mb-2'>{project.title}</h3>
                <p className='text-blue-400 text-sm mb-2'>{project.tech}</p>
                <p className='text-gray-300 text-sm'>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className='text-center mt-12'>
          <button className='px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all transform hover:scale-105'>
            See All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;