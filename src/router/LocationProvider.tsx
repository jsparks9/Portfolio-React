import React, { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';

export const LocationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};