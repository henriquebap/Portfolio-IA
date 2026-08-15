import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { profile } from '../data/projects';
import Reveal from './Reveal';

const principles = [
  {
    title: 'Define quality before shipping',
    text: 'Evaluation datasets, explicit failure modes, and metrics that connect model behavior to product risk.',
  },
  {
    title: 'Design the whole system',
    text: 'Models are one layer. Data workflows, APIs, fallbacks, observability, and UX decide whether AI actually works.',
  },
  {
    title: 'Own the production loop',
    text: 'Build, measure, inspect failures, improve, repeat. Always with cost, latency, and maintainability in view.',
  },
];

const About = () => (
  <Box as="section" id="about" py={{ base: 12, md: 16 }} borderTop="1px solid" borderColor="gray.200">
    <Container maxW="3xl" px={{ base: 5, md: 6 }}>
      <Reveal>
      <VStack align="stretch" spacing={8}>
        <Text className="eyebrow">About</Text>

        <Text fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.75" color="gray.800">
          {profile.about}
        </Text>
        <Text color="gray.600" lineHeight="1.75">
          {profile.aboutExtended}
        </Text>

        <VStack align="stretch" spacing={5} pt={2}>
          {principles.map((principle) => (
            <Box key={principle.title}>
              <Heading as="h3" fontSize="md" fontWeight={600} mb={1}>
                {principle.title}
              </Heading>
              <Text color="gray.600" fontSize="sm" lineHeight="1.7">
                {principle.text}
              </Text>
            </Box>
          ))}
        </VStack>

        <Box pt={2}>
          <Heading as="h3" fontSize="md" fontWeight={600} mb={3}>
            Experience & education
          </Heading>
          <VStack align="stretch" spacing={2} fontSize="sm" color="gray.600">
            <Text>ML / AI Engineer, production medical AI systems (Feb 2025 to Jul 2026)</Text>
            <Text>{profile.education}</Text>
            <Text>{profile.educationBachelor}</Text>
          </VStack>
        </Box>
      </VStack>
      </Reveal>
    </Container>
  </Box>
);

export default About;
