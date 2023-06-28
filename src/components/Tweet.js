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
import IconText from './IconText';

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
      <SimpleGrid gridTemplateColumns={'auto 90%'}>
        <Box>
          {/* add circle mask/edit size */}
          <Image
            src={src}
            border={'solid white 4px'}
            borderRadius={'full'}
            height={'40px'}
            width={'40px'}
          />
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
            <IconText iconSrc={''} text={''} />
            <IconText iconSrc={''} text={''} />
            <IconText iconSrc={''} text={''} />
            <IconText iconSrc={''} text={''} />
            <IconText iconSrc={''} text={''} />
          </SimpleGrid>
        </Box>
      </SimpleGrid>
    </Link>
  );
}
