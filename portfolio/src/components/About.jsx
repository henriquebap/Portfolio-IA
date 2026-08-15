import {
  Box,
  Container,
  Grid,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FiCheck, FiCpu, FiLayers, FiTool } from 'react-icons/fi';
import { profile } from '../data/projects';

const principles = [
  {
    icon: FiCheck,
    title: 'Define quality before shipping',
    text: 'Evaluation datasets, explicit failure modes, and metrics that connect model behavior to product risk.',
  },
  {
    icon: FiLayers,
    title: 'Design the whole system',
    text: 'Models are one layer. Data workflows, APIs, fallbacks, observability, and UX determine whether AI works.',
  },
  {
    icon: FiTool,
    title: 'Own the production loop',
    text: 'Build, measure, inspect failures, improve, and repeat—with cost, latency, and maintainability in view.',
  },
];

const About = () => (
  <Box as="section" id="about" py={{ base: 20, md: 28 }} borderBottom="1px solid" borderColor="whiteAlpha.100">
    <Container maxW="7xl" px={{ base: 6, md: 10, lg: 16 }}>
      <Grid templateColumns={{ base: '1fr', xl: 'minmax(380px, .75fr) minmax(0, 1.25fr)' }} gap={{ base: 12, xl: 20 }}>
        <Box>
          <Text className="section-index">01 / ABOUT</Text>
          <Heading as="h2" className="section-heading" mt={5}>
            Engineering judgment,
            <Box as="span" display="block" color="gray.500">not just model access.</Box>
          </Heading>
        </Box>

        <VStack align="stretch" spacing={12}>
          <Text fontSize={{ base: 'xl', md: '2xl' }} lineHeight="1.65" color="gray.200" letterSpacing="-0.02em">
            {profile.about}
          </Text>
          <Text color="gray.400" lineHeight="1.9" maxW="780px">
            {profile.aboutExtended}
          </Text>

          <VStack align="stretch" spacing={0} borderTop="1px solid" borderColor="whiteAlpha.100">
            {principles.map((principle, index) => (
              <Grid
                key={principle.title}
                templateColumns={{ base: '44px 1fr', md: '70px minmax(210px, .8fr) 1.2fr' }}
                gap={{ base: 4, md: 8 }}
                alignItems="start"
                py={7}
                borderBottom="1px solid"
                borderColor="whiteAlpha.100"
              >
                <HStack spacing={3}>
                  <Text className="mono-label">0{index + 1}</Text>
                  <Icon as={principle.icon} color="brand.300" />
                </HStack>
                <Heading as="h3" size="sm" color="white" pt={1}>
                  {principle.title}
                </Heading>
                <Text color="gray.500" fontSize="sm" lineHeight="1.75" gridColumn={{ base: '2', md: 'auto' }}>
                  {principle.text}
                </Text>
              </Grid>
            ))}
          </VStack>

          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={5}>
            <Box className="credential-card">
              <HStack spacing={3} mb={4}>
                <Icon as={FiCpu} color="brand.300" />
                <Text className="mono-label">EXPERIENCE</Text>
              </HStack>
              <Heading as="h3" size="sm" mb={2}>ML / AI Engineer</Heading>
              <Text color="gray.500" fontSize="sm">Production medical AI systems · Feb 2025—Jul 2026</Text>
            </Box>
            <Box className="credential-card">
              <HStack spacing={3} mb={4}>
                <Icon as={FiLayers} color="brand.300" />
                <Text className="mono-label">EDUCATION</Text>
              </HStack>
              <Heading as="h3" size="sm" mb={2}>Machine Learning Engineering · FIAP</Heading>
              <Text color="gray.500" fontSize="sm">Postgraduate program completed Mar 2026</Text>
            </Box>
          </Grid>
        </VStack>
      </Grid>
    </Container>
  </Box>
);

export default About;
