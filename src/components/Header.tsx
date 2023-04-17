import { Center, HStack, color} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import React from 'react'

const Header = () => {

  return (
    <Center alignItems='center'>
        <HStack pt='12px'>
            <ChakraLink as={NavLink} exact to="/" fontSize='22px' activeStyle={{color:'teal'}}>
                Home
            </ChakraLink>
            <ChakraLink as={NavLink} exact to="/converter" fontSize='22px' activeStyle={{color:'teal'}}>
                Converter
            </ChakraLink>
        </HStack>
    </Center>
  )
}

export default Header