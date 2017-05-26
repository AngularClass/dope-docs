export const constants = {
  maxZ: 9999999
}

export const sizes = {
  sidbarWidth: '15em',
  fullHeight: '100vh',
  navbarHeight: '20px',
  mobileNavHeight: '275px'
}

export const colors = {
  white: '#FAFAFA',
  main: '#E91E63',
  mainDark: '#C2185B',
  accent: '#AB47BC',
  accentDark: '#6A1B9A'
}

export const fonts = {
  sizes: {
    small: '.8rem',
    regular: '1rem',
    large: '1.5rem',
    xlarge: '2rem'
  },
  thickness: {
    lightest: 100,
    light: 300,
    regular: 500,
    bold: 700
  }
}

export const media = {
  greaterThanPhone(styles) {
    return `@media only screen and (min-width: 620px){
      ${styles}
    }`
  },
  tablet(styles) {
    return `@media only screen and (min-width: 620px) and (max-width: 1024px) {
      ${styles}
    }`
  },
  desktop(styles){
    return `@media only screen and (min-width: 1025px) and (max-width: 1200px) {
      ${styles}
    }`
  },
  monitor(styles) {
    return `@media only screen and (min-width: 1201px) {
      ${styles}
    }`
  },
  phone(styles) {
    return `@media only screen and (max-width: 619px) {
      ${styles}
    }`
  }
}
