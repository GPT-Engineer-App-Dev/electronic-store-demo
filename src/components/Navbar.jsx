import { Box, Flex, Link, Spacer, Heading } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => (
  <Box bg="blue.500" p={4} color="white">
    <Flex align="center">
      <Heading size="lg">ElectroShop</Heading>
      <Spacer />
      <Flex>
        <Link as={RouterLink} to="/" p={2} mx={2} _hover={{ textDecoration: 'none', bg: 'blue.600' }}>Home</Link>
        <Link as={RouterLink} to="/about" p={2} mx={2} _hover={{ textDecoration: 'none', bg: 'blue.600' }}>About</Link>
        <Link as={RouterLink} to="/products" p={2} mx={2} _hover={{ textDecoration: 'none', bg: 'blue.600' }}>Products</Link>
        <Link as={RouterLink} to="/contact" p={2} mx={2} _hover={{ textDecoration: 'none', bg: 'blue.600' }}>Contact</Link>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;