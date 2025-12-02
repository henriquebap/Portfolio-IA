import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Tag,
  Button,
  Icon,
  Badge,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import ProjectModal from './ProjectModal';
import { FiExternalLink, FiGithub, FiLock } from 'react-icons/fi';
import { 
  SiPython, SiPytorch, SiTensorflow, SiScikitlearn, SiDocker, 
  SiFastapi, SiStreamlit, SiOpenai, SiPostgresql, SiSupabase,
  SiNumpy, SiPandas, SiKeras
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { 
  TbBrain, TbMicrophone, TbChartLine, TbDna, 
  TbPlane, TbUsers, TbTrendingUp, TbWallet, TbFlask,
  TbHeartbeat, TbBike, TbFish, TbBarbell, TbRobot, TbCar,
  TbRecycle, TbSteeringWheel, TbUser
} from 'react-icons/tb';

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
};

const projectIcons = {
  'transcription': TbMicrophone,
  'pipeline': TbFlask,
  'stock': TbChartLine,
  'medical': TbHeartbeat,
  'dna': TbDna,
  'chart': TbChartLine,
  'plane': TbPlane,
  'users': TbUsers,
  'trending': TbTrendingUp,
  'wallet': TbWallet,
  'health': TbHeartbeat,
  'bike': TbBike,
  'fish': TbFish,
  'fitness': TbBarbell,
  'robot': TbRobot,
  'car': TbCar,
  'recycle': TbRecycle,
  'racing': TbSteeringWheel,
  'coach': TbUser,
  'default': TbBrain,
};

