import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  FiArrowDownRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from 'react-icons/fi';
import { profile, proofPoints } from '../data/projects';

const Hero = () => (
  <Box
    as="section"
    id="top"
    minH="100svh"
    display="flex"
    alignItems="center"
    position="relative"
    overflow="hidden"
    borderBottom="1px solid"
    borderColor="whiteAlpha.100"
  >
    <Box className="hero-grid" position="absolute" inset={0} pointerEvents="none" />
    <Box className="hero-glow" position="absolute" pointerEvents="none" />

    <Container maxW="7xl" px={{ base: 6, md: 10, lg: 16 }} py={{ base: 28, lg: 32 }} position="relative">
      <Grid templateColumns={{ base: '1fr', lg: 'minmax(0, 1.25fr) minmax(340px, .75fr)' }} gap={{ base: 14, lg: 20 }} alignItems="center">
        <VStack align="stretch" spacing={8}>
          <HStack spacing={3} flexWrap="wrap">
            <Badge variant="signal">AVAILABLE FOR OPPORTUNITIES</Badge>
            <Text className="mono-label">SÃO PAULO · REMOTE</Text>
          </HStack>

          <Box>
            <Text className="mono-label" mb={5}>
              HENRIQUE BAPTISTA / {profile.title.toUpperCase()}
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: '4xl', sm: '5xl', md: '6xl', lg: '7xl' }}
              lineHeight={{ base: 1.04, md: 0.98 }}
              letterSpacing="-0.055em"
              maxW="900px"
            >
              Reliable AI,
              <Box as="span" display="block" color="brand.300">
                built for the real world.
              </Box>
            </Heading>
          </Box>

          <Text fontSize={{ base: 'lg', md: 'xl' }} lineHeight="1.8" color="gray.300" maxW="720px">
            {profile.tagline}
          </Text>

          <HStack spacing={4} flexWrap="wrap">
            <Button as="a" href="#work" variant="primary" size="lg" rightIcon={<FiArrowDownRight />}>
              Explore selected work
            </Button>
            <Button
              as="a"
              href="/cv-henrique-baptista.pdf"
              download
              variant="outlineSignal"
              size="lg"
              leftIcon={<FiDownload />}
            >
              Download CV
            </Button>
          </HStack>

          <HStack spacing={5} pt={2} flexWrap="wrap">
            {[
              { label: 'GitHub', href: profile.contact.github, icon: FiGithub },
              { label: 'LinkedIn', href: profile.contact.linkedin, icon: FiLinkedin },
              { label: 'Email', href: `mailto:${profile.contact.email}`, icon: FiMail },
            ].map((link) => (
              <Box
                as="a"
                key={link.label}
                href={link.href}
                target={link.label === 'Email' ? undefined : '_blank'}
                rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
                display="inline-flex"
                alignItems="center"
                gap={2}
                color="gray.400"
                fontSize="sm"
                _hover={{ color: 'white' }}
                transition="color .2s ease"
              >
                <Icon as={link.icon} />
                {link.label}
              </Box>
            ))}
          </HStack>
        </VStack>

        <Box className="signal-panel">
          <HStack justify="space-between" mb={8}>
            <Text className="mono-label" color="brand.300">
              PRODUCTION SIGNALS
            </Text>
            <HStack spacing={2}>
              <Box w="7px" h="7px" borderRadius="full" bg="green.300" boxShadow="0 0 14px rgba(110, 231, 183, .8)" />
              <Text className="mono-label">ONLINE</Text>
            </HStack>
          </HStack>

          <SimpleGrid columns={2} spacing={0} borderTop="1px solid" borderLeft="1px solid" borderColor="whiteAlpha.100">
            {proofPoints.map((point) => (
              <Box key={point.label} p={{ base: 5, md: 6 }} borderRight="1px solid" borderBottom="1px solid" borderColor="whiteAlpha.100">
                <Heading size="lg" color="white" mb={2} letterSpacing="-0.04em">
                  {point.value}
                </Heading>
                <Text color="gray.500" fontSize="xs" lineHeight="1.6">
                  {point.label}
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          <VStack align="stretch" spacing={0} mt={8}>
            {[
              ['QUALITY', 'Evals · failure analysis · QA'],
              ['SYSTEMS', 'Python · APIs · data pipelines'],
              ['DELIVERY', 'Docker · cloud · user-facing product'],
            ].map(([label, value]) => (
              <Grid key={label} templateColumns="90px 1fr" py={4} borderBottom="1px solid" borderColor="whiteAlpha.100">
                <Text className="mono-label" color="gray.600">{label}</Text>
                <Text color="gray.300" fontSize="sm">{value}</Text>
              </Grid>
            ))}
          </VStack>
        </Box>
      </Grid>
    </Container>

    <Box
      as="a"
      href="#about"
      aria-label="Scroll to About section"
      position="absolute"
      bottom={7}
      left={{ base: 6, md: 10, lg: 16 }}
      display={{ base: 'none', md: 'inline-flex' }}
      alignItems="center"
      gap={2}
      className="mono-label"
      _hover={{ color: 'brand.300' }}
    >
      01 / ABOUT <FiArrowDownRight aria-hidden="true" />
    </Box>
  </Box>
);

export default Hero;
