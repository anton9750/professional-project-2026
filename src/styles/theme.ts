import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    ink: '#283a34',
    muted: '#68766f',
    paper: '#f7f6f2',
    white: '#fffefa',
    green: '#567461',
    greenHover: '#455e50',
    lime: '#e5ebdf',
    line: '#e3e5de',
    peach: '#ead8cb',
    sage: '#a2b39c',
    soft: '#eef0ea',
  },
  breakpoints: { tablet: '800px', mobile: '560px' },
}

export type AppTheme = typeof theme

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; scroll-padding-top: 90px; }
  body { margin: 0; background: ${({ theme }) => theme.colors.paper}; color: ${({ theme }) => theme.colors.ink}; font-family: 'DM Sans', sans-serif; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; }
  button, a { font: inherit; }
  a { color: inherit; text-decoration: none; }
  button { color: inherit; }
  button:focus-visible, a:focus-visible, input:focus-visible, textarea:focus-visible, select:focus-visible, summary:focus-visible { outline: 3px solid ${({ theme }) => theme.colors.sage}; outline-offset: 4px; }
  img { display: block; max-width: 100%; }
  ::-webkit-scrollbar { width: 10px; }
  ::-webkit-scrollbar-track { background: ${({ theme }) => theme.colors.paper}; }
  ::-webkit-scrollbar-thumb { background: #cbd2c8; border: 3px solid ${({ theme }) => theme.colors.paper}; border-radius: 99px; }
  ::selection { background: ${({ theme }) => theme.colors.lime}; color: ${({ theme }) => theme.colors.ink}; }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { scroll-behavior: auto !important; animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
  }
`