const ProjectCard = ({ project, featured = false }) => {
  const IconComponent = projectIcons[project.icon] || projectIcons.default;
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (featured) {
    return (
      <>
      <Card
        onClick={onOpen}
        cursor="pointer"
        bg="whiteAlpha.50"
        backdropFilter="blur(20px) saturate(180%)"
        border="1px solid"
        borderColor="whiteAlpha.100"
        borderRadius="2xl"
        overflow="hidden"
        transition="all 0.3s"
        _hover={{
          transform: 'translateY(-4px)',
          borderColor: 'brand.500',
          boxShadow: '0 8px 32px rgba(14, 165, 233, 0.15)',
        }}
      >
        <CardHeader
          position="relative"
          h="180px"
          bgGradient="linear(to-br, brand.900, cyan.900)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            position="absolute"
            inset={0}
            bgImage="linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)"
            bgSize="24px 24px"
          />
          
          <Flex
            w={20}
            h={20}
            borderRadius="2xl"
            bg="whiteAlpha.100"
            backdropFilter="blur(10px)"
            border="1px solid"
            borderColor="whiteAlpha.200"
            align="center"
            justify="center"
            position="relative"
            zIndex={1}
          >
            <Icon as={IconComponent} w={10} h={10} color="whiteAlpha.800" />
          </Flex>
          
          {project.status && (
            <Badge
              position="absolute"
              top={4}
              right={4}
              px={3}
              py={1.5}
              borderRadius="lg"
              fontSize="xs"
              fontWeight="medium"
              bg="brand.500"
              color="white"
              opacity={0.9}
            >
              {project.status}
            </Badge>
          )}
        </CardHeader>

        <CardBody p={{ base: 5, sm: 6 }}>
          <VStack align="stretch" spacing={4}>
            <Heading
              as="h3"
              size="md"
              color="white"
              _groupHover={{ color: 'brand.400' }}
              transition="color 0.2s"
              noOfLines={1}
            >
              {project.title}
            </Heading>

            {project.role && (
              <Badge
                variant="glass"
                color="cyan.400"
                borderColor="cyan.500"
                alignSelf="flex-start"
              >
                {project.role}
              </Badge>
            )}

            <Text color="gray.400" fontSize="sm" noOfLines={2}>
              {project.fullDescription || project.description}
            </Text>

            {project.highlights && (
              <Flex flexWrap="wrap" gap={2}>
                {project.highlights.slice(0, 3).map((highlight, idx) => (
                  <Badge
                    key={idx}
                    variant="glass"
                    color="purple.400"
                    borderColor="purple.500"
                    fontSize="xs"
                  >
                    {highlight}
                  </Badge>
                ))}
              </Flex>
            )}

            <Flex flexWrap="wrap" gap={2}>
              {project.technologies.slice(0, 4).map((tech) => {
                const TechIcon = techIcons[tech];
                return (
                  <Tag
                    key={tech}
                    size="sm"
                    bg="cyan.900"
                    bgOpacity={0.3}
                    color="cyan.400"
                    border="1px solid"
                    borderColor="cyan.500"
                    borderOpacity={0.3}
                  >
                    {TechIcon && <Icon as={TechIcon} mr={1} />}
                    {tech}
                  </Tag>
                );
              })}
            </Flex>
          </VStack>
        </CardBody>

        <CardFooter pt={0} pb={6} px={{ base: 5, sm: 6 }} borderTop="1px solid" borderColor="whiteAlpha.100">
          <HStack spacing={3}>
            {project.liveUrl && (
              <Button
                as="a"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="sm"
                leftIcon={<FiExternalLink />}
                onClick={(e) => e.stopPropagation()}
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
                size="sm"
                leftIcon={<FiGithub />}
                onClick={(e) => e.stopPropagation()}
              >
                Code
              </Button>
            )}
            {!project.liveUrl && !project.repoUrl && (
              <Button
                variant="ghost"
                size="sm"
                leftIcon={<FiLock />}
                color="gray.600"
                cursor="default"
                _hover={{}}
              >
                Private
              </Button>
            )}
          </HStack>
        </CardFooter>
      </Card>
      <ProjectModal isOpen={isOpen} onClose={onClose} project={project} />
      </>
    );
  }

  // Small Card for Grid
  return (
    <>
    <Card
      p={5}
      h="full"
      bg="whiteAlpha.50"
      backdropFilter="blur(20px) saturate(180%)"
      border="1px solid"
      borderColor="whiteAlpha.100"
      borderRadius="xl"
      transition="all 0.3s"
      cursor="pointer"
      onClick={onOpen}
      _hover={{
        transform: 'translateY(-2px)',
        borderColor: 'brand.500',
        boxShadow: '0 4px 16px rgba(14, 165, 233, 0.1)',
      }}
    >
      <VStack align="stretch" spacing={4} h="full">
        <HStack spacing={4}>
          <Flex
            w={11}
            h={11}
            borderRadius="xl"
            bgGradient="linear(to-br, brand.500, cyan.500)"
            bgOpacity={0.15}
            border="1px solid"
            borderColor="whiteAlpha.100"
            align="center"
            justify="center"
            flexShrink={0}
          >
            <Icon as={IconComponent} w={5} h={5} color="brand.400" />
          </Flex>
          <VStack align="start" spacing={1} flex={1} minW={0}>
            <Heading
              as="h3"
              size="sm"
              color="white"
              _groupHover={{ color: 'brand.400' }}
              transition="color 0.2s"
              noOfLines={1}
            >
              {project.title}
            </Heading>
            {project.highlight && (
              <Badge
                fontSize="xs"
                px={2}
                py={0.5}
                borderRadius="md"
                bg="amber.500"
                bgOpacity={0.1}
                color="amber.400"
                border="1px solid"
                borderColor="amber.500"
                borderOpacity={0.2}
              >
                {project.highlight}
              </Badge>
            )}
          </VStack>
        </HStack>

        <Text color="gray.400" fontSize="sm" flex={1} noOfLines={2}>
          {project.description}
        </Text>

        <Flex flexWrap="wrap" gap={1.5}>
          {project.technologies.slice(0, 3).map((tech) => (
            <Tag
              key={tech}
              size="sm"
              bg="whiteAlpha.50"
              border="1px solid"
              borderColor="whiteAlpha.100"
              color="gray.500"
              fontSize="xs"
            >
              {tech}
            </Tag>
          ))}
        </Flex>

        <Text fontSize="xs" color="gray.500" pt={4} borderTop="1px solid" borderColor="whiteAlpha.50">
          Click to view details
        </Text>
      </VStack>
    </Card>
    <ProjectModal isOpen={isOpen} onClose={onClose} project={project} />
    </>
  );
};

export default ProjectCard;
