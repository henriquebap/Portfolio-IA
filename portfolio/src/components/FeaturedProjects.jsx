import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Badge,
  Link,
  Icon,
} from '@chakra-ui/react';
import { featuredProjects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { FiArrowDown } from 'react-icons/fi';

const FeaturedProjects = () => {
  return (
    <Box
      as="section"
      id="featured"
      py={{ base: 16, md: 24 }}
      position="relative"
      overflow="hidden"
    >
      {/* Background accent */}
      <Box position="absolute" inset={0} overflow="hidden" pointerEvents="none">
        <Box
          position="absolute"
          w="600px"
          h="600px"
          top="50%"
          left="-300px"
          transform="translateY(-50%)"
          borderRadius="full"
          bgGradient="radial(circle, brand.500 0%, brand.700 100%)"
          filter="blur(100px)"
          opacity={0.1}
        />
      </Box>
      
      <Container maxW="6xl" px={{ base: 6, md: 10, lg: 16 }} position="relative" zIndex={1}>
        <VStack spacing={{ base: 12, md: 16 }}>
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
              Featured Work
            </Badge>
            <Heading
              as="h2"
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
              fontWeight="bold"
              color="white"
            >
              Projects that{' '}
              <Box
                as="span"
                bgGradient="linear(to-r, purple.500, cyan.500)"
                bgClip="text"
              >
                Define My Journey
              </Box>
            </Heading>
            <Text color="gray.400" fontSize={{ base: 'sm', md: 'md' }}>
              From production SaaS platforms to award-winning solutions, these projects showcase 
              my ability to deliver end-to-end ML systems that create real impact.
            </Text>
          </VStack>

          {/* Featured Projects Grid */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </SimpleGrid>

          {/* View All CTA */}
          <Link
            href="#projects"
            display="inline-flex"
            alignItems="center"
            gap={2}
            fontSize="sm"
            color="gray.400"
            fontWeight="medium"
            _hover={{ color: 'brand.400' }}
            transition="color 0.2s"
          >
            View all 15+ projects
            <Icon
              as={FiArrowDown}
              w={4}
              h={4}
              transition="transform 0.2s"
              _groupHover={{ transform: 'translateY(4px)' }}
            />
          </Link>
        </VStack>
      </Container>
    </Box>
  );
};

export default FeaturedProjects;
