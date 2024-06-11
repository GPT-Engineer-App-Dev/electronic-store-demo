import { Box, Heading, SimpleGrid, Image, Text, VStack } from '@chakra-ui/react';

const products = [
  {
    id: 1,
    name: 'Smartphone',
    description: 'Latest model with advanced features',
    price: '$799',
    imageUrl: '/images/smartphone.jpg'
  },
  {
    id: 2,
    name: 'Laptop',
    description: 'High-performance laptop for professionals',
    price: '$1299',
    imageUrl: '/images/laptop.jpg'
  },
  {
    id: 3,
    name: 'Headphones',
    description: 'Noise-cancelling headphones with superior sound quality',
    price: '$199',
    imageUrl: '/images/headphones.jpg'
  }
];

const Products = () => (
  <Box p={4}>
    <Heading mb={6} textAlign="center">Our Products</Heading>
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
      {products.map(product => (
        <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
          <Image src={product.imageUrl} alt={product.name} boxSize="200px" mx="auto" />
          <VStack spacing={4} mt={4}>
            <Text fontWeight="bold" fontSize="xl">{product.name}</Text>
            <Text>{product.description}</Text>
            <Text color="blue.500" fontSize="xl">{product.price}</Text>
          </VStack>
        </Box>
      ))}
    </SimpleGrid>
  </Box>
);

export default Products;