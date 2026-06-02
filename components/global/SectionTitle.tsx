import React from 'react'

const SectionTitle = ({ title, centered = true }: {title:string, centered?:boolean}) => {
  const words = title.split(' ');
  
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold capitalize'>
        {words.map((word, index) => (
          <span
            key={index}
            className='inline-block hover:text-blue-400 transition-colors duration-300 mr-3'
            style={{
              textShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
            }}
          >
            {word}
          </span>
        ))}
      </h2>
      
     
    </div>
  )
}

export default SectionTitle