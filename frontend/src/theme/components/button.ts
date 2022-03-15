import { ComponentStyleConfig } from "@chakra-ui/react"

export const Button: ComponentStyleConfig = {

    baseStyle:{
        _focus:{
            boxShadow: "none",
          }
    },
    // 3. We can add a new visual variant
    // variants: {
    // 'just-outline': {
    //     boxShadow: '0 0 2px 2px #efdfde',
    //     outline: 'none',
    //     _hover:{
    //         bg:"#99999977"
    //     },
        
    // },
    // // 4. We can override existing variants
    // solid: (props) => ({
    //     bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
    // }),
    // }
}