import { Box, Button, Container, Heading, HStack, Icon, Link, Text, VStack } from '@chakra-ui/react';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../data/projects';
import Reveal from './Reveal';

const Contact = () => (
  <Box as="section" id="contact" py={{ base: 12, md: 16 }} borderTop="1px solid" borderColor="gray.200">
    <Container maxW="3xl" px={{ base: 5, md: 6 }}>
      <Reveal>
      <VStack align="stretch" spacing={6}>
        <Text className="eyebrow">Contact</Text>

        <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} fontWeight={700} letterSpacing="-0.02em">
          Let's build something that has to work.
        </Heading>

        <Text color="gray.600" lineHeight="1.75" maxW="560px">
          I'm open to AI Engineer roles and to conversations about reliable, production-grade
          AI systems. Based in São Paulo, available for remote work.
        </Text>

        <HStack spacing={3} flexWrap="wrap" pt={1}>
          <Button
            as="a"
            href={`mailto:${profile.contact.email}`}
            variant="primary"
            size="md"
            leftIcon={<FiMail />}
          >
            Send me an email
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

        <HStack spacing={5} pt={1}>
          {[
            { label: 'GitHub', href: profile.contact.github, icon: FiGithub },
            { label: 'LinkedIn', href: profile.contact.linkedin, icon: FiLinkedin },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              display="inline-flex"
              alignItems="center"
              gap={2}
              minH="44px"
              fontSize="sm"
              color="gray.600"
              _hover={{ color: 'accent.600', textDecoration: 'none' }}
            >
              <Icon as={link.icon} />
              {link.label}
            </Link>
          ))}
        </HStack>

        <Box pt={8} mt={4} borderTop="1px solid" borderColor="gray.200">
          <Text color="gray.500" fontSize="sm">
            Designed and built by {profile.name} · © {new Date().getFullYear()}
          </Text>
        </Box>
      </VStack>
      </Reveal>
    </Container>
  </Box>
);

export default Contact;
