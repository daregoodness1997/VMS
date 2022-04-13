import React from 'react';

// import Formik and Field
import { Formik, Field } from 'formik';
// import yup
import * as Yup from 'yup';
import {
  Box,
  Button,
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
  HStack,
} from '@chakra-ui/react';
// import schema

import { SignUpSchema } from '../../helpers/schema';

const SignUp = () => {
  return (
    <Flex
      bg={useColorModeValue('gray.100', 'gray.900')}
      align='center'
      justify='center'
      h='100vh'
    >
      <Stack spacing={8} mx={'auto'} maxW={'xl'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Create a new Account</Heading>
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
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={SignUpSchema}
            onSubmit={values => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align='flex-start'>
                  <HStack>
                    <FormControl>
                      <FormLabel htmlFor='email'>First Name</FormLabel>
                      <Field
                        as={Input}
                        id='firstName'
                        name='firstName'
                        type='text'
                        variant='filled'
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor='email'>Last Name</FormLabel>
                      <Field
                        as={Input}
                        id='lastName'
                        name='lastName'
                        type='text'
                        variant='filled'
                      />
                    </FormControl>
                  </HStack>

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
                  <FormControl
                    isInvalid={
                      !!errors.confirmPassword && touched.confirmPassword
                    }
                  >
                    <FormLabel htmlFor='confirmPassword'>
                      Confirm Password
                    </FormLabel>
                    <Field
                      as={Input}
                      id='confirmPassword'
                      name='confirmPassword'
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
                    <FormErrorMessage>
                      {errors.confirmPassword}
                    </FormErrorMessage>
                  </FormControl>

                  <Button type='submit' colorScheme='purple' isFullWidth>
                    Login
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignUp;

// Documentation

// Formik Implementation
// https://formik.org/docs/guides/validation
// https://codesandbox.io/s/oqvp75vxxz
