import { Container, Heading, VStack, Box, Text } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Single Page Website</Heading>
          <Text fontSize="lg">An overview of the features and sections</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading as="h2" size="xl" mb={4}>Initial Todo App Agent</Heading>
          <Text>Details about the initial todo app agent functionality.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading as="h2" size="xl" mb={4}>ChatOpenAI</Heading>
          <Text>Details about the ChatOpenAI feature.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading as="h2" size="xl" mb={4}>Implement</Heading>
          <Text>Details about the implementation process.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading as="h2" size="xl" mb={4}>Edit File</Heading>
          <Text>Details about editing files.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading as="h2" size="xl" mb={4}>Build Project</Heading>
          <Text>Details about building the project.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading as="h2" size="xl" mb={4}>Lint Project</Heading>
          <Text>Details about linting the project.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading as="h2" size="xl" mb={4}>Push</Heading>
          <Text>Details about pushing the project to a repository.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;