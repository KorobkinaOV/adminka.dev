import React from 'react';
import { Flex, FlexProps } from '@chakra-ui/core';

const Container = (props: FlexProps) => {
  const { mt = '65px', mb = '65px' } = props;
  return <Flex {...props} mt={mt} mb={mb} overflow="hidden" />;
};

export default Container;
