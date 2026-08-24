import { useEffect, useState } from 'react';
import { Box, Container, Text, VStack } from '@chakra-ui/react';
import { caseStudies } from '../data/projects';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';

const FeaturedProjects = () => {
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    const applyHash = () => {
      const id = window.location.hash.slice(1);
      if (caseStudies.some((project) => project.id === id)) {
        setOpenId(id);
      }
    };
    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  const openProject = (id) => {
    setOpenId(id);
    window.history.replaceState(null, '', `#${id}`);
  };

  const closeProject = () => {
    setOpenId(null);
    window.history.replaceState(null, '', window.location.pathname);
  };

  return (
    <Box as="section" id="work" py={{ base: 12, md: 16 }} borderTop="1px solid" borderColor="gray.200">
      <Container maxW="3xl" px={{ base: 5, md: 6 }}>
        <VStack align="stretch" spacing={8}>
          <Reveal>
            <Box>
              <Text className="eyebrow" mb={3}>Selected work</Text>
              <Text color="gray.600" lineHeight="1.75">
                Five projects, told the same way: the problem, the decisions behind the solution,
                and what shipped.
              </Text>
            </Box>
          </Reveal>

          <VStack align="stretch" spacing={5}>
            {caseStudies.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.05}>
                <ProjectCard
                  project={project}
                  isOpen={openId === project.id}
                  onOpen={() => openProject(project.id)}
                  onClose={closeProject}
                />
              </Reveal>
            ))}
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default FeaturedProjects;
