import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  HStack,
  Icon,
  SimpleGrid,
  Image,
  Button,
  Spinner,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { customTheme } from './Theme';
import Tweet from './components/Tweet';
import { verifiedCheck } from './components/Verified';
// icons
import { FaTwitter } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import moment from 'moment';

function App() {
  const [quotes, setQuotes] = useState();
  async function getData() {
    let quoteArr = [];
    try {
      while (quoteArr.length <= 5) {
        const data = await fetch('https://api.tronalddump.io/random/quote');
        // make mappable *
        const toJSON = await data.json();
        quoteArr.push(toJSON);
      }
      return setQuotes(quoteArr);
    } catch {
      return false;
    }
  }
  const mappedTweets =
    quotes?.length === 6 ? (
      quotes.map(tweetData => {
        console.log(tweetData);
        return (
          <Tweet
            {...tweetData}
            key={tweetData.quote_id}
            href={tweetData._embedded.source[0].url}
            postDate={moment(tweetData.appeared_at).format('MMM DD YYYY')}
          />
        );
      })
    ) : (
      <Spinner />
    );
  useEffect(() => {
    getData();
    return () => {
      // second
    };
  }, []);
  return (
    <ChakraProvider theme={customTheme}>
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
            <Box as="span">
              <Text> Donald J. Trump </Text>
              {verifiedCheck}
            </Box>
            {/* twitter handle */}
            <Text> @realDonaldTrump </Text>
            {/* twitter bio */}
            <Text> 45th President of the United States of America🇺🇸 </Text>
            {/* flex horizontal bar of: */}
            {/*  */}
            {/* pin icon + location */}
            <Icon src={GrLocation} color={'rgb(113, 118, 123)'}></Icon>
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
            {/* <Tweet textContent={quotes?.length && quotes.value} /> */}
            {mappedTweets}
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
