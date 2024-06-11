import { Box, Text, Heading, VStack, Input, Textarea, Button } from '@chakra-ui/react';

const Contact = () => (
  <Box p={4}>
    <Heading mb={4} textAlign="center">Contact Us</Heading>
    <VStack spacing={4} align="center">
      <Text fontSize="lg">We'd love to hear from you! Please fill out the form below to get in touch with us.</Text>
      <Input placeholder="Your Name" />
      <Input placeholder="Your Email" type="email" />
      <Textarea placeholder="Your Message" />
      <Button colorScheme="blue">Send Message</Button>
    </VStack>
  </Box>
);

export default Contact;