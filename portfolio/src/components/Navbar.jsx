import { useState } from 'react';
import { Box, Container, Flex, HStack, IconButton, Link, VStack } from '@chakra-ui/react';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Archive', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      zIndex={50}
      bg="rgba(255, 255, 255, 0.92)"
      backdropFilter="blur(8px)"
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Container maxW="3xl" px={{ base: 5, md: 6 }}>
        <Flex h="56px" align="center" justify="space-between">
          <Link href="#top" fontWeight={700} fontSize="md" _hover={{ textDecoration: 'none', color: 'accent.600' }}>
            Henrique Baptista
          </Link>

          <HStack as="ul" spacing={6} display={{ base: 'none', md: 'flex' }} listStyleType="none">
            {navLinks.map((link) => (
              <Box as="li" key={link.name}>
                <Link
                  href={link.href}
                  fontSize="sm"
                  color="gray.600"
                  _hover={{ color: 'gray.900', textDecoration: 'none' }}
                >
                  {link.name}
                </Link>
              </Box>
            ))}
          </HStack>

          <IconButton
            display={{ base: 'flex', md: 'none' }}
            aria-label={open ? 'Close menu' : 'Open menu'}
            icon={open ? <FiX size={20} /> : <FiMenu size={20} />}
            onClick={() => setOpen(!open)}
            variant="ghost"
            size="sm"
            color="gray.700"
          />
        </Flex>

        {open && (
          <VStack
            as="ul"
            align="stretch"
            spacing={0}
            pb={4}
            display={{ base: 'flex', md: 'none' }}
            listStyleType="none"
          >
            {navLinks.map((link) => (
              <Box as="li" key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  display="block"
                  py={3}
                  fontSize="md"
                  color="gray.700"
                  borderBottom="1px solid"
                  borderColor="gray.100"
                  _hover={{ color: 'gray.900', textDecoration: 'none' }}
                >
                  {link.name}
                </Link>
              </Box>
            ))}
          </VStack>
        )}
      </Container>
    </Box>
  );
};

export default Navbar;
