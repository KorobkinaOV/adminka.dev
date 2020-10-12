import React from 'react';
import { Link as LinkChakra, LinkProps } from '@chakra-ui/core';

export const Link = (props: LinkProps & { isActive: boolean }) => {
  const hoverColor = '#0BC5EA';
  const baseColor = '#1A202C';
  return (
    <LinkChakra
      {...props}
      borderBottom={
        props.isActive ? `1px solid ${hoverColor}` : '1px solid transparent'
      }
      _hover={{ color: hoverColor, borderBottom: `1px solid ${hoverColor}` }}
      color={props.isActive ? hoverColor : baseColor}
    />
  );
};
