// theme/index.js
import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import {styles} from './styles'

// Foundational style overrides
// import borders from './foundations/borders'

// Component style overrides
// import Button from './components/button'

const colours ={
    brand: {
        100: "#f7fafc",
        // ...
        900: "#1a202c",
    },
}

const overrides = {
    colours,
    styles,
//   borders,
  // Other foundational style overrides go here
//   components: {
//     Button,
//     // Other components go here
//   },
}

export default extendTheme(overrides)