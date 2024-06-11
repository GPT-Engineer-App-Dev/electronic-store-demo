import { Container, Text, VStack, Box, Heading, SimpleGrid, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading>Welcome to ElectroShop</Heading>
        <Text>Your one-stop shop for the latest electronics</Text>
        <Box bg="gray.100" p={5} borderRadius="md">
          <Heading size="md" mb={4}>Featured Products</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src="/images/smartphone.jpg" alt="Smartphone" boxSize="200px" mx="auto" />
              <VStack spacing={2} mt={4}>
                <Text fontWeight="bold" fontSize="xl">Smartphone</Text>
                <Text>Latest model with advanced features</Text>
                <Text color="blue.500" fontSize="xl">$799</Text>
              </VStack>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src="/images/laptop.jpg" alt="Laptop" boxSize="200px" mx="auto" />
              <VStack spacing={2} mt={4}>
                <Text fontWeight="bold" fontSize="xl">Laptop</Text>
                <Text>High-performance laptop for professionals</Text>
                <Text color="blue.500" fontSize="xl">$1299</Text>
              </VStack>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src="/images/headphones.jpg" alt="Headphones" boxSize="200px" mx="auto" />
              <VStack spacing={2} mt={4}>
                <Text fontWeight="bold" fontSize="xl">Headphones</Text>
                <Text>Noise-cancelling headphones with superior sound quality</Text>
                <Text color="blue.500" fontSize="xl">$199</Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;