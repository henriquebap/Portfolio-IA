import { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Button,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { FiMenu, FiGithub, FiLinkedin } from 'react-icons/fi';
import { profile } from '../data/projects';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Archive', href: '#projects' },
    { name: 'Capabilities', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={50}
      py={scrolled ? 3 : 5}
      backdropFilter={scrolled ? 'blur(18px)' : 'none'}
      bg={scrolled ? 'rgba(3, 9, 18, .88)' : 'transparent'}
      borderBottom={scrolled ? '1px solid' : 'none'}
      borderColor="whiteAlpha.100"
      transition="all 0.3s"
      boxShadow={scrolled ? '0 4px 24px rgba(0, 0, 0, 0.25)' : 'none'}
    >
      <Box
        maxW="7xl"
        mx="auto"
        px={{ base: 6, md: 12, lg: 20, xl: 24 }}
        position="relative"
      >
        {/* Desktop Navigation - centered; above the bar so links stay clickable */}
        <Flex
          display={{ base: 'none', md: 'flex' }}
          gap={2}
          position="absolute"
          left="50%"
          top="50%"
          transform="translate(-50%, -50%)"
          zIndex={3}
          pointerEvents="auto"
        >
          {navLinks.map((link) => (
            <Button
              key={link.name}
              as="a"
              href={link.href}
              variant="ghost"
              size="sm"
              px={3}
              py={2.5}
              fontSize="xs"
              fontWeight="600"
              letterSpacing=".05em"
              textTransform="uppercase"
              color="gray.400"
              borderRadius="2px"
              _hover={{
                color: 'white',
                bg: 'whiteAlpha.50',
              }}
              transition="all 0.2s"
            >
              {link.name}
            </Button>
          ))}
        </Flex>

        {/* Logo / socials row — pass clicks through empty space to nav links */}
        <Flex
          align="center"
          justify="space-between"
          position="relative"
          zIndex={2}
          pointerEvents="none"
        >
          {/* Logo */}
          <Button
            as="a"
            href="#"
            variant="unstyled"
            fontSize="2xl"
            fontWeight="bold"
            display="flex"
            pointerEvents="auto"
            _hover={{ transform: 'scale(1.05)' }}
            transition="transform 0.2s"
          >
            <Box color="brand.300">
              HB
            </Box>
            <Box color="white">/</Box>
          </Button>

          {/* Spacer for centered navigation */}
          <Box display={{ base: 'none', md: 'block' }} />

          {/* Social Links - Desktop */}
          <HStack display={{ base: 'none', md: 'flex' }} spacing={3} pointerEvents="auto">
            <IconButton
              as="a"
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              icon={<FiGithub size={20} />}
              variant="ghost"
              size="md"
              borderRadius="xl"
              bg="whiteAlpha.50"
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="whiteAlpha.100"
              color="gray.400"
              _hover={{
                color: 'white',
                bg: 'whiteAlpha.100',
                borderColor: 'whiteAlpha.200',
                transform: 'translateY(-2px)',
              }}
              transition="all 0.2s"
            />
            <IconButton
              as="a"
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              icon={<FiLinkedin size={20} />}
              variant="ghost"
              size="md"
              borderRadius="xl"
              bg="whiteAlpha.50"
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="whiteAlpha.100"
              color="gray.400"
              _hover={{
                color: 'white',
                bg: 'whiteAlpha.100',
                borderColor: 'whiteAlpha.200',
                transform: 'translateY(-2px)',
              }}
              transition="all 0.2s"
            />
          </HStack>

          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            icon={<FiMenu size={22} />}
            onClick={onOpen}
            aria-label="Open menu"
            variant="ghost"
            size="md"
            borderRadius="xl"
            bg="whiteAlpha.50"
            backdropFilter="blur(10px)"
            border="1px solid"
            borderColor="whiteAlpha.100"
            color="gray.400"
            pointerEvents="auto"
            _hover={{
              color: 'white',
              bg: 'whiteAlpha.100',
            }}
          />
        </Flex>
      </Box>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay backdropFilter="blur(10px)" />
        <DrawerContent
          bg="gray.900"
          backdropFilter="blur(20px) saturate(180%)"
          borderLeft="1px solid"
          borderColor="whiteAlpha.100"
        >
          <DrawerCloseButton color="gray.400" />
          <DrawerBody pt={20}>
            <VStack spacing={4} align="stretch">
              {navLinks.map((link) => (
                <Button
                  key={link.name}
                  as="a"
                  href={link.href}
                  onClick={onClose}
                  variant="ghost"
                  size="lg"
                  justifyContent="flex-start"
                  color="gray.400"
                  bg="whiteAlpha.50"
                  backdropFilter="blur(10px)"
                  borderRadius="xl"
                  _hover={{
                    color: 'white',
                    bg: 'whiteAlpha.100',
                  }}
                >
                  {link.name}
                </Button>
              ))}
              
              <HStack spacing={3} pt={6} borderTop="1px solid" borderColor="whiteAlpha.100">
                <IconButton
                  as="a"
                  href={profile.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  icon={<FiGithub size={20} />}
                  flex={1}
                  variant="ghost"
                  size="lg"
                  borderRadius="xl"
                  bg="whiteAlpha.50"
                  backdropFilter="blur(10px)"
                  color="gray.400"
                  _hover={{
                    color: 'white',
                    bg: 'whiteAlpha.100',
                  }}
                />
                <IconButton
                  as="a"
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  icon={<FiLinkedin size={20} />}
                  flex={1}
                  variant="ghost"
                  size="lg"
                  borderRadius="xl"
                  bg="whiteAlpha.50"
                  backdropFilter="blur(10px)"
                  color="gray.400"
                  _hover={{
                    color: 'white',
                    bg: 'whiteAlpha.100',
                  }}
                />
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
