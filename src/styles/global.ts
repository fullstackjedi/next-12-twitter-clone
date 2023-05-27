export const styles = {
  global: {
    '*:focus': {
      boxShadow: 'none !important',
    },

    '*[data-focus]': {
      boxShadow: 'none !important',
    },

    html: {
      fontSize: '62.5%', // 1rem = 10px
    },

    body: {
      fontSize: '1.4rem',
      scrollbarWidth: 'none',
      fontFamily: 'var(--font-inter)',
      color: '#fff',

      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },

    a: {
      _hover: {
        textDecoration: 'none',
      },
    },

    // browser autofill overrides
    'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active':
      {
        WebkitBoxShadow: '0 0 0 40px #ffffff00 inset !important',
        boxShadow: '0 0 0 40px #ffffff00 inset !important',
      },
  },
}
