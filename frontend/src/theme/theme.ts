// theme/index.js
import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import {styles} from './styles'

// Foundational style overrides
// import borders from './foundations/borders'

// Component style overrides
import {Button} from './components/button'
// import {Input} from './components/input'

const colors ={
    brand: {
        "primary": "#F28907",
        "bl1":"#AAC1E6",
        "bklight":"",
        "bkDark": "",
        "glass":"#FFFFFF10",
        "lightText":"#FFFFFF33"

    },
}

const Theme = extendTheme({

    colors,
    styles,
//   borders,
  // Other foundational style overrides go here
  components: {
    Button,
    // Other components go here
  },
})

export default Theme;