// map tweet data => prepopulate timeline grid w/ and use for new tweets posted to TL
// {image}
// {twitter name}
// {twitter handle}
// {tweet post date}
// {text content}
// tweet interaction bar: replies, reposts, likes, stats(icon bar graph), share(img/icon)

import {
  Box,
  Flex,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import NameVerified from './NameVerified';

export default function Tweet({
  src = 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg',
  handle = 'realDonaldTrump',
  href = false,
  postDate,
  value,
  overlayMode = false,
}) {
  return (
    <Link href={href} _hover={{ textDecoration: 'none' }}>
      <SimpleGrid>
        <Box>
          {/* add circle mask/edit size */}
          <Image src={src} />
        </Box>
        <Box>
          <Flex flexDir={'column'}>
            <NameVerified />
            <Text as="span" display={'inline-flex'}>
              {' '}
              {`@${handle}`} • {postDate}{' '}
            </Text>
          </Flex>
          <Text as="p"> {value} </Text>
          <SimpleGrid gridTemplateColumns={'repeat(5, 1fr)'}>
            {' '}
            <Box as="span">
              <Icon />
            </Box>{' '}
            <Box as="span">
              <Icon />
            </Box>{' '}
            <Box as="span">
              <Icon />
            </Box>{' '}
            <Box as="span">
              <Icon />
            </Box>{' '}
            <Box as="span">
              <Icon />
            </Box>{' '}
          </SimpleGrid>
        </Box>
      </SimpleGrid>
    </Link>
  );
}
