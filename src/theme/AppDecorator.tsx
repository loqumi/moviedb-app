import React from 'react'
import { createTheme, CssBaseline, PaletteMode, ThemeProvider, useMediaQuery } from '@mui/material'
import { useLocalStorage } from 'usehooks-ts'

export function AppDecorator({ children }: { children: React.ReactNode }) {
    const darkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const [mode] = useLocalStorage<PaletteMode>('mode', darkMode ? 'dark' : 'light')

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    )

    return (
        <ThemeProvider {...{ theme }}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
