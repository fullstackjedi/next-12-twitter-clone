export const button = {
  baseStyle: {
    borderRadius: '8px',
    fontWeight: 'medium',
    _focus: {
      boxShadow: 'none',
      outline: 'none'
    },

    '& span': {
      display: 'flex',
      alignItems: 'center'
    }
  },
  sizes: {
    md: {
      fontSize: '1.4rem',
      px: '3rem',
      h: '5rem'
    },
    sm: {
      fontSize: '1.2rem',
      fontWeight: 'medium',
      px: '1rem',
      h: '4rem'
    }
  },
  variants: {
    transparent: {
      bg: 'transparent',
      _hover: {
        bg: 'brand.fadedWhite'
      }
    },
    purple: {
      bg: 'brand.darkPurple',
      color: 'white',
      _hover: {
        _disabled: {
          bg: 'brand.darkPurple'
        }
      }
    },
    grey: {
      bg: 'brand.fadedWhite',
      color: 'white',
      _hover: {
        _disabled: {
          bg: 'brand.fadedWhite'
        }
      }
    },
    greyOutline: {
      border: '2px solid',
      borderColor: 'brand.fadedWhite',
      bg: 'transparent',
      color: 'white',
      _hover: {
        _disabled: {
          // bg: 'brand.fadedWhite'
        }
      }
    }
  },
  defaultProps: {
    variant: 'purple',
    size: 'md'
  }
}
