import { Box, Text, Heading, VStack, Flex } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => (
  <Box p={4}>
    <Flex direction="column" align="center" justify="center" p={10}>
      <Heading mb={4}>About Our Store</Heading>
      <Text fontSize="lg" mb={6}>
        We are a leading retailer of top-notch electronics. From the latest smartphones to high-performance laptops, we have everything you need to stay connected and productive.
      </Text>
    </Flex>
    <Box bg="gray.100" p={10}>
      <Heading size="lg" textAlign="center" mb={4}>Why Shop With Us?</Heading>
      <VStack spacing={5}>
        <Flex align="center">
          <FaCheckCircle size="24px" />
          <Text ml={2}>Wide Range of Products</Text>
        </Flex>
        <Flex align="center">
          <FaCheckCircle size="24px" />
          <Text ml={2}>Competitive Prices</Text>
        </Flex>
        <Flex align="center">
          <FaCheckCircle size="24px" />
          <Text ml={2}>Excellent Customer Service</Text>
        </Flex>
      </VStack>
    </Box>
  </Box>
);

export default About;