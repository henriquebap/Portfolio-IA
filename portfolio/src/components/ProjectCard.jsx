import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Link,
  Tag,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import ProjectModal from './ProjectModal';

const ProjectCard = ({ project }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        as="article"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="8px"
        p={{ base: 5, md: 6 }}
        transition="border-color 0.15s ease"
        _hover={{ borderColor: 'gray.400' }}
      >
        <VStack align="stretch" spacing={4}>
          <HStack justify="space-between" align="start" spacing={4}>
            <Box>
              <Text fontSize="xs" fontWeight={600} color="gray.500" textTransform="uppercase" letterSpacing="0.04em" mb={1}>
                {project.eyebrow}
              </Text>
              <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} fontWeight={700}>
                {project.title}
              </Heading>
              <Text color="gray.500" fontSize="sm" mt={1}>{project.role}</Text>
            </Box>
          </HStack>

          <Text color="gray.700" fontSize="sm" lineHeight="1.7">
            {project.shortDescription}
          </Text>

          {project.metrics && (
            <HStack spacing={5} flexWrap="wrap">
              {project.metrics.map((metric) => (
                <Box key={metric.label}>
                  <Text fontWeight={700} fontSize="md" as="span">{metric.value}</Text>
                  <Text as="span" color="gray.500" fontSize="sm"> {metric.label}</Text>
                </Box>
              ))}
            </HStack>
          )}

          <HStack spacing={2} flexWrap="wrap">
            {project.technologies.slice(0, 6).map((technology) => (
              <Tag key={technology} variant="technical" size="sm">{technology}</Tag>
            ))}
          </HStack>

          <HStack spacing={4} pt={1}>
            <Button onClick={onOpen} variant="textLink" size="sm" rightIcon={<FiArrowUpRight />}>
              Read the full story
            </Button>
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                fontSize="sm"
                color="gray.600"
                display="inline-flex"
                alignItems="center"
                gap={1}
                _hover={{ color: 'accent.600' }}
              >
                Live <Icon as={FiArrowUpRight} />
              </Link>
            )}
            {project.repoUrl && (
              <Link
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                fontSize="sm"
                color="gray.600"
                display="inline-flex"
                alignItems="center"
                gap={1}
                _hover={{ color: 'accent.600' }}
              >
                <Icon as={FiGithub} /> Code
              </Link>
            )}
          </HStack>
        </VStack>
      </Box>
      <ProjectModal isOpen={isOpen} onClose={onClose} project={project} />
    </>
  );
};

export default ProjectCard;
