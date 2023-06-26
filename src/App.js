import React, { useEffect, useState } from 'react';
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
  const [quotes, setQuotes] = useState();
  async function getData() {
    try {
      const data = await fetch(
        'https://api.whatdoestrumpthink.com/api/v1/quotes'
      );
      // make mappable *
      const toJSON = await data.json();
      setQuotes(toJSON);
      return true;
    } catch {
      return false;
    }
  }
  useEffect(() => {
    getData();
    return () => {
      // second
    };
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <HStack>
        {/* maybe vstack (?) */}
        <VStack>
          {' '}
          {/* twitter icon */}
          <Icon as={FaTwitter} color={'#D7D9DB'} size={'14px'} />
          {/* tweet button */}
          <Button
            bgColor={'#1C9CF0'}
            color={'white'}
            _hover={{ backgroundColor: 'rgb(26, 140, 216)' }}
          >
            {' '}
            Tweet{' '}
          </Button>
        </VStack>
        {/* BG image banner image(?) */}
        <VStack>
          <Box
            bgImage={
              'https://pbs.twimg.com/profile_banners/25073877/1604214583/1500x500'
            }
          >
            {/* avatar image */}
            <Image src="https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg" />
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
          </Box>
          <SimpleGrid>
            {/* map info to tweet component(s) */}
            <Tweet
              textContent={quotes?.messages && quotes.messages.non_personalized}
            />
          </SimpleGrid>
        </VStack>
        <VStack>
          <SimpleGrid>
            {/* clickable image viewer; populate with funny iamges */}
          </SimpleGrid>
        </VStack>
      </HStack>
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
    </ChakraProvider>
  );
}

export default App;
