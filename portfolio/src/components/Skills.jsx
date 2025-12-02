import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  HStack,
  Badge,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { FiCode, FiCpu, FiZap, FiPackage, FiDatabase, FiBarChart2 } from 'react-icons/fi';
import { skills } from '../data/projects';
import { 
  SiPython, SiJavascript, SiTypescript, SiPytorch, SiTensorflow, 
  SiScikitlearn, SiKeras, SiDocker, SiFastapi, SiStreamlit,
  SiOpenai, SiPandas, SiNumpy, SiPostgresql, SiSupabase
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { TbDatabase, TbBrain, TbChartBar } from 'react-icons/tb';

const skillIcons = {
  'python': SiPython,
  'javascript': SiJavascript,
  'typescript': SiTypescript,
  'database': TbDatabase,
  'pytorch': SiPytorch,
  'tensorflow': SiTensorflow,
  'scikitlearn': SiScikitlearn,
  'keras': SiKeras,
  'huggingface': TbBrain,
  'openai': SiOpenai,
  'langchain': TbBrain,
  'rag': TbBrain,
  'ollama': TbBrain,
  'docker': SiDocker,
  'mlflow': TbChartBar,
  'fastapi': SiFastapi,
  'aws': FaAws,
  'pandas': SiPandas,
  'numpy': SiNumpy,
  'postgresql': SiPostgresql,
  'supabase': SiSupabase,
  'matplotlib': TbChartBar,
  'seaborn': TbChartBar,
  'streamlit': SiStreamlit,
};

const categoryConfig = {
  languages: { name: 'Languages', icon: FiCode, color: 'blue' },
  mlFrameworks: { name: 'ML Frameworks', icon: FiCpu, color: 'purple' },
  aiTools: { name: 'AI & LLM Tools', icon: FiZap, color: 'green' },
  mlops: { name: 'MLOps & Deploy', icon: FiPackage, color: 'orange' },
  data: { name: 'Data & Databases', icon: FiDatabase, color: 'cyan' },
  visualization: { name: 'Visualization', icon: FiBarChart2, color: 'brand' }
};

const Skills = () => {
  return (
    <Box
      as="section"
      id="skills"
      py={{ base: 20, md: 28 }}
      position="relative"
      overflow="hidden"
    >
      <Container maxW="6xl" px={{ base: 6, md: 10, lg: 16 }}>
        <VStack spacing={16}>
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
              Tech Stack
            </Badge>
            <Heading
              as="h2"
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
              fontWeight="bold"
              color="white"
            >
              Skills &{' '}
              <Box
                as="span"
                bgGradient="linear(to-r, brand.500, cyan.500)"
                bgClip="text"
              >
                Technologies
              </Box>
            </Heading>
            <Text color="gray.400" maxW="2xl">
              A comprehensive toolkit built over years of hands-on experience 
              with ML systems, from research to production.
            </Text>
          </VStack>

          {/* Skills Grid */}
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={{ base: 5, sm: 6 }} w="full">
            {Object.entries(skills).map(([category, skillList]) => {
              const config = categoryConfig[category];
              
              return (
                <Card
                  key={category}
                  bg="whiteAlpha.50"
                  backdropFilter="blur(20px) saturate(180%)"
                  border="1px solid"
                  borderColor="whiteAlpha.100"
                  borderRadius="2xl"
                  transition="all 0.3s"
                  _hover={{
                    transform: 'translateY(-2px)',
                    borderColor: 'brand.500',
                    boxShadow: '0 4px 16px rgba(14, 165, 233, 0.1)',
                  }}
                >
                  <CardBody p={{ base: 5, sm: 6 }}>
                    <VStack align="stretch" spacing={6}>
                      {/* Category Header */}
                      <HStack spacing={3} pb={4} borderBottom="1px solid" borderColor="whiteAlpha.100">
                        <Flex
                          w={11}
                          h={11}
                          borderRadius="xl"
                          bgGradient={`linear(to-br, ${config.color}.500, ${config.color}.700)`}
                          align="center"
                          justify="center"
                        >
                          <Icon as={config.icon} w={5} h={5} color="white" />
                        </Flex>
                        <Heading as="h3" size="sm" color="white">
                          {config.name}
                        </Heading>
                      </HStack>

                      {/* Skills List */}
                      <VStack spacing={3} align="stretch">
                        {skillList.map((skill) => {
                          const IconComponent = skillIcons[skill.icon] || TbBrain;
                          
                          return (
                            <Flex
                              key={skill.name}
                              align="center"
                              gap={3}
                              p={2}
                              borderRadius="lg"
                              transition="all 0.2s"
                              _hover={{
                                bg: 'whiteAlpha.50',
                                transform: 'translateX(4px)',
                              }}
                            >
                              <Flex
                                w={9}
                                h={9}
                                borderRadius="lg"
                                bg="whiteAlpha.50"
                                border="1px solid"
                                borderColor="whiteAlpha.100"
                                align="center"
                                justify="center"
                                flexShrink={0}
                              >
                                <Icon
                                  as={IconComponent}
                                  w={4}
                                  h={4}
                                  color="gray.400"
                                />
                              </Flex>
                              <Text flex={1} fontSize="sm" color="gray.300">
                                {skill.name}
                              </Text>
                              <Badge
                                fontSize="xs"
                                px={2.5}
                                py={1}
                                borderRadius="md"
                                fontWeight="semibold"
                                bg={
                                  skill.level === 'Expert' 
                                    ? 'brand.500'
                                    : skill.level === 'Advanced'
                                    ? 'cyan.500'
                                    : 'gray.600'
                                }
                                color="white"
                              >
                                {skill.level}
                              </Badge>
                            </Flex>
                          );
                        })}
                      </VStack>
                    </VStack>
                  </CardBody>
                </Card>
              );
            })}
          </SimpleGrid>

          {/* Additional Tools */}
          <VStack spacing={4}>
            <Text color="gray.600" fontSize="sm">
              Also experienced with
            </Text>
            <Flex flexWrap="wrap" justify="center" gap={2}>
              {['Git', 'REST APIs', 'GraphQL', 'Jupyter', 'CI/CD', 'Nginx'].map((tool) => (
                <Badge
                  key={tool}
                  px={3}
                  py={1.5}
                  borderRadius="lg"
                  bg="whiteAlpha.50"
                  backdropFilter="blur(10px)"
                  border="1px solid"
                  borderColor="whiteAlpha.100"
                  fontSize="sm"
                  color="gray.500"
                  _hover={{
                    color: 'gray.300',
                    borderColor: 'whiteAlpha.200',
                  }}
                  transition="all 0.2s"
                  cursor="default"
                >
                  {tool}
                </Badge>
              ))}
            </Flex>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Skills;
