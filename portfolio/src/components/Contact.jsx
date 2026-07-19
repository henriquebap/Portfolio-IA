import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Button,
  HStack,
  SimpleGrid,
  Card,
  CardBody,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { FiGithub, FiLinkedin, FiMail, FiSend, FiMapPin, FiDownload } from 'react-icons/fi';
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
    },
    {
      name: 'Resume',
      url: '/cv-henrique-baptista.pdf',
      icon: FiDownload,
      color: 'purple',
      description: 'Download CV (PDF)',
      download: true
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
      <Container maxW="6xl" px={{ base: 6, md: 10, lg: 16 }} position="relative">
        <VStack spacing={12}>
          {/* Section Header */}
          <VStack spacing={4} textAlign="center">
            <Text className="section-index">05 / CONTACT</Text>
            <Heading
              as="h2"
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
              fontWeight="bold"
              color="white"
              letterSpacing="-0.045em"
            >
              Build something that
              <Box as="span" display="block" color="brand.300">has to work.</Box>
            </Heading>
            <Text color="gray.400" maxW="lg">
              Open to AI Engineer opportunities and conversations about reliable,
              production-grade AI systems.
            </Text>
          </VStack>

          {/* Contact Card */}
          <Card
            w="full"
            bg="#07101d"
            border="1px solid"
            borderColor="whiteAlpha.100"
            borderRadius="4px"
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
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={{ base: 4, sm: 5 }} w="full">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.name}
                      as="a"
                      href={link.url}
                      target={!link.download && link.name !== 'Email' ? '_blank' : undefined}
                      rel={!link.download && link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                      download={link.download || undefined}
                      h="auto"
                      p={6}
                      flexDir="column"
                      gap={4}
                      bg="transparent"
                      border="1px solid"
                      borderColor="whiteAlpha.100"
                      borderRadius="2px"
                      _hover={{
                        transform: 'translateY(-4px)',
                        borderColor: `${link.color}.500`,
                        boxShadow: `0 4px 16px rgba(14, 165, 233, 0.1)`,
                      }}
                      transition="all 0.3s"
                    >
                      <Icon as={link.icon} w={7} h={7} color="gray.400" />
                      <VStack spacing={1} w="full">
                        <Heading as="h3" size="sm" color="white" textAlign="center">
                          {link.name}
                        </Heading>
                        <Text fontSize="xs" color="gray.600" textAlign="center" wordBreak="break-word">
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
