import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  HStack,
  Icon,
  SimpleGrid,
  Image,
  Button,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Tweet from './components/Tweet';
import { FaTwitter } from 'react-icons/fa';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HStack>
        {/* maybe vstack (?) */}
        <Box>
          {' '}
          {/* twitter icon */}
          <Icon as={FaTwitter} color={'#D7D9DB'} />
          {/* tweet button */}
          <Button
            bgColor={'#1C9CF0'}
            _hover={{ backgroundColor: 'rgb(26, 140, 216)' }}
          >
            {' '}
            Tweet{' '}
          </Button>
        </Box>
        {/* BG image banner image(?) */}
        <VStack>
          {/* avatar image */}
          <Image />
          {/* twitter name */}
          {/* twitter handle */}
          {/* twitter bio */}
          {/* flex horizontal bar of: */}
          {/*  */}
          {/* pin icon + location */}
          {/* link to website (maybe API sites) */}
          {/* join date */}
          {/*  */}
          {/* grid horizontal bar */}
          {/* following count */}
          {/* follower count */}
          {/*  */}
          {/* grid horizontal bar */}
          {/* tweets */}
          {/* media: links to meme/stupid videos */}
          {/* likes: @thedonaldtrump hasn't liked any tweets [subtext: when they do, those tweets will show up here] */}
          {/*  */}
          <SimpleGrid>
            {/* map info to tweet component(s) */}
            <Tweet />
          </SimpleGrid>
        </VStack>
      </HStack>
      {/* <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box> */}
    </ChakraProvider>
  );
}

export default App;
