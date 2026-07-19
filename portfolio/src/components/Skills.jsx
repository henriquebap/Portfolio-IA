import {
  Box,
  Container,
  Grid,
  Heading,
  HStack,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import { capabilities } from '../data/projects';

const Skills = () => (
  <Box as="section" id="skills" py={{ base: 20, md: 28 }} borderBottom="1px solid" borderColor="whiteAlpha.100">
    <Container maxW="7xl" px={{ base: 6, md: 10, lg: 16 }}>
      <Grid templateColumns={{ base: '1fr', xl: 'minmax(380px, .75fr) minmax(0, 1.25fr)' }} gap={{ base: 12, xl: 20 }}>
        <Box>
          <Text className="section-index">04 / CAPABILITIES</Text>
          <Heading as="h2" className="section-heading" mt={5}>
            Built around
            <Box as="span" display="block" color="brand.300">the production loop.</Box>
          </Heading>
        </Box>

        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} borderTop="1px solid" borderLeft="1px solid" borderColor="whiteAlpha.100">
          {capabilities.map((capability, index) => (
            <VStack
              key={capability.title}
              align="stretch"
              spacing={6}
              p={{ base: 6, md: 8 }}
              borderRight="1px solid"
              borderBottom="1px solid"
              borderColor="whiteAlpha.100"
              minH="285px"
            >
              <HStack justify="space-between">
                <Text className="mono-label">0{index + 1}</Text>
                <Text className="mono-label" color="brand.300">{capability.title.toUpperCase()}</Text>
              </HStack>
              <Box>
                <Heading as="h3" size="md" mb={3}>{capability.title}</Heading>
                <Text color="gray.500" fontSize="sm" lineHeight="1.7">{capability.description}</Text>
              </Box>
              <HStack spacing={2} flexWrap="wrap" mt="auto">
                {capability.items.map((item) => (
                  <Tag key={item} variant="technical">{item}</Tag>
                ))}
              </HStack>
            </VStack>
          ))}
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Skills;
