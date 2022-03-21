import { ComponentStyleConfig } from "@chakra-ui/react"

export const Button: ComponentStyleConfig = {

    baseStyle:{
        _focus:{
            boxShadow: "none",
          }
    },
    // 3. We can add a new visual variant
    variants: {
        'primary': {
            bg:"brand.primary", 
            color:"white",
            outline: 'none',
            _hover:{ bg: '#F2AF00' }
        },
        'secondary':{
            bg:"brand.bl1", 
            color:"white",  
            _hover:{ bg: '#89a1c7' }
        }
    }
        
    // },
    // // 4. We can override existing variants
    // solid: (props) => ({
    //     bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
    // }),
    // }
}