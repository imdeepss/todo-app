"use client";

import React from 'react';
import { MoonIcon, SunIcon } from '../icons';
import { useTheme } from 'next-themes';

const ToggleButton = () => {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <div className="absolute top-5 right-10">
        <button
            type="button"
            className="rounded-lg shadow-lg outline-none items-center bg-grey flex dark:bg-pale-gold bg-dark-brown p-2"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
            {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
        </div>
    );
};

export default ToggleButton;
