import { Box, Container, Heading, HStack, Icon, Link, Tag, Text, VStack } from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';
import { productEngineering, projectArchive } from '../data/projects';

const ProjectsGrid = () => (
  <Box as="section" id="projects" py={{ base: 12, md: 16 }} borderTop="1px solid" borderColor="gray.200">
    <Container maxW="3xl" px={{ base: 5, md: 6 }}>
      <VStack align="stretch" spacing={10}>
        <Box>
          <Text className="eyebrow" mb={3}>Archive</Text>
          <Text color="gray.600" lineHeight="1.75">
            Smaller experiments and earlier work, kept short on purpose.
          </Text>
        </Box>

        <VStack align="stretch" spacing={0} borderTop="1px solid" borderColor="gray.200">
          {projectArchive.map((project) => (
            <Link
              key={project.id}
              href={project.repoUrl || undefined}
              target="_blank"
              rel="noopener noreferrer"
              display="block"
              py={4}
              borderBottom="1px solid"
              borderColor="gray.200"
              _hover={{ textDecoration: 'none', bg: 'gray.50' }}
            >
              <HStack justify="space-between" align="start" spacing={4}>
                <Box>
                  <HStack spacing={3} mb={1} flexWrap="wrap">
                    <Heading as="h3" fontSize="sm" fontWeight={600}>{project.title}</Heading>
                    <Text fontSize="xs" color="gray.500">{project.category}</Text>
                  </HStack>
                  <Text color="gray.600" fontSize="sm" lineHeight="1.6">
                    {project.description}
                  </Text>
                </Box>
                <Icon as={FiArrowUpRight} color="gray.400" mt={1} flexShrink={0} />
              </HStack>
            </Link>
          ))}
        </VStack>

        <Box>
          <Heading as="h3" fontSize="md" fontWeight={600} mb={2}>
            Product engineering
          </Heading>
          <Text color="gray.600" fontSize="sm" lineHeight="1.7" mb={5}>
            Non-AI work with the same end-to-end habit: product framing, interface, content, and delivery.
          </Text>

          <VStack align="stretch" spacing={4}>
            {productEngineering.map((project) => (
              <Box
                key={project.id}
                as={project.liveUrl ? 'a' : 'div'}
                {...(project.liveUrl
                  ? { href: project.liveUrl, target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                border="1px solid"
                borderColor="gray.200"
                borderRadius="8px"
                p={5}
                display="block"
                transition="border-color 0.15s ease"
                _hover={project.liveUrl ? { borderColor: 'gray.400' } : {}}
              >
                <HStack justify="space-between" mb={2}>
                  <Heading as="h4" fontSize="sm" fontWeight={600}>{project.title}</Heading>
                  {project.liveUrl && <Icon as={FiArrowUpRight} color="gray.400" />}
                </HStack>
                <Text color="gray.600" fontSize="sm" lineHeight="1.6" mb={3}>
                  {project.description}
                </Text>
                <HStack spacing={2} flexWrap="wrap">
                  {project.technologies.map((technology) => (
                    <Tag key={technology} variant="technical" size="sm">{technology}</Tag>
                  ))}
                </HStack>
              </Box>
            ))}
          </VStack>
        </Box>
      </VStack>
    </Container>
  </Box>
);

export default ProjectsGrid;
