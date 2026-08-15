import { Box, Container, Heading, HStack, SimpleGrid, Tag, Text, VStack } from '@chakra-ui/react';
import { capabilities, softSkills } from '../data/projects';

const Skills = () => (
  <Box as="section" id="skills" py={{ base: 12, md: 16 }} borderTop="1px solid" borderColor="gray.200">
    <Container maxW="3xl" px={{ base: 5, md: 6 }}>
      <VStack align="stretch" spacing={10}>
        <Box>
          <Text className="eyebrow" mb={3}>Skills</Text>
          <Text color="gray.600" lineHeight="1.75">
            Organized around the production loop: evaluate, build, operate, ship.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={{ base: 6, md: 8 }}>
          {capabilities.map((capability) => (
            <Box key={capability.title}>
              <Heading as="h3" fontSize="md" fontWeight={600} mb={1}>
                {capability.title}
              </Heading>
              <Text color="gray.600" fontSize="sm" lineHeight="1.6" mb={3}>
                {capability.description}
              </Text>
              <HStack spacing={2} flexWrap="wrap">
                {capability.items.map((item) => (
                  <Tag key={item} variant="technical" size="sm">{item}</Tag>
                ))}
              </HStack>
            </Box>
          ))}
        </SimpleGrid>

        <Box>
          <Heading as="h3" fontSize="md" fontWeight={600} mb={5}>
            How I work
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={{ base: 5, md: 6 }}>
            {softSkills.map((skill) => (
              <Box key={skill.title}>
                <Heading as="h4" fontSize="sm" fontWeight={600} mb={1}>
                  {skill.title}
                </Heading>
                <Text color="gray.600" fontSize="sm" lineHeight="1.7">
                  {skill.text}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  </Box>
);

export default Skills;
