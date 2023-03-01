import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.md'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          my={'16'}
          m={'auto'}
          alignItems={'stretch'}
          w={'90'}
          spacing={'8'}
        >
          <Heading>Video Hub</Heading>
          <Input
            placeholder={'Name'}
            required
            type={'text'}
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder={'Email'}
            required
            type={'email'}
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder={'Password'}
            required
            type={'password'}
            focusBorderColor={'purple.500'}
          />

          <Button type={'submit'} colorScheme={'purple'}>
            Sign Up
          </Button>

          <Text textAlign={'right'}>
            Already a user?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to="/login">Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
