export const input = {
  baseStyle: {
    field: {
      fontSize: '1.3rem !important',
      py: '1.4rem',
      px: '1.4rem',
      rounded: '8px',
      borderWidth: '1px',
      borderColor: '#D1D1D6',
      bg: 'transparent',
      _placeholder: {
        color: 'brand.mutedText',
      },
      _invalid: {
        borderColor: 'brand.retroRed',
      },
      _focus: {
        bg: '#ffffff10',
      },
    },
  },
  sizes: {
    lg: {},
    md: {},
    sm: {
      py: '1.4rem',
      px: '1.2rem',
    },
  },
  variants: {
    message: {
      border: 'none',
      height: '100%',
    },
  },
  defaultProps: {
    // This is needed to clear the default chakra input styles
    variant: null,
    size: null,
  },
}
