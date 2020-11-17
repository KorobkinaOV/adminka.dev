import { FormLabel, Input, InputProps } from '@chakra-ui/core';
import React from 'react';
import { useField } from 'react-final-form';
import { Control, Error } from 'uikit';

export const InputControl = (props: InputProps & { label?: string }) => {
  const { name, placeholder } = props;
  const { input, meta } = useField(name!);
  return (
    <Control name={name!} my={4} {...props}>
      <FormLabel htmlFor={name} fontWeight={400}>
        {props.label}
      </FormLabel>
      <Input
        {...input}
        {...props}
        boxShadow="sm"
        border="none"
        isInvalid={meta.error && meta.touched}
        id={name}
        placeholder={placeholder}
      />
      <Error name={name!} />
    </Control>
  );
};
