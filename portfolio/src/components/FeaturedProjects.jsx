import { Box, Container, Text, VStack } from '@chakra-ui/react';
import { caseStudies } from '../data/projects';
import ProjectCard from './ProjectCard';

const FeaturedProjects = () => (
  <Box as="section" id="work" py={{ base: 12, md: 16 }} borderTop="1px solid" borderColor="gray.200">
    <Container maxW="3xl" px={{ base: 5, md: 6 }}>
      <VStack align="stretch" spacing={8}>
        <Box>
          <Text className="eyebrow" mb={3}>Selected work</Text>
          <Text color="gray.600" lineHeight="1.75">
            Four projects picked for depth: production evaluation, product ownership, model
            deployment, and applied ML. Each one focuses on the engineering decisions behind
            the result, not the tool list.
          </Text>
        </Box>

        <VStack align="stretch" spacing={5}>
          {caseStudies.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </VStack>
      </VStack>
    </Container>
  </Box>
);

export default FeaturedProjects;
