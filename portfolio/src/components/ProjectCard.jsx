import {
  Badge,
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Tag,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { FiArrowUpRight, FiGithub, FiLock } from 'react-icons/fi';
import {
  TbBike,
  TbChartLine,
  TbHeartbeat,
  TbMicrophone,
  TbSparkles,
} from 'react-icons/tb';
import ProjectModal from './ProjectModal';

const projectIcons = {
  transcription: TbMicrophone,
  medical: TbHeartbeat,
  health: TbSparkles,
  stock: TbChartLine,
  bike: TbBike,
};

const accentBackgrounds = {
  amber: 'rgba(180, 83, 9, .16)',
  blue: 'rgba(37, 99, 235, .16)',
  cyan: 'rgba(8, 145, 178, .16)',
  green: 'rgba(5, 150, 105, .16)',
  purple: 'rgba(126, 34, 206, .16)',
};

const ProjectCard = ({ project }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ProjectIcon = projectIcons[project.icon] || TbSparkles;
  const accent = project.accent || 'blue';

  return (
    <>
      <Box
        as="article"
        className="case-study"
      >
        <Grid
          templateColumns={{ base: '1fr', xl: '86px minmax(0, 1.4fr) minmax(300px, .85fr)' }}
          gap={{ base: 6, xl: 10 }}
          alignItems="stretch"
        >
          <VStack align={{ base: 'start', xl: 'center' }} justify="space-between">
            <Text className="case-index">{project.index}</Text>
            <Box
              display="grid"
              placeItems="center"
              w="48px"
              h="48px"
              border="1px solid"
              borderColor={`${accent}.700`}
              color={`${accent}.300`}
              bg={accentBackgrounds[accent] || accentBackgrounds.blue}
            >
              <Icon as={ProjectIcon} boxSize={5} />
            </Box>
          </VStack>

          <VStack align="stretch" spacing={5}>
            <HStack spacing={3} flexWrap="wrap">
              <Text className="mono-label" color={`${accent}.300`}>{project.eyebrow}</Text>
              <Badge variant="quiet">{project.status}</Badge>
            </HStack>
            <Box>
              <Heading as="h3" fontSize={{ base: '2xl', md: '3xl' }} letterSpacing="-0.04em" mb={3}>
                {project.title}
              </Heading>
              <Text color="gray.500" fontSize="sm" mb={5}>{project.role}</Text>
              <Text color="gray.300" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.75" maxW="680px">
                {project.shortDescription}
              </Text>
            </Box>
            <HStack spacing={2} flexWrap="wrap">
              {project.technologies.slice(0, 5).map((technology) => (
                <Tag key={technology} variant="technical">{technology}</Tag>
              ))}
            </HStack>
          </VStack>

          <VStack align="stretch" justify="space-between" spacing={7}>
            <SimpleGrid columns={3} borderTop="1px solid" borderLeft="1px solid" borderColor="whiteAlpha.100">
              {project.metrics?.map((metric) => (
                <Box key={metric.label} p={4} borderRight="1px solid" borderBottom="1px solid" borderColor="whiteAlpha.100">
                  <Heading as="p" size="sm" color="white" mb={2}>{metric.value}</Heading>
                  <Text color="gray.600" fontSize="10px" lineHeight="1.4">{metric.label}</Text>
                </Box>
              ))}
            </SimpleGrid>

            <HStack spacing={3} flexWrap="wrap">
              <Button onClick={onOpen} variant="textLink" rightIcon={<FiArrowUpRight />}>
                Read system notes
              </Button>
              {project.liveUrl && (
                <Button
                  as="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="iconLink"
                  aria-label={`Open ${project.title} live`}
                  onClick={(event) => event.stopPropagation()}
                >
                  <FiArrowUpRight />
                </Button>
              )}
              {project.repoUrl && (
                <Button
                  as="a"
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="iconLink"
                  aria-label={`Open ${project.title} repository`}
                  onClick={(event) => event.stopPropagation()}
                >
                  <FiGithub />
                </Button>
              )}
              {!project.liveUrl && !project.repoUrl && (
                <Box color="gray.700" aria-label="Private system">
                  <FiLock />
                </Box>
              )}
            </HStack>
          </VStack>
        </Grid>
      </Box>
      <ProjectModal isOpen={isOpen} onClose={onClose} project={project} />
    </>
  );
};

export default ProjectCard;
