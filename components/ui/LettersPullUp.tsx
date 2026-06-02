'use client';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';
 
// In your LettersPullUp component, change the flex justify-center to justify-start
export function LettersPullUp({
  text,
  className = '',
  align = 'left', // add this prop
}: {
  text: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}) {
  const splittedText = text.split('');
  
  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };
  
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const justifyClass = 
    align === 'left' ? 'justify-start' : 
    align === 'right' ? 'justify-end' : 
    'justify-center';
  
  return (
    <div className={`flex ${justifyClass}`}>
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? 'animate' : ''}
          custom={i}
          className={cn('', className)}
        >
          {current == ' ' ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}