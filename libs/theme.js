import { extendTheme } from '@chakra-ui/react'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light'
}

const colors = {
  navbarLogo: '#8FB339',
  color1: '#2F86A6',
  color2: '#34BE82',
  color3: '#2FDD92',
  color4: '#F2F013',
  color5: '#125C13',
  color6: '#3E7C17',
  color7: '#F4A442',
  color8: '#B2EA70',
  color9: '#1E6F5C',
  color10: '#289672',
  color11: '#29BB89',
  color12: '#E6DD3B',
  color13: '#8FB339'
}

const fonts = {
  heading: "'Poppins'"
}



const breakpoints = {
  sm: '320px',
  "2sm": "375px",
  md: '480px',
  lg: '600px',
  xl: '801px',
  '2xl': '1025px',
  '3xl': '1281px'
}


const theme = extendTheme({
  config,
  colors,
  fonts,
  breakpoints
})

export default theme
