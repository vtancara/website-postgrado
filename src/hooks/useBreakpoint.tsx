import { useState, useEffect } from 'react';

export default function useBreakpoints() {
  // State to track each breakpoint
  const [isXs, setIsXs] = useState(false);
  const [isSm, setIsSm] = useState(false);
  const [isMd, setIsMd] = useState(false);
  const [isLg, setIsLg] = useState(false);
  const [isXl, setIsXl] = useState(false);
  const [is2Xl, setIs2Xl] = useState(false);

  useEffect(() => {
    // Define media queries for each breakpoint
    const xsQuery = window.matchMedia('(min-width: 400px)');
    const smQuery = window.matchMedia('(min-width: 640px)');
    const mdQuery = window.matchMedia('(min-width: 768px)');
    const lgQuery = window.matchMedia('(min-width: 1024px)');
    const xlQuery = window.matchMedia('(min-width: 1280px)');
    const twoXlQuery = window.matchMedia('(min-width: 1536px)');

    // Function to update state for each breakpoint
    const updateBreakpoints = () => {
      setIsXs(xsQuery.matches);
      setIsSm(smQuery.matches);
      setIsMd(mdQuery.matches);
      setIsLg(lgQuery.matches);
      setIsXl(xlQuery.matches);
      setIs2Xl(twoXlQuery.matches);
    };

    // Initial check
    updateBreakpoints();

    // Event listeners for each breakpoint
    xsQuery.addEventListener('change', updateBreakpoints);
    smQuery.addEventListener('change', updateBreakpoints);
    mdQuery.addEventListener('change', updateBreakpoints);
    lgQuery.addEventListener('change', updateBreakpoints);
    xlQuery.addEventListener('change', updateBreakpoints);
    twoXlQuery.addEventListener('change', updateBreakpoints);

    // Cleanup event listeners on unmount
    return () => {
      xsQuery.removeEventListener('change', updateBreakpoints);
      smQuery.removeEventListener('change', updateBreakpoints);
      mdQuery.removeEventListener('change', updateBreakpoints);
      lgQuery.removeEventListener('change', updateBreakpoints);
      xlQuery.removeEventListener('change', updateBreakpoints);
      twoXlQuery.removeEventListener('change', updateBreakpoints);
    };
  }, []);

  // Return an object with the current breakpoint states
  return { isXs, isSm, isMd, isLg, isXl, is2Xl };
}