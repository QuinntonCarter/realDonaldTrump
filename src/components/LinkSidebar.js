import { Button, Icon, VStack } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';

export default function LinkSidebar() {
  return (
    <VStack w={'1.5em'}>
      <Icon as={FaTwitter} color={'#D7D9DB'} size={'14px'} />
      <Button
        bgColor={'#1C9CF0'}
        color={'white'}
        width={'11em'}
        fontWeight={'bold'}
        fontSize={'17px'}
        borderRadius={'3xl'}
        _hover={{ backgroundColor: 'rgb(26, 140, 216)' }}
      >
        Tweet
      </Button>
    </VStack>
  );
}
