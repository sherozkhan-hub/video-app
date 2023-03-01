import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />;
      <Container maxW={'container.xl'} minH={'100vh'}>
        <Heading
          textTransform={'uppercase'}
          p={'4'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            delectus voluptates nihil provident doloremque sapiente dolor quos
            tempora earum sed, voluptas ex sunt inventore eligendi! Quidem, nemo
            placeat. Qui voluptates in voluptatem placeat repellat hic eveniet
            suscipit amet reiciendis. Quos, impedit architecto, inventore
            deleniti nulla sed accusamus hic, laboriosam a facilis laborum magni
            aliquam perspiciatis et tempore asperiores ratione eum nesciunt
            quibusdam odio iure! Iusto, ratione saepe. Facere quas praesentium
            maxime, distinctio voluptates nemo incidunt est enim recusandae
            cupiditate eaque vero, eveniet culpa sapiente ut? Ullam consectetur
            illo facilis in nulla nisi quibusdam quaerat veritatis facere,
            accusantium est placeat error, harum obcaecati libero, voluptatum
            animi cumque odit cum saepe. Illum dolores obcaecati beatae nisi
            quos ex sed eveniet, vero eius, voluptates praesentium. Eius omnis
            animi quidem iste reiciendis numquam nemo autem neque praesentium
            nostrum? Ea suscipit perferendis quidem dolores minus doloribus
            officiis, consequuntur error. Quas, illo! Minus optio facere veniam?
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
    >
      <Box w={'full'} h={'100vh'}>
        <Image src={img1} />
        <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Watch the Future
        </Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Image src={img2} />
        <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Future is Gaming
        </Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Image src={img3} />
        <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Gaming on Console
        </Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Image src={img4} />
        <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Nightlife is Cool
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
