import { Box, Button, Container, Heading, HStack, Icon, Link, Text, VStack } from '@chakra-ui/react';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../data/projects';

const Hero = () => (
  <Box as="section" id="top" pt={{ base: 14, md: 24 }} pb={{ base: 14, md: 20 }}>
    <Container maxW="3xl" px={{ base: 5, md: 6 }}>
      <VStack align="stretch" spacing={6}>
        <Text className="eyebrow">
          {profile.title} · São Paulo, Brazil · Open to remote
        </Text>

        <Heading
          as="h1"
          fontSize={{ base: '3xl', md: '4xl' }}
          lineHeight="1.2"
          letterSpacing="-0.02em"
          fontWeight={700}
        >
          Reliable AI, built for the real world.
        </Heading>

        <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.75" maxW="640px">
          {profile.tagline}
        </Text>

        <HStack spacing={3} pt={2} flexWrap="wrap">
          <Button as="a" href="#work" variant="primary" size="md">
            See my work
          </Button>
          <Button
            as="a"
            href="/cv-henrique-baptista.pdf"
            download
            variant="subtle"
            size="md"
            leftIcon={<FiDownload />}
          >
            Download CV
          </Button>
        </HStack>

        <HStack spacing={5} pt={2}>
          {[
            { label: 'GitHub', href: profile.contact.github, icon: FiGithub },
            { label: 'LinkedIn', href: profile.contact.linkedin, icon: FiLinkedin },
            { label: 'Email', href: `mailto:${profile.contact.email}`, icon: FiMail },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.label === 'Email' ? undefined : '_blank'}
              rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
              display="inline-flex"
              alignItems="center"
              gap={2}
              fontSize="sm"
              color="gray.600"
              _hover={{ color: 'accent.600', textDecoration: 'none' }}
            >
              <Icon as={link.icon} />
              {link.label}
            </Link>
          ))}
        </HStack>
      </VStack>
    </Container>
  </Box>
);

export default Hero;
