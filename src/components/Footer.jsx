import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
const Footer = () => {
  return (
    <Box minH={'40'} p="16" bg={'blackAlpha.500'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack w={'full'} alignItems={'stretch'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Subscribe to get Updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor={'none'}
            />
            <Button p={'0'} colorScheme={'purple'} variant={'ghost'}>
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '2px solid white']}
          borderRight={['none', '2px solid white']}
        >
          <Heading>Video Hub</Heading>
          <Text>All Rights Reserved</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button colorScheme={'white'} variant={'link'}>
            <a href="youtube.com">Youtube</a>
          </Button>
          <Button colorScheme={'white'} variant={'link'}>
            <a href="youtube.com">Instagram</a>
          </Button>
          <Button colorScheme={'white'} variant={'link'}>
            <a href="youtube.com">Github</a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
