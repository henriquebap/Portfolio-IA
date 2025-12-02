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
} from '@chakra-ui/react';
import { FiExternalLink, FiGithub, FiLock } from 'react-icons/fi';
import { 
  SiPython, SiPytorch, SiTensorflow, SiScikitlearn, SiDocker, 
  SiFastapi, SiStreamlit, SiOpenai, SiPostgresql, SiSupabase,
  SiNumpy, SiPandas, SiKeras
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

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
    <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered>
      <ModalOverlay backdropFilter="blur(10px)" bg="blackAlpha.600" />
      <ModalContent
        bg="gray.900"
        backdropFilter="blur(20px) saturate(180%)"
        border="1px solid"
        borderColor="whiteAlpha.100"
        borderRadius="2xl"
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

            {/* Full Description */}
            <Text color="gray.300" fontSize="sm" lineHeight="tall">
              {project.fullDescription || project.description}
            </Text>

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
                      bg="purple.500"
                      bgOpacity={0.1}
                      color="purple.400"
                      border="1px solid"
                      borderColor="purple.500"
                      borderOpacity={0.2}
                    >
                      {highlight}
                    </Badge>
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
                      bg="cyan.900"
                      bgOpacity={0.3}
                      color="cyan.400"
                      border="1px solid"
                      borderColor="cyan.500"
                      borderOpacity={0.3}
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

