import { createContext, useContext, useState, useCallback, useMemo } from 'react';

const CursorContext = createContext(null);

/**
 * Lets any component request a cursor "variant" on hover (e.g. 'link', 'view', 'drag')
 * without prop-drilling refs. CustomCursor reads the current variant to morph its shape.
 */
export function CursorProvider({ children }) {
  const [variant, setVariant] = useState('default');
  const [label, setLabel] = useState('');

  const enter = useCallback((nextVariant, nextLabel = '') => {
    setVariant(nextVariant);
    setLabel(nextLabel);
  }, []);

  const leave = useCallback(() => {
    setVariant('default');
    setLabel('');
  }, []);

  const value = useMemo(() => ({ variant, label, enter, leave }), [variant, label, enter, leave]);

  return <CursorContext.Provider value={value}>{children}</CursorContext.Provider>;
}

export function useCursor() {
  const ctx = useContext(CursorContext);
  if (!ctx) throw new Error('useCursor must be used within a CursorProvider');
  return ctx;
}
