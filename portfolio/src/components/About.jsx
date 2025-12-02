import { useState } from 'react';
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Card,
  CardBody,
  HStack,
  Icon,
  Flex,
  Badge,
  Collapse,
} from '@chakra-ui/react';
import { FiCode, FiCpu, FiZap, FiChevronDown, FiChevronUp, FiBookOpen } from 'react-icons/fi';
import { profile } from '../data/projects';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const stats = [
    { icon: FiCode, value: '15+', label: 'AI/ML Projects', color: 'purple.500' },
    { icon: FiCpu, value: '3+', label: 'Years Experience', color: 'cyan.500' }
  ];

  return (
    <Box
      as="section"
      id="about"
      py={{ base: 16, md: 24 }}
      position="relative"
      overflow="hidden"
    >
      <Container maxW="6xl" px={{ base: 6, md: 10, lg: 16 }}>
        <VStack spacing={{ base: 12, md: 16 }}>
          {/* Section Header */}
          <VStack spacing={4} textAlign="center">
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
              About Me
            </Badge>
            <Heading
              as="h2"
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
              fontWeight="bold"
              color="white"
              textAlign="center"
              lineHeight="1.3"
            >
              Transforming Ideas into
              <br />
              <Box
                as="span"
                bgGradient="linear(to-r, brand.500, cyan.500)"
                bgClip="text"
              >
                Intelligent Solutions
              </Box>
            </Heading>
          </VStack>

          {/* Main Content Grid */}
          <SimpleGrid columns={{ base: 1, lg: 5 }} spacing={{ base: 8, lg: 10 }} w="full" alignItems="start">
            {/* Left - Text Content */}
            <VStack spacing={6} gridColumn={{ lg: 'span 3' }} align="stretch">
              {/* Main Card */}
              <Card
                bg="whiteAlpha.50"
                backdropFilter="blur(20px) saturate(180%)"
                border="1px solid"
                borderColor="whiteAlpha.100"
                borderRadius="2xl"
              >
                <CardBody p={{ base: 6, sm: 8 }}>
                  <VStack spacing={6} align="stretch">
                    <Text color="gray.200" fontSize={{ base: 'md', sm: 'lg' }} lineHeight="tall">
                      AI Engineer passionate about building intelligent systems that solve real-world problems. 
                      I specialize in end-to-end ML solutions, from research to production deployment.
                    </Text>
                    
                    <Collapse in={isExpanded} animateOpacity>
                      <VStack
                        spacing={5}
                        pt={6}
                        borderTop="1px solid"
                        borderColor="whiteAlpha.100"
                        align="stretch"
                      >
                        <Text color="gray.300" fontSize="sm" lineHeight="tall">
                          {profile.about}
                        </Text>
                        <Text color="gray.500" fontSize="sm" lineHeight="tall">
                          {profile.aboutExtended}
                        </Text>
                      </VStack>
                    </Collapse>

                    <Button
                      onClick={() => setIsExpanded(!isExpanded)}
                      variant="ghost"
                      size="sm"
                      color="brand.400"
                      rightIcon={isExpanded ? <FiChevronUp /> : <FiChevronDown />}
                      _hover={{ color: 'brand.300', bg: 'whiteAlpha.50' }}
                      alignSelf="flex-start"
                    >
                      {isExpanded ? 'Show Less' : 'Learn More About Me'}
                    </Button>
                  </VStack>
                </CardBody>
              </Card>

              {/* Education Badge */}
              <Card
                bg="whiteAlpha.50"
                backdropFilter="blur(20px) saturate(180%)"
                border="1px solid"
                borderColor="whiteAlpha.100"
                borderRadius="xl"
              >
                <CardBody p={5}>
                  <HStack spacing={4}>
                    <Flex
                      w={14}
                      h={14}
                      borderRadius="xl"
                      bgGradient="linear(to-br, brand.500, cyan.500)"
                      align="center"
                      justify="center"
                      flexShrink={0}
                    >
                      <Icon as={FiBookOpen} w={7} h={7} color="white" />
                    </Flex>
                    <VStack align="start" spacing={1}>
                      <Text color="gray.500" fontSize="xs" textTransform="uppercase" letterSpacing="wider">
                        Currently Pursuing
                      </Text>
                      <Text color="white" fontWeight="medium" fontSize="sm">
                        {profile.education}
                      </Text>
                    </VStack>
                  </HStack>
                </CardBody>
              </Card>
            </VStack>

            {/* Right - Stats Grid */}
            <SimpleGrid
              columns={{ base: 1, sm: 2 }}
              spacing={{ base: 4, sm: 5 }}
              gridColumn={{ lg: 'span 2' }}
            >
              {stats.map((stat) => (
                <Card
                  key={stat.label}
                  bg="whiteAlpha.50"
                  backdropFilter="blur(20px) saturate(180%)"
                  border="1px solid"
                  borderColor="whiteAlpha.100"
                  borderRadius="xl"
                  transition="all 0.3s"
                  _hover={{
                    transform: 'translateY(-2px)',
                    borderColor: 'brand.500',
                    boxShadow: '0 4px 16px rgba(14, 165, 233, 0.1)',
                  }}
                >
                  <CardBody p={{ base: 5, sm: 6 }} textAlign="center">
                    <VStack spacing={4}>
                      <Box position="relative" w={14} h={14}>
                        <Box
                          position="absolute"
                          inset={0}
                          borderRadius="xl"
                          bg={stat.color}
                          opacity={0.1}
                          border="1px solid"
                          borderColor={stat.color}
                        />
                        <Flex
                          position="relative"
                          w="full"
                          h="full"
                          align="center"
                          justify="center"
                        >
                          <Icon as={stat.icon} w={6} h={6} color={stat.color} />
                        </Flex>
                      </Box>
                      <VStack spacing={1}>
                        <Heading as="h3" size="xl" color="white">
                          {stat.value}
                        </Heading>
                        <Text color="gray.400" fontSize="sm">
                          {stat.label}
                        </Text>
                      </VStack>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </SimpleGrid>

          {/* Core Expertise Tags */}
          <VStack spacing={6} w="full" pt={0}>
            <Text
              color="gray.500"
              fontSize="xs"
              fontWeight="medium"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              Core Expertise
            </Text>
            <Flex flexWrap="wrap" justify="center" gap={3}>
              {[
                'End-to-End ML Pipelines',
                'ASR/STT Optimization',
                'Transformer Models',
                'Computer Vision',
                'RAG Systems',
                'Agentic AI',
                'MLOps & Deployment',
                'Fine-tuning LLMs'
              ].map((skill) => (
                <Badge
                  key={skill}
                  px={3}
                  py={1.5}
                  borderRadius="lg"
                  bg="whiteAlpha.50"
                  backdropFilter="blur(10px)"
                  border="1px solid"
                  borderColor="whiteAlpha.100"
                  fontSize="xs"
                  color="gray.400"
                  _hover={{
                    color: 'white',
                    borderColor: 'brand.500',
                    borderOpacity: 0.3,
                  }}
                  transition="all 0.2s"
                  cursor="default"
                >
                  {skill}
                </Badge>
              ))}
            </Flex>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default About;
