import { extendTheme } from "@chakra-ui/react"


const theme = extendTheme({
  components: {
    Button: {
      variants: {
        my: {
          bg: 'teal.400',
          borderRadius: 'full',
          transition: '0.2s',
          '_hover': {
            transform: 'scale(.95)',
            filter: 'brightness(.8)'
          },
          '_active': {
            transform: 'scale(1.05)'
          }
        }
      }
    }
  }
})


export default theme