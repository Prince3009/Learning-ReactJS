import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

/**
 * ThemeToggle Component
 * Provides light/dark theme switching with localStorage persistence
 * - Reads saved theme preference on mount
 * - Applies theme class to document.documentElement
 * - Provides toggle button with sun/moon icons
 * - Saves preference to localStorage for persistence across sessions
 */
export default function ThemeToggle() {
	const [currentTheme, setCurrentTheme] = useState('light');
	const [mounted, setMounted] = useState(false);

	// Initialize theme from localStorage or system preference on mount
	useEffect(() => {
		// Check localStorage first
		const savedTheme = localStorage.getItem('theme-preference');
		
		if (savedTheme) {
			setCurrentTheme(savedTheme);
			applyTheme(savedTheme);
		} else {
			// Fall back to system preference (with guard for test environments)
			if (typeof window !== 'undefined' && window.matchMedia) {
				const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
				const initialTheme = prefersDark ? 'dark' : 'light';
				setCurrentTheme(initialTheme);
				applyTheme(initialTheme);
			} else {
				setCurrentTheme('light');
				applyTheme('light');
			}
		}
		
		setMounted(true);
	}, []);

	/**
	 * Apply theme by setting data-theme attribute on documentElement
	 * @param {string} theme - 'light' or 'dark'
	 */
	const applyTheme = (theme) => {
		const root = document.documentElement;
		
		if (theme === 'dark') {
			root.setAttribute('data-theme', 'dark');
			document.body.style.backgroundColor = 'var(--bg)';
			document.body.style.color = 'var(--text-primary)';
		} else {
			root.removeAttribute('data-theme');
			document.body.style.backgroundColor = 'var(--bg)';
			document.body.style.color = 'var(--text-primary)';
		}
	};

	/**
	 * Toggle between light and dark themes
	 */
	const toggleTheme = () => {
		const newTheme = currentTheme === 'light' ? 'dark' : 'light';
		setCurrentTheme(newTheme);
		applyTheme(newTheme);
		localStorage.setItem('theme-preference', newTheme);
	};

	// Don't render until hydrated to prevent hydration mismatch
	if (!mounted) {
		return null;
	}

	return (
		<button
			onClick={toggleTheme}
			className="theme-toggle btn btn-link"
			aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
			title={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
		>
			{currentTheme === 'light' ? (
				<MoonIcon className="nav-icon" />
			) : (
				<SunIcon className="nav-icon" />
			)}
			<span className="visually-hidden">
				{currentTheme === 'light' ? 'Dark Mode' : 'Light Mode'}
			</span>
		</button>
	);
}
