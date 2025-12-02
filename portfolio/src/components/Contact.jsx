import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Button,
  HStack,
  Badge,
  SimpleGrid,
  Card,
  CardBody,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { FiGithub, FiLinkedin, FiMail, FiSend, FiMapPin } from 'react-icons/fi';
import { profile } from '../data/projects';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: profile.contact.github,
      icon: FiGithub,
      color: 'gray',
      description: 'Check out my code'
    },
    {
      name: 'LinkedIn',
      url: profile.contact.linkedin,
      icon: FiLinkedin,
      color: 'blue',
      description: 'Connect with me'
    },
    {
      name: 'Email',
      url: `mailto:${profile.contact.email}`,
      icon: FiMail,
      color: 'green',
      description: profile.contact.email
    }
  ];

  return (
    <Box
      as="section"
      id="contact"
      py={{ base: 20, md: 28 }}
      position="relative"
      overflow="hidden"
    >
      {/* Background accents */}
      <Box position="absolute" inset={0} overflow="hidden" pointerEvents="none">
        <Box
          position="absolute"
          w="500px"
          h="500px"
          bottom="-200px"
          right="-200px"
          borderRadius="full"
          bgGradient="radial(circle, purple.500 0%, purple.700 100%)"
          filter="blur(100px)"
          opacity={0.1}
        />
        <Box
          position="absolute"
          w="400px"
          h="400px"
          bottom="-150px"
          left="10%"
          borderRadius="full"
          bgGradient="radial(circle, cyan.500 0%, cyan.700 100%)"
          filter="blur(100px)"
          opacity={0.08}
        />
      </Box>
      
      <Container maxW="3xl" px={{ base: 6, md: 10, lg: 16 }} position="relative">
        <VStack spacing={12}>
          {/* Section Header */}
          <VStack spacing={4} textAlign="center">
            <Badge
              px={4}
              py={2}
              borderRadius="full"
              bg="whiteAlpha.50"
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="whiteAlpha.100"
              color="gray.400"
              textTransform="uppercase"
              letterSpacing="wider"
              fontSize="xs"
            >
              Get in Touch
            </Badge>
            <Heading
              as="h2"
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
              fontWeight="bold"
              color="white"
            >
              Let's Build Something{' '}
              <Box
                as="span"
                bgGradient="linear(to-r, purple.500, cyan.500)"
                bgClip="text"
              >
                Amazing
              </Box>
            </Heading>
            <Text color="gray.400" maxW="lg">
              I'm always open to discussing new projects, creative ideas, 
              or opportunities to be part of your vision.
            </Text>
          </VStack>

          {/* Contact Card */}
          <Card
            w="full"
            bg="whiteAlpha.50"
            backdropFilter="blur(20px) saturate(180%)"
            border="1px solid"
            borderColor="whiteAlpha.100"
            borderRadius="3xl"
            overflow="hidden"
          >
            <CardBody p={{ base: 6, sm: 8, md: 10 }}>
              <VStack spacing={10}>
                {/* Location */}
                <HStack
                  spacing={4}
                  flexWrap="wrap"
                  justify="center"
                  fontSize="sm"
                  color="gray.500"
                >
                  <HStack spacing={2}>
                    <Icon as={FiMapPin} />
                    <Text>São Paulo, Brazil</Text>
                  </HStack>
                  <Text display={{ base: 'none', sm: 'block' }} color="gray.700">•</Text>
                  <HStack spacing={2} color="brand.400">
                    <Box w={2} h={2} bg="brand.400" borderRadius="full" />
                    <Text>Available for Remote Work</Text>
                  </HStack>
                </HStack>

                {/* Social Links Grid */}
                <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={{ base: 4, sm: 5 }} w="full">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.name}
                      as="a"
                      href={link.url}
                      target={link.name !== 'Email' ? '_blank' : undefined}
                      rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                      h="auto"
                      p={6}
                      flexDir="column"
                      gap={4}
                      bg="whiteAlpha.50"
                      backdropFilter="blur(10px)"
                      border="1px solid"
                      borderColor="whiteAlpha.100"
                      borderRadius="xl"
                      _hover={{
                        transform: 'translateY(-4px)',
                        borderColor: `${link.color}.500`,
                        boxShadow: `0 4px 16px rgba(14, 165, 233, 0.1)`,
                      }}
                      transition="all 0.3s"
                    >
                      <Icon as={link.icon} w={7} h={7} color="gray.400" />
                      <VStack spacing={1} w="full" overflow="hidden">
                        <Heading as="h3" size="sm" color="white">
                          {link.name}
                        </Heading>
                        <Text fontSize="xs" color="gray.600" noOfLines={1} w="full" textAlign="center">
                          {link.description}
                        </Text>
                      </VStack>
                    </Button>
                  ))}
                </SimpleGrid>

                {/* CTA */}
                <Button
                  as="a"
                  href={`mailto:${profile.contact.email}?subject=Hello from your portfolio!`}
                  variant="primary"
                  size="lg"
                  leftIcon={<FiSend />}
                >
                  Send me a message
                </Button>
              </VStack>
            </CardBody>
          </Card>

          {/* Footer */}
          <VStack spacing={2} pt={8} borderTop="1px solid" borderColor="whiteAlpha.50">
            <Text color="gray.600" fontSize="sm">
              Designed & Built by{' '}
              <Box as="span" color="brand.400">{profile.name}</Box>
            </Text>
            <Text color="gray.700" fontSize="xs">
              © {new Date().getFullYear()} • All rights reserved
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;
