import { useState } from 'react';
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Badge,
  Button,
  HStack,
  Icon,
  Flex,
  Card,
  CardBody,
} from '@chakra-ui/react';
import { allProjects, categoryLabels } from '../data/projects';
import ProjectCard from './ProjectCard';
import { TbBrain, TbCpu, TbSparkles } from 'react-icons/tb';

const categoryIcons = {
  ml: TbBrain,
  dl: TbCpu,
  genai: TbSparkles
};

const ProjectsGrid = () => {
  const [activeCategory, setActiveCategory] = useState('ml');
  const categories = Object.keys(allProjects);

  return (
    <Box
      as="section"
      id="projects"
      py={{ base: 16, md: 24 }}
      position="relative"
      overflow="hidden"
    >
      <Container maxW="6xl" px={{ base: 6, md: 10, lg: 16 }}>
        <VStack spacing={{ base: 10, md: 12 }}>
          {/* Section Header */}
          <VStack spacing={4} textAlign="center" maxW="2xl">
            <Badge
              px={4}
              py={2}
              borderRadius="full"
              bg="whiteAlpha.50"
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="whiteAlpha.100"
              color="gray.400"
              textTransform="uppercase"
              letterSpacing="wider"
              fontSize="xs"
            >
              All Projects
            </Badge>
            <Heading
              as="h2"
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
              fontWeight="bold"
              color="white"
            >
              Explore My{' '}
              <Box
                as="span"
                bgGradient="linear(to-r, brand.500, cyan.500)"
                bgClip="text"
              >
                Portfolio
              </Box>
            </Heading>
            <Text color="gray.400" fontSize={{ base: 'sm', md: 'md' }}>
              A comprehensive collection of my work across Machine Learning, Deep Learning, 
              and Generative AI.
            </Text>
          </VStack>

          {/* Category Tabs */}
          <Flex
            p={1.5}
            borderRadius="xl"
            bg="whiteAlpha.50"
            backdropFilter="blur(10px)"
            border="1px solid"
            borderColor="whiteAlpha.100"
            gap={1}
            flexWrap="wrap"
            justify="center"
          >
            {categories.map((category) => {
              const IconComponent = categoryIcons[category];
              const isActive = activeCategory === category;
              
              return (
                <Button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  size="sm"
                  px={5}
                  py={2.5}
                  borderRadius="lg"
                  bg={isActive ? 'linear-gradient(135deg, #0ea5e9, #06b6d4)' : 'transparent'}
                  color={isActive ? 'white' : 'gray.400'}
                  fontWeight="medium"
                  _hover={{
                    color: isActive ? 'white' : 'gray.300',
                  }}
                  transition="all 0.3s"
                  leftIcon={<Icon as={IconComponent} />}
                  rightIcon={
                    <Badge
                      fontSize="xs"
                      px={2}
                      py={0.5}
                      borderRadius="md"
                      bg={isActive ? 'whiteAlpha.200' : 'whiteAlpha.50'}
                      color={isActive ? 'white' : 'gray.600'}
                    >
                      {allProjects[category].length}
                    </Badge>
                  }
                >
                  <Box display={{ base: 'none', sm: 'block' }}>
                    {categoryLabels[category]}
                  </Box>
                  <Box display={{ base: 'block', sm: 'none' }}>
                    {categoryLabels[category].split(' ')[0]}
                  </Box>
                </Button>
              );
            })}
          </Flex>

          {/* Projects Grid */}
          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 3 }}
            spacing={5}
            w="full"
          >
            {allProjects[activeCategory].map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </SimpleGrid>

          {/* Stats */}
          <HStack spacing={4} flexWrap="wrap" justify="center">
            <Card
              bg="whiteAlpha.50"
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="whiteAlpha.100"
              borderRadius="xl"
            >
              <CardBody px={6} py={4} textAlign="center">
                <VStack spacing={1}>
                  <Heading
                    size="lg"
                    bgGradient="linear(to-r, brand.500, cyan.500)"
                    bgClip="text"
                  >
                    {Object.values(allProjects).reduce((acc, arr) => acc + arr.length, 0)}
                  </Heading>
                  <Text fontSize="xs" color="gray.500">
                    Total Projects
                  </Text>
                </VStack>
              </CardBody>
            </Card>
            
            <Card
              bg="whiteAlpha.50"
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="whiteAlpha.100"
              borderRadius="xl"
            >
              <CardBody px={6} py={4} textAlign="center">
                <VStack spacing={1}>
                  <Heading
                    size="lg"
                    bgGradient="linear(to-r, brand.500, cyan.500)"
                    bgClip="text"
                  >
                    {categories.length}
                  </Heading>
                  <Text fontSize="xs" color="gray.500">
                    Categories
                  </Text>
                </VStack>
              </CardBody>
            </Card>
            
            <Card
              bg="whiteAlpha.50"
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="whiteAlpha.100"
              borderRadius="xl"
            >
              <CardBody px={6} py={4} textAlign="center">
                <VStack spacing={1}>
                  <Heading
                    size="lg"
                    bgGradient="linear(to-r, brand.500, cyan.500)"
                    bgClip="text"
                  >
                    15+
                  </Heading>
                  <Text fontSize="xs" color="gray.500">
                    Technologies
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default ProjectsGrid;
