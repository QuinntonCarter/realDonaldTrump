import { Box, Icon, Image, Text } from '@chakra-ui/react';
import { GrLocation } from 'react-icons/gr';
import NameVerified from './NameVerified';

export default function Banner({ ...props }) {
  return (
    <Box bgImage={props.bannerImg}>
      <Image src={props.aviSrc} />
      <NameVerified />
      <Text> {`@${props.handle}`} </Text>
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
  );
}
