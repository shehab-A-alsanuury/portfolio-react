import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top of the page
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'instant' for immediate scroll
    });
  }, [pathname]);

  // Optional: Add scroll restoration for browser back/forward navigation
  useEffect(() => {
    const handleScrollRestoration = () => {
      window.history.scrollRestoration = 'manual';
    };

    handleScrollRestoration();

    return () => {
      window.history.scrollRestoration = 'auto';
    };
  }, []);

  return null;
};

export default ScrollToTop;