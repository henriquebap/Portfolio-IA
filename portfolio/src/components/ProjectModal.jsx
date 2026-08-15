import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  VStack,
  Heading,
  Text,
  HStack,
  Badge,
  Button,
  Icon,
  Flex,
  Tag,
  Box,
  SimpleGrid,
} from '@chakra-ui/react';
import { FiExternalLink, FiGithub, FiLock } from 'react-icons/fi';
import {
  SiPython, SiPytorch, SiTensorflow, SiScikitlearn, SiDocker,
  SiFastapi, SiStreamlit, SiOpenai, SiPostgresql, SiSupabase,
  SiNumpy, SiPandas, SiKeras
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import ProjectFlow from './ProjectFlow';

const techIcons = {
  'Python': SiPython,
  'PyTorch': SiPytorch,
  'TensorFlow': SiTensorflow,
  'Scikit-learn': SiScikitlearn,
  'Docker': SiDocker,
  'FastAPI': SiFastapi,
  'Streamlit': SiStreamlit,
  'OpenAI': SiOpenai,
  'PostgreSQL': SiPostgresql,
  'Supabase': SiSupabase,
  'NumPy': SiNumpy,
  'Pandas': SiPandas,
  'Keras': SiKeras,
  'AWS': FaAws,
  'Groq': SiOpenai,
  'Anthropic Claude': SiOpenai,
  'Detectron2': SiPytorch,
  'YOLOv5': SiPytorch,
  'YOLOv9': SiPytorch,
  'Whisper': SiOpenai,
  'Hugging Face': SiPytorch,
  'Ollama': SiOpenai,
  'Mistral': SiOpenai,
  'CI/CD': SiDocker,
};

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={project.flow ? '4xl' : '2xl'} isCentered scrollBehavior="inside">
      <ModalOverlay backdropFilter="blur(10px)" bg="blackAlpha.600" />
      <ModalContent
        bg="#08111f"
        border="1px solid"
        borderColor="whiteAlpha.200"
        borderRadius="4px"
        mx={4}
      >
        <ModalHeader
          borderBottom="1px solid"
          borderColor="whiteAlpha.100"
          pb={4}
        >
          <VStack align="start" spacing={2}>
            <Heading as="h3" size="lg" color="white">
              {project.title}
            </Heading>
            {project.role && (
              <Badge
                variant="glass"
                color="cyan.400"
                borderColor="cyan.500"
                fontSize="xs"
              >
                {project.role}
              </Badge>
            )}
          </VStack>
        </ModalHeader>
        <ModalCloseButton color="gray.400" />
        
        <ModalBody py={6}>
          <VStack spacing={6} align="stretch">
            {/* Status */}
            {project.status && (
              <HStack>
                <Badge
                  px={3}
                  py={1}
                  borderRadius="lg"
                  fontSize="xs"
                  fontWeight="medium"
                  bg="brand.500"
                  color="white"
                  opacity={0.9}
                >
                  {project.status}
                </Badge>
              </HStack>
            )}

            {/* Narrative: problem -> approach -> reasoning -> outcome */}
            {project.narrative ? (
              <VStack align="stretch" spacing={5}>
                {[
                  ['THE PROBLEM', project.narrative.problem],
                  ['THE APPROACH', project.narrative.approach],
                  ['THE REASONING', project.narrative.reasoning],
                  ['THE OUTCOME', project.narrative.outcome],
                ].map(([label, text]) => (
                  <Box key={label}>
                    <Text className="mono-label" color="brand.300" mb={2}>
                      {label}
                    </Text>
                    <Text color="gray.300" fontSize="md" lineHeight="1.75">
                      {text}
                    </Text>
                  </Box>
                ))}
              </VStack>
            ) : (
              <Text color="gray.300" fontSize="md" lineHeight="1.8">
                {project.fullDescription || project.description}
              </Text>
            )}

            {project.flow && (
              <Box pt={2}>
                <ProjectFlow nodes={project.flow.nodes} loop={project.flow.loop} accent={project.accent} />
              </Box>
            )}

            {project.metrics && (
              <SimpleGrid columns={{ base: 1, sm: 3 }} borderTop="1px solid" borderLeft="1px solid" borderColor="whiteAlpha.100">
                {project.metrics.map((metric) => (
                  <Box key={metric.label} p={4} borderRight="1px solid" borderBottom="1px solid" borderColor="whiteAlpha.100">
                    <Heading as="p" size="md" mb={1}>{metric.value}</Heading>
                    <Text className="mono-label">{metric.label}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            )}

            {/* Highlights */}
            {project.highlights && (
              <VStack align="stretch" spacing={3}>
                <Text fontSize="sm" fontWeight="semibold" color="gray.400">
                  Key Highlights
                </Text>
                <Flex flexWrap="wrap" gap={2}>
                  {project.highlights.map((highlight, idx) => (
                    <Badge
                      key={idx}
                      px={3}
                      py={1}
                      borderRadius="lg"
                      fontSize="xs"
                      bg="brand.500"
                      bgOpacity={0.1}
                      color="brand.300"
                      border="1px solid"
                      borderColor="brand.500"
                      borderOpacity={0.2}
                    >
                      {highlight}
                    </Badge>
                  ))}
                </Flex>
              </VStack>
            )}

            {/* Skills demonstrated */}
            {project.skillsShown && (
              <VStack align="stretch" spacing={3}>
                <Text fontSize="sm" fontWeight="semibold" color="gray.400">
                  Skills Demonstrated
                </Text>
                <Flex flexWrap="wrap" gap={2}>
                  {project.skillsShown.map((skill) => (
                    <Tag
                      key={skill}
                      size="md"
                      bg="transparent"
                      color="gray.300"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                    >
                      {skill}
                    </Tag>
                  ))}
                </Flex>
              </VStack>
            )}

            {/* Technologies */}
            <VStack align="stretch" spacing={3}>
              <Text fontSize="sm" fontWeight="semibold" color="gray.400">
                Technologies
              </Text>
              <Flex flexWrap="wrap" gap={2}>
                {project.technologies.map((tech) => {
                  const TechIcon = techIcons[tech];
                  return (
                    <Tag
                      key={tech}
                      size="md"
                      bg="whiteAlpha.50"
                      color="gray.300"
                      border="1px solid"
                      borderColor="whiteAlpha.100"
                    >
                      {TechIcon && <Icon as={TechIcon} mr={2} />}
                      {tech}
                    </Tag>
                  );
                })}
              </Flex>
            </VStack>

            {/* Links */}
            <HStack spacing={3} pt={4}>
              {project.liveUrl && (
                <Button
                  as="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                  leftIcon={<FiExternalLink />}
                >
                  Live Demo
                </Button>
              )}
              {project.repoUrl && (
                <Button
                  as="a"
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="glass"
                  size="md"
                  leftIcon={<FiGithub />}
                >
                  View Code
                </Button>
              )}
              {!project.liveUrl && !project.repoUrl && (
                <Button
                  variant="ghost"
                  size="md"
                  leftIcon={<FiLock />}
                  color="gray.600"
                  cursor="default"
                  _hover={{}}
                >
                  Private Project
                </Button>
              )}
            </HStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;

