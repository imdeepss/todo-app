'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const DeleteIcon = () => {
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
      <path d="M6 7H5v13a2 2 0 002 2h10a2 2 0 002-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path>
    </svg>
  );
};

export default React.memo(DeleteIcon);
