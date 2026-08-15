import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import ProjectFlow from './ProjectFlow';

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{ base: 'full', md: '2xl' }} scrollBehavior="inside">
      <ModalOverlay bg="blackAlpha.400" />
      <ModalContent borderRadius={{ base: 0, md: '8px' }} mx={{ base: 0, md: 4 }}>
        <ModalHeader borderBottom="1px solid" borderColor="gray.200" pb={4}>
          <VStack align="start" spacing={1}>
            <Heading as="h3" fontSize="xl" fontWeight={700}>
              {project.title}
            </Heading>
            <Text fontSize="sm" color="gray.500" fontWeight={400}>
              {project.role} · {project.status}
            </Text>
          </VStack>
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody py={6}>
          <VStack spacing={7} align="stretch">
            {project.narrative ? (
              <VStack align="stretch" spacing={5}>
                {[
                  ['The problem', project.narrative.problem],
                  ['The approach', project.narrative.approach],
                  ['The reasoning', project.narrative.reasoning],
                  ['The outcome', project.narrative.outcome],
                ].map(([label, text]) => (
                  <Box key={label}>
                    <Heading as="h4" fontSize="sm" fontWeight={600} color="gray.900" mb={1.5}>
                      {label}
                    </Heading>
                    <Text color="gray.600" fontSize="sm" lineHeight="1.75">
                      {text}
                    </Text>
                  </Box>
                ))}
              </VStack>
            ) : (
              <Text color="gray.600" fontSize="sm" lineHeight="1.75">
                {project.fullDescription || project.description}
              </Text>
            )}

            {project.flow && (
              <ProjectFlow nodes={project.flow.nodes} loop={project.flow.loop} />
            )}

            {project.metrics && (
              <SimpleGrid columns={3} spacing={4}>
                {project.metrics.map((metric) => (
                  <Box key={metric.label}>
                    <Text fontWeight={700} fontSize="lg">{metric.value}</Text>
                    <Text color="gray.500" fontSize="xs">{metric.label}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            )}

            {project.highlights && (
              <Box>
                <Heading as="h4" fontSize="sm" fontWeight={600} mb={2}>
                  Highlights
                </Heading>
                <List spacing={1.5}>
                  {project.highlights.map((highlight) => (
                    <ListItem key={highlight} fontSize="sm" color="gray.600" display="flex" gap={2}>
                      <Text as="span" color="gray.400">·</Text>
                      {highlight}
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}

            {project.skillsShown && (
              <Box>
                <Heading as="h4" fontSize="sm" fontWeight={600} mb={2}>
                  Skills demonstrated
                </Heading>
                <Flex flexWrap="wrap" gap={2}>
                  {project.skillsShown.map((skill) => (
                    <Badge
                      key={skill}
                      px={2.5}
                      py={1}
                      borderRadius="4px"
                      fontSize="xs"
                      fontWeight={500}
                      textTransform="none"
                      bg="accent.50"
                      color="accent.700"
                    >
                      {skill}
                    </Badge>
                  ))}
                </Flex>
              </Box>
            )}

            <Box>
              <Heading as="h4" fontSize="sm" fontWeight={600} mb={2}>
                Technologies
              </Heading>
              <Flex flexWrap="wrap" gap={2}>
                {project.technologies.map((tech) => (
                  <Tag key={tech} variant="technical" size="sm">{tech}</Tag>
                ))}
              </Flex>
            </Box>

            {(project.liveUrl || project.repoUrl) && (
              <HStack spacing={3} pt={1} pb={2}>
                {project.liveUrl && (
                  <Button
                    as="a"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="sm"
                    leftIcon={<FiExternalLink />}
                  >
                    Live demo
                  </Button>
                )}
                {project.repoUrl && (
                  <Button
                    as="a"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="subtle"
                    size="sm"
                    leftIcon={<FiGithub />}
                  >
                    View code
                  </Button>
                )}
              </HStack>
            )}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
