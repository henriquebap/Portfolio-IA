import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Button,
  HStack,
  IconButton,
  Badge,
} from '@chakra-ui/react';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiExternalLink } from 'react-icons/fi';
import { profile } from '../data/projects';

const Hero = () => {
  return (
    <Box
      as="section"
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      bg="#030712"
    >
      {/* Simple Background Orbs */}
      <Box position="absolute" inset={0} overflow="hidden" pointerEvents="none">
        <Box
          position="absolute"
          w="500px"
          h="500px"
          top="-200px"
          left="-200px"
          borderRadius="full"
          bgGradient="radial(circle, brand.500 0%, brand.700 100%)"
          filter="blur(100px)"
          opacity={0.15}
        />
        <Box
          position="absolute"
          w="400px"
          h="400px"
          top="50%"
          right="-150px"
          borderRadius="full"
          bgGradient="radial(circle, cyan.500 0%, cyan.700 100%)"
          filter="blur(100px)"
          opacity={0.15}
        />
        <Box
          position="absolute"
          w="350px"
          h="350px"
          bottom="-100px"
          left="25%"
          borderRadius="full"
          bgGradient="radial(circle, purple.500 0%, purple.700 100%)"
          filter="blur(100px)"
          opacity={0.15}
        />
      </Box>

      <Container maxW="4xl" px={6} py={20} position="relative">
        <VStack spacing={10} textAlign="center">
          {/* Status Badge */}
          <Badge
            display="inline-flex"
            alignItems="center"
            gap={2}
            px={4}
            py={2}
            fontSize="sm"
            fontWeight="500"
            bg="whiteAlpha.50"
            backdropFilter="blur(10px)"
            border="1px solid"
            borderColor="brand.500"
            borderRadius="full"
            color="brand.400"
          >
            <Box w={2} h={2} bg="brand.400" borderRadius="full" animation="pulse 2s ease-in-out infinite" />
            Available for new opportunities
          </Badge>

          {/* Name */}
          <Heading
            as="h1"
            fontSize={{ base: '5xl', sm: '6xl', md: '7xl', lg: '8xl' }}
            fontWeight="bold"
            letterSpacing="tight"
            lineHeight="1.1"
          >
            <Box as="span" color="white">{profile.name.split(' ')[0]}</Box>
            <br />
            <Box
              as="span"
              bgGradient="linear(to-r, brand.500, cyan.500)"
              bgClip="text"
            >
              {profile.name.split(' ')[1]}
            </Box>
          </Heading>

          {/* Title */}
          <Text
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            fontWeight="medium"
            color="gray.200"
          >
            AI Engineer
          </Text>

          {/* Tagline */}
          <Text
            fontSize={{ base: 'lg', sm: 'xl' }}
            color="gray.400"
            maxW="2xl"
            lineHeight="relaxed"
          >
            {profile.tagline}
          </Text>

          {/* CTA Buttons */}
          <HStack spacing={6} flexWrap="wrap" justify="center">
            <Button
              as="a"
              href="#featured"
              variant="primary"
              size="lg"
              leftIcon={<FiExternalLink />}
            >
              View My Work
            </Button>
            <Button
              as="a"
              href="#contact"
              variant="glass"
              size="lg"
              leftIcon={<FiMail />}
            >
              Get in Touch
            </Button>
          </HStack>

          {/* Social Links */}
          <HStack spacing={4} pt={8}>
            <IconButton
              as="a"
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              icon={<FiGithub size={24} />}
              variant="ghost"
              size="lg"
              w={14}
              h={14}
              borderRadius="xl"
              bg="whiteAlpha.50"
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="whiteAlpha.100"
              color="gray.400"
              _hover={{
                color: 'white',
                borderColor: 'brand.500',
                bg: 'brand.500',
                bgOpacity: 0.1,
                transform: 'translateY(-2px)',
              }}
              transition="all 0.2s"
            />
            <IconButton
              as="a"
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              icon={<FiLinkedin size={24} />}
              variant="ghost"
              size="lg"
              w={14}
              h={14}
              borderRadius="xl"
              bg="whiteAlpha.50"
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="whiteAlpha.100"
              color="gray.400"
              _hover={{
                color: 'white',
                borderColor: 'brand.500',
                bg: 'brand.500',
                bgOpacity: 0.1,
                transform: 'translateY(-2px)',
              }}
              transition="all 0.2s"
            />
            <IconButton
              as="a"
              href={`mailto:${profile.contact.email}`}
              aria-label="Email"
              icon={<FiMail size={24} />}
              variant="ghost"
              size="lg"
              w={14}
              h={14}
              borderRadius="xl"
              bg="whiteAlpha.50"
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="whiteAlpha.100"
              color="gray.400"
              _hover={{
                color: 'white',
                borderColor: 'brand.500',
                bg: 'brand.500',
                bgOpacity: 0.1,
                transform: 'translateY(-2px)',
              }}
              transition="all 0.2s"
            />
          </HStack>
        </VStack>
      </Container>

      {/* Scroll Indicator */}
      <Box
        as="a"
        href="#about"
        position="absolute"
        bottom={6}
        left="50%"
        transform="translateX(-50%)"
        display="flex"
        flexDir="column"
        alignItems="center"
        color="gray.600"
        _hover={{ color: 'gray.400' }}
        transition="color 0.2s"
        animation="bounce 2s ease-in-out infinite"
      >
        <Text fontSize="xs" fontWeight="medium" textTransform="uppercase" letterSpacing="wider" mb={2}>
          Scroll
        </Text>
        <FiArrowDown size={16} />
      </Box>
    </Box>
  );
};

export default Hero;
