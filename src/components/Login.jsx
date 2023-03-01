import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';

const Login = () => {
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
          <Heading>Welcome Back</Heading>
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
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget password?</Link>
          </Button>

          <Button type={'submit'} colorScheme={'purple'}>
            Log In
          </Button>

          <Text textAlign={'right'}>
            New User?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
