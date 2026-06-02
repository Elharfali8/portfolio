// stores/navbarStore.ts
import { create } from 'zustand';

interface NavbarState {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  setScrolled: (scrolled: boolean) => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  openMobileMenu: () => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
  isScrolled: false,
  isMobileMenuOpen: false,
  
  setScrolled: (scrolled) => set({ isScrolled: scrolled }),
  
  toggleMobileMenu: () => set((state) => ({ 
    isMobileMenuOpen: !state.isMobileMenuOpen 
  })),
  
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  
  openMobileMenu: () => set({ isMobileMenuOpen: true }),
}));