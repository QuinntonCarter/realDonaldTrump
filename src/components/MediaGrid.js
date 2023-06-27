import { SimpleGrid } from '@chakra-ui/react';
import MediaOverlay from './overlays/MediaOverlay';

export default function MediaGrid({ media }) {
  // const mediaMapped = media.map(item => { return <MediaOverlay {...item} /> })

  return <SimpleGrid>{/* {mediaMapped} */}</SimpleGrid>;
}
