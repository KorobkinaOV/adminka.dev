import React from 'react';
import { Form } from 'react-final-form';
import { Button, Flex, Box, Heading } from '@chakra-ui/core';
import { InputControl } from 'uikit';
import { makeValidate, schema } from './validate';
import { useCheckIsLogin } from 'hooks';
import { useHistory } from 'react-router-dom';

const initialValues = {
  email: '',
  password: '',
};

const Login = () => {
  const { setToken } = useCheckIsLogin();
  const history = useHistory();

  const onSubmit = () => {
    setToken('anyToken');
    history.push('/user-list');
  };
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      validate={makeValidate(schema)}
      render={({ handleSubmit, form }) => (
        <Flex width="full" align="center" justifyContent="center">
          <Box
            p={8}
            maxWidth="500px"
            borderWidth={1}
            borderRadius={8}
            boxShadow="lg"
            bg="white"
            mt="200px"
            top="-50%"
          >
            <Box textAlign="center">
              <Heading>Вход</Heading>
            </Box>
            <Box my={4} textAlign="left">
              <form onSubmit={handleSubmit}>
                <InputControl
                  name="email"
                  label="Email"
                  placeholder="test@test.com"
                  isRequired
                />
                <InputControl
                  name="password"
                  label="Password"
                  type="password"
                  isRequired
                />
                <Button width="full" mt={4} type="submit">
                  Войти
                </Button>
              </form>
            </Box>
          </Box>
        </Flex>
      )}
    />
  );
};

export default Login;
