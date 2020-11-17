import React from 'react';
import { Select as SelectChakra, SelectProps } from '@chakra-ui/core';

export const Select = (
  props: SelectProps & {
    label?: string;
    options?: { value: string; label: string }[];
  }
) => {
  const { name, placeholder = '', options } = props;
  return (
    <SelectChakra
      name={name}
      boxShadow="sm"
      border="none"
      placeholder={placeholder}
      {...props}
    >
      <>
        <option disabled selected value="all">
          Все
        </option>
        {options?.map((item, index) => (
          <option value={item.value} key={index}>
            {item.label}
          </option>
        ))}
      </>
    </SelectChakra>
  );
};
