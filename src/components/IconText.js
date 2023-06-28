import { Box, Icon, Image, Text } from '@chakra-ui/react';

export default function IconText({ iconSrc, text, svg = false }) {
  return (
    <Box
      as="span"
      display={'inline-flex'}
      alignItems={'center'}
      color={'rgb(83, 100, 113)'}
    >
      {svg ? iconSrc : <Icon src={iconSrc} color={'rgb(113, 118, 123)'} />}
      <Text>{text}</Text>
    </Box>
  );
}
