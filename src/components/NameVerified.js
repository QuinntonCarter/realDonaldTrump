import { Box, Text } from '@chakra-ui/react';
import { verifiedCheck } from './svgs/Verified.js';

export default function NameVerified({ name = 'Donald J. Trump', nameSize }) {
  return (
    <Box
      as="span"
      display={'inline-flex'}
      flexWrap={'wrap'}
      alignItems={'center'}
    >
      <Text fontWeight={'bold'} fontSize={nameSize}>
        {' '}
        {name}{' '}
      </Text>{' '}
      {verifiedCheck}{' '}
    </Box>
  );
}
