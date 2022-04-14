// import Formik and Field
import { Formik, Field } from 'formik';

import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  useColorModeValue,
  Stack,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';
// import schema

import { SignInSchema } from '../../helpers/schema';

// import reducers

import { useSelector, useDispatch } from 'react-redux';
import { success } from '../../redux/features/authSlice';
import { RootState } from '../../redux/store/store';

import { Link as NavLink } from 'react-router-dom';

// navigate
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const authentication = useSelector(
    (state: RootState) => state.authentication
  );

  const dispatch = useDispatch();

  let navigate = useNavigate();

  console.log('Auth', authentication);
  return (
    <Flex
      bg={useColorModeValue('gray.100', 'gray.900')}
      align='center'
      justify='center'
      h='100vh'
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>

        <Box
          bg={useColorModeValue('gray.50', 'gray.800')}
          p={6}
          rounded='md'
          // w={72}
          // maxW={'lg'}
        >
          <Formik
            initialValues={{
              email: '',
              password: '',
              rememberMe: false,
            }}
            validationSchema={SignInSchema}
            onSubmit={values => {
              alert(JSON.stringify(values, null, 2));
              dispatch(success(values));
              navigate('/app');
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align='flex-start'>
                  <FormControl isInvalid={!!errors.email && touched.email}>
                    <FormLabel htmlFor='email'>Email Address</FormLabel>
                    <Field
                      as={Input}
                      id='email'
                      name='email'
                      type='email'
                      variant='filled'
                      validate={(value: any) => {
                        let error;

                        if (!value) {
                          error = 'Required';
                        } else if (
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                            value
                          )
                        ) {
                          error = 'Invalid email address';
                        }
                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Field
                      as={Input}
                      id='password'
                      name='password'
                      type='password'
                      variant='filled'
                      validate={(value: string) => {
                        let error;

                        if (value.length < 5) {
                          error = 'Password must contain at least 6 characters';
                        }

                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>
                  <Field
                    as={Checkbox}
                    id='rememberMe'
                    name='rememberMe'
                    colorScheme='purple'
                  >
                    Remember me?
                  </Field>
                  <Button type='submit' colorScheme='purple' isFullWidth>
                    Login
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>

        <Stack align={'center'}>
          <Text fontSize={'lg'} color={'gray.600'}>
            Don't have an account?{' '}
            <NavLink color={'blue.400'} to='/signup'>
              Sign up
            </NavLink>
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default SignIn;

// Documentation

// Formik Implementation
// https://formik.org/docs/guides/validation
// https://codesandbox.io/s/oqvp75vxxz
