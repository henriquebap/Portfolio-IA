import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProjects from './components/FeaturedProjects';
import ProjectsGrid from './components/ProjectsGrid';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <Box minH="100vh" bg="#030712">
      <Navbar />
      <Box as="main">
        <Hero />
        <About />
        <FeaturedProjects />
        <ProjectsGrid />
        <Skills />
        <Contact />
      </Box>
    </Box>
  );
}

export default App;
