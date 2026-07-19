import {
  Box,
  Container,
  Grid,
  Heading,
  HStack,
  Icon,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FiArrowUpRight, FiCode, FiGlobe } from 'react-icons/fi';
import { productEngineering, projectArchive } from '../data/projects';

const ProjectsGrid = () => (
  <Box as="section" id="projects" py={{ base: 20, md: 24 }} borderBottom="1px solid" borderColor="whiteAlpha.100">
    <Container maxW="7xl" px={{ base: 6, md: 10, lg: 16 }}>
      <Grid templateColumns={{ base: '1fr', xl: 'minmax(380px, .75fr) minmax(0, 1.25fr)' }} gap={{ base: 12, xl: 20 }}>
        <Box>
          <Text className="section-index">03 / MORE WORK</Text>
          <Heading as="h2" className="section-heading" mt={5}>
            A focused archive,
            <Box as="span" display="block" color="gray.500">not a project count.</Box>
          </Heading>
        </Box>

        <VStack align="stretch" spacing={16}>
          <Box>
            <HStack justify="space-between" mb={6}>
              <Text className="mono-label">AI / ML ARCHIVE</Text>
              <Text className="mono-label">{String(projectArchive.length).padStart(2, '0')} SYSTEMS</Text>
            </HStack>
            <VStack align="stretch" spacing={0} borderTop="1px solid" borderColor="whiteAlpha.100">
              {projectArchive.map((project) => (
                <Grid
                  as="a"
                  key={project.id}
                  href={project.repoUrl || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  templateColumns={{ base: '1fr auto', md: '150px minmax(180px, .7fr) 1fr auto' }}
                  gap={{ base: 4, md: 6 }}
                  alignItems="center"
                  py={6}
                  borderBottom="1px solid"
                  borderColor="whiteAlpha.100"
                  color="inherit"
                  _hover={{ bg: 'whiteAlpha.50' }}
                  transition="background .2s ease"
                >
                  <Text className="mono-label" color="brand.300">{project.category}</Text>
                  <Heading as="h3" size="sm">{project.title}</Heading>
                  <Text color="gray.500" fontSize="sm" lineHeight="1.7" display={{ base: 'none', md: 'block' }}>
                    {project.description}
                  </Text>
                  <Icon as={FiArrowUpRight} color="gray.600" />
                </Grid>
              ))}
            </VStack>
          </Box>

          <Box>
            <HStack spacing={3} mb={3}>
              <Icon as={FiCode} color="brand.300" />
              <Text className="mono-label">PRODUCT ENGINEERING</Text>
            </HStack>
            <Text color="gray.500" fontSize="sm" lineHeight="1.75" mb={7} maxW="680px">
              Selected non-AI work showing the same end-to-end tendency: product framing, interface, content structure, and delivery.
            </Text>

            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={5}>
              {productEngineering.map((project) => {
                const Wrapper = project.liveUrl ? 'a' : 'div';
                return (
                  <Box
                    as={Wrapper}
                    key={project.id}
                    {...(project.liveUrl
                      ? {
                          href: project.liveUrl,
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        }
                      : {})}
                    className="product-card"
                    opacity={project.unavailable ? 0.62 : 1}
                  >
                    <HStack justify="space-between" mb={7}>
                      <Text className="mono-label" color="brand.300">{project.label}</Text>
                      <Icon as={project.liveUrl ? FiArrowUpRight : FiGlobe} color="gray.600" />
                    </HStack>
                    <Heading as="h3" size="md" mb={3}>{project.title}</Heading>
                    <Text color="gray.500" fontSize="sm" lineHeight="1.75" mb={6}>{project.description}</Text>
                    <HStack spacing={2} flexWrap="wrap">
                      {project.technologies.map((technology) => (
                        <Tag key={technology} variant="technical">{technology}</Tag>
                      ))}
                      {project.unavailable && <Tag variant="technical">Link validation pending</Tag>}
                    </HStack>
                  </Box>
                );
              })}
            </Grid>
          </Box>
        </VStack>
      </Grid>
    </Container>
  </Box>
);

export default ProjectsGrid;
