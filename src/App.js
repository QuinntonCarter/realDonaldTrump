import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  VStack,
  SimpleGrid,
  Spinner,
  Container,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { customTheme } from './Theme';
import Tweet from './components/Tweet';
// icons
import Banner from './components/Banner';
import TwitterHeading from './components/TwitterHeading';
import MediaGrid from './components/MediaGrid';
import { media } from './utils/mediaGrid/Media';
import getData from './utils/getData';
import { convertDate } from './utils/convertDate';
import LinkSidebar from './components/LinkSidebar';

function App() {
  const [quotes, setQuotes] = useState();
  const mappedTweets =
    quotes?.length === 6 ? (
      quotes.map((tweetData, i) => {
        return (
          <Tweet
            {...tweetData}
            key={tweetData.quote_id}
            href={tweetData._embedded.source[0].url}
            postDate={convertDate(tweetData.appeared_at)}
          />
        );
      })
    ) : (
      <Spinner />
    );
  useEffect(() => {
    getData('https://api.tronalddump.io/random/quote', setQuotes);
    return () => {
      return setQuotes();
    };
  }, []);
  return (
    <ChakraProvider theme={customTheme}>
      <Container m={'auto 8em'} width={'100%'}>
        <SimpleGrid gridTemplateColumns={'25% 60% 20%'}>
          <LinkSidebar />
          <VStack>
            <TwitterHeading />
            <Banner
              bannerImg={
                'https://pbs.twimg.com/profile_banners/25073877/1604214583/1500x500'
              }
              aviSrc={
                'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg'
              }
              handle={'realDonaldTrump'}
            />
            <SimpleGrid>{mappedTweets}</SimpleGrid>
          </VStack>
          <VStack>
            <MediaGrid media={media} />
          </VStack>
        </SimpleGrid>
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
      </Container>
    </ChakraProvider>
  );
}

export default App;
