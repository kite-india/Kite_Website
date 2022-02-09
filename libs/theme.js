import { extendTheme } from '@chakra-ui/react'

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
  color12: '#E6DD3B'
}

const fonts = {
  heading: "'Poppins'"
}

const theme = extendTheme({
  colors,
  fonts
})

export default theme
