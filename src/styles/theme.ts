import { extendTheme } from '@chakra-ui/react'
import { button, container, input } from './components'
import { colors } from './foundation'
import { styles } from './global'

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors,
  styles,
  components: {
    Button: button,
    Container: container,
    Input: input,
  },
})
