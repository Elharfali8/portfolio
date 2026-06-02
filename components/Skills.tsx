import React from 'react'
import SectionTitle from './global/SectionTitle'

const Skills = () => {
  // Skills array with your technologies
const skills = [
  {
    id: 1,
    name: 'HTML5',
    icon: '/assets/skills/html-5.png',
    category: 'Frontend'
  },
  {
    id: 2,
    name: 'CSS3',
    icon: '/assets/skills/css-3.png',
    category: 'Frontend'
  },
  {
    id: 3,
    name: 'JavaScript',
    icon: '/assets/skills/js.png',
    category: 'Language'
  },
  {
    id: 4,
    name: 'React',
    icon: '/assets/skills/react.png',
    category: 'Frontend'
  },
  {
    id: 5,
    name: 'Redux',
    icon: '/assets/skills/redux.png',
    category: 'Frontend'
  },
  {
    id: 6,
    name: 'Tailwind CSS',
    icon: '/assets/skills/tailwind.png',
    category: 'Frontend'
  },
  {
    id: 7,
    name: 'Next.js',
    icon: '/assets/skills/nextjs.png',
    category: 'Frontend'
  },
  {
    id: 8,
    name: 'Node.js',
    icon: '/assets/skills/nodejs.png',
    category: 'Backend'
  },
  {
    id: 9,
    name: 'Express.js',
    icon: '/assets/skills/express.png',
    category: 'Backend'
  },
  {
    id: 10,
    name: 'MongoDB',
    icon: '/assets/skills/mongodb.png',
    category: 'Database'
  },
  {
    id: 11,
    name: 'Prisma',
    icon: '/assets/skills/prism.png',
    category: 'Database'
  },
  {
    id: 12,
    name: 'GitHub',
    icon: '/assets/skills/github.png',
    category: 'Tools'
  }
];

  // Group skills by category
  const groupedSkills = skills.reduce<Record<string, typeof skills>>((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id='skills' className='py-12 lg:py-20'>
      <div className='w-full max-w-7xl mx-auto px-4 lg:px-0'>
        <SectionTitle 
          title='My Skills' 
          centered={true} 
        />

        {/* Grid Layout */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mt-12'>
          {skills.map((skill) => (
            <div
              key={skill.id}
              className='group relative bg-gradient-to-br from-blue-500/10 to-blue-800/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20'
            >
              {/* Icon Container */}
              <div className='flex flex-col items-center gap-3'>
                <div className='w-16 h-16 flex items-center justify-center bg-white/5 rounded-xl p-3 group-hover:bg-white/10 transition-all duration-300'>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className='w-full h-full object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300'
                    
                  />
                </div>
                <p className='text-white font-medium text-sm md:text-base text-center'>
                  {skill.name}
                </p>
                
                {/* Category Badge */}
                <span className='text-xs text-blue-400/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  {skill.category}
                </span>
              </div>
              
              {/* Glow Effect on Hover */}
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/5 group-hover:to-transparent transition-all duration-500 pointer-events-none'></div>
            </div>
          ))}
        </div>

        {/* Alternative: Categorized View */}
        <div className='mt-16'>
          <h3 className='text-2xl font-bold text-white text-center mb-8'>
            Specialized In
          </h3>
          
          <div className='space-y-8'>
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <div key={category}>
                <h4 className='text-xl font-semibold text-blue-400 mb-4 border-l-4 border-blue-500 pl-4'>
                  {category}
                </h4>
                <div className='flex flex-wrap gap-3'>
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.id}
                      className='flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105'
                    >
                      <img src={skill.icon} alt={skill.name} className='w-5 h-5 object-contain' />
                      <span className='text-gray-300 text-sm'>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;