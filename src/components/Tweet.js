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
  SimpleGrid,
  Text,
  theme,
} from '@chakra-ui/react';

export default function Tweet({ name, handle, postDate, textContent }) {
  return (
    <>
      <SimpleGrid>
        <Box>
          <Image src="avi.png" />
        </Box>
        <Box>
          <Flex>
            <Text>
              {' '}
              {name}
              <Text as="span">
                {' '}
                {handle} • {postDate}{' '}
              </Text>
            </Text>
          </Flex>
          <Text as="p"> {textContent} </Text>
          <SimpleGrid>
            {' '}
            <Icon /> <Icon /> <Icon /> <Icon /> <Icon />{' '}
          </SimpleGrid>
        </Box>
      </SimpleGrid>
    </>
  );
}
