'use client';

import React, { useState } from 'react';

const CartCountContext = React.createContext();
export function CartCountProvider({
  children,
  initialCartCount,
}) {
  const [optimisticCartCount, setOptimisticCartCount] = useState(null);

  const count =
    optimisticCartCount !== null ? optimisticCartCount : initialCartCount;

  return (
    <CartCountContext.Provider value={[count, setOptimisticCartCount]}>
      {children}
    </CartCountContext.Provider>
  );
}

export function useCartCount() {
  const context = React.useContext(CartCountContext);
  if (context === undefined) {
    throw new Error('useCartCount must be used within a CartCountProvider');
  }
  return context;
}
