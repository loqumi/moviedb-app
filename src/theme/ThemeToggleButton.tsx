import { IconButton, PaletteMode, useMediaQuery } from '@mui/material'
import { useLocalStorage } from 'usehooks-ts'
import { DarkMode, LightMode } from '@mui/icons-material'
import React from 'react'

export function ThemeToggleButton() {
    const darkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const [mode, setMode] = useLocalStorage<PaletteMode>(
        'mode',
        darkMode ? 'dark' : 'light'
    )

    const icon = mode === 'dark' ? <LightMode /> : <DarkMode />
    const handleClick = () => setMode(mode === 'dark' ? 'light' : 'dark')

    return (
        <IconButton onClick={handleClick} data-test-id="Theme-toggle-button">
            {icon}
        </IconButton>
    )
}
