'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const CorrectIcon = () => {
  const { theme } = useTheme();
  const [logoColor, setLogoColor] = useState('');

  useEffect(() => {
    const updatedLogoColor =
      theme === 'dark' ? 'rgb(213, 206, 163)' : 'rgb(26, 18, 11)';
    setLogoColor(updatedLogoColor);
  }, [theme]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={logoColor}
    >
      <path d="M10 15.586l-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
    </svg>
  );
};

export default React.memo(CorrectIcon);
