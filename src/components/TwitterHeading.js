import { Flex, Text } from '@chakra-ui/react';
import NameVerified from './NameVerified';

export default function TwitterHeading() {
  return (
    <Flex flexDir={'row'} alignSelf={'flex-start'}>
      {' '}
      <Flex flexDir={'column'}>
        {' '}
        <NameVerified nameSize={'20px'} />
        <Text fontSize={'13px'}> 59.1K Tweets</Text>{' '}
      </Flex>{' '}
    </Flex>
  );
}
