import { Box, Container, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import { caseStudies } from '../data/projects';
import ProjectCard from './ProjectCard';

const FeaturedProjects = () => (
  <Box as="section" id="work" py={{ base: 20, md: 28 }} borderBottom="1px solid" borderColor="whiteAlpha.100">
    <Container maxW="7xl" px={{ base: 6, md: 10, lg: 16 }}>
      <Grid templateColumns={{ base: '1fr', xl: 'minmax(380px, .75fr) minmax(0, 1.25fr)' }} gap={{ base: 10, xl: 20 }} mb={{ base: 14, md: 20 }}>
        <Box>
          <Text className="section-index">02 / SELECTED WORK</Text>
          <Heading as="h2" className="section-heading" mt={5}>
            Systems with
            <Box as="span" display="block" color="brand.300">measurable behavior.</Box>
          </Heading>
        </Box>
        <VStack align="stretch" justify="flex-end" spacing={4}>
          <Text color="gray.300" fontSize={{ base: 'lg', md: 'xl' }} lineHeight="1.7" maxW="680px">
            Four projects selected for depth: production evaluation, product ownership, model deployment, and applied ML.
          </Text>
          <Text color="gray.600" fontSize="sm">
            Each case focuses on the engineering decisions behind the output—not a list of tools.
          </Text>
        </VStack>
      </Grid>

      <VStack align="stretch" spacing={5}>
        {caseStudies.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </VStack>
    </Container>
  </Box>
);

export default FeaturedProjects;
