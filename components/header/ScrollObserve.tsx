// components/ScrollObserver.tsx
"use client";

import { useEffect } from 'react';
import { useNavbarStore } from '../../store/navbar-store';

export const ScrollObserver = () => {
  const setScrolled = useNavbarStore((state) => state.setScrolled);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setScrolled]);

  return null;
};