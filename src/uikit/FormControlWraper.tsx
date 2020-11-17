import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
} from '@chakra-ui/core';
import React from 'react';
import { useField } from 'react-final-form';

export const Control = ({
  name,
  ...rest
}: FormControlProps & { name: string }) => {
  const {
    meta: { error, touched },
  } = useField(name, { subscription: { touched: true, error: true } });
  return <FormControl {...rest} isInvalid={error && touched} />;
};

export const Error = ({ name }: { name: string }) => {
  const {
    meta: { error },
  } = useField(name, { subscription: { error: true } });
  return <FormErrorMessage>{error}</FormErrorMessage>;
};
