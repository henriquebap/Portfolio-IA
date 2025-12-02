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
    { name: 'Projects', href: '#featured' },
    { name: 'Skills', href: '#skills' },
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
      backdropFilter={scrolled ? 'blur(20px) saturate(180%)' : 'none'}
      bg={scrolled ? 'whiteAlpha.50' : 'transparent'}
      borderBottom={scrolled ? '1px solid' : 'none'}
      borderColor="whiteAlpha.100"
      transition="all 0.3s"
      boxShadow={scrolled ? '0 4px 24px rgba(0, 0, 0, 0.25)' : 'none'}
    >
      <Box
        maxW="7xl"
        mx="auto"
        px={{ base: 6, md: 12, lg: 20, xl: 24 }}
      >
        <Flex
          align="center"
          justify="space-between"
          position="relative"
        >
          {/* Logo */}
          <Box flex="1">
            <Button
              as="a"
              href="#"
              variant="unstyled"
              fontSize="2xl"
              fontWeight="bold"
              display="flex"
              _hover={{ transform: 'scale(1.05)' }}
              transition="transform 0.2s"
            >
              <Box
                bgGradient="linear(to-r, brand.500, cyan.500)"
                bgClip="text"
              >
                HB
              </Box>
              <Box color="whiteAlpha.800">.</Box>
            </Button>
          </Box>

          {/* Desktop Navigation - Centered Absolutely */}
          <Flex
            display={{ base: 'none', md: 'flex' }}
            gap={2}
            position="absolute"
            left="50%"
            transform="translateX(-50%)"
          >
            {navLinks.map((link) => (
              <Button
                key={link.name}
                as="a"
                href={link.href}
                variant="ghost"
                size="sm"
                px={5}
                py={2.5}
                fontSize="sm"
                fontWeight="medium"
                color="gray.400"
                borderRadius="xl"
                bg="whiteAlpha.50"
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor="whiteAlpha.100"
                _hover={{
                  color: 'white',
                  bg: 'whiteAlpha.100',
                  borderColor: 'whiteAlpha.200',
                  transform: 'translateY(-1px)',
                }}
                transition="all 0.2s"
              >
                {link.name}
              </Button>
            ))}
          </Flex>

          {/* Social Links - Desktop */}
          <HStack flex="1" justify="flex-end" display={{ base: 'none', md: 'flex' }} spacing={3}>
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
          <Box flex="1" display={{ base: 'flex', md: 'none' }} justify="flex-end">
            <IconButton
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
              _hover={{
                color: 'white',
                bg: 'whiteAlpha.100',
              }}
            />
          </Box>
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
