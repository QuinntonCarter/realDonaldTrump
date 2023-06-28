import { Box, Icon, Image, Link, SimpleGrid, Text } from '@chakra-ui/react';
import { GrLocation } from 'react-icons/gr';
import { TbLink } from 'react-icons/tb';
import NameVerified from '../NameVerified';
import BannerBio from './BannerBio.js';
import IconText from '../IconText';
import { Calendar } from '../svgs/Calendar';

export default function Banner({ ...props }) {
  return (
    <SimpleGrid>
      <Box as="span">
        <Image src={props.bannerImg} />
      </Box>
      <Box as="span">
        <Image
          src={props.aviSrc}
          border={'solid white 4px'}
          borderRadius={'full'}
          height={'133.5px'}
          width={'133.5px'}
          transform={'translateY(-50%) translateX(15px)'}
        />
        <NameVerified nameSize={'20px'} />
        <Text> {`@${props.handle}`} </Text>
        <BannerBio bio={'45th President of the United States of America🇺🇸'} />
        {/* flex horizontal bar of: */}
        {/*  */}
        <SimpleGrid gridTemplateColumns={'auto auto auto'}>
          {/* pin icon + location */}
          <IconText iconSrc={GrLocation} text={'Washington, DC'} />
          {/* link to website (maybe API sites) */}
          {/* <Box as="span" display={'inline-flex'} alignItems={'center'}>
            <Icon />
            <Link> API website </Link>
          </Box> */}
          <IconText iconSrc={TbLink} text={'API website'} />
          {/* join date */}
          {/* <Box as="span" display={'inline-flex'} alignItems={'center'}>
            <Icon />
            <Text> Joined March 2009 </Text>
          </Box> */}
          <IconText iconSrc={Calendar} svg={true} text={'Joined March 2009'} />
        </SimpleGrid>
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
    </SimpleGrid>
  );
}
