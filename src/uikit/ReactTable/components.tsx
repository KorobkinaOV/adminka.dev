import React from 'react';

import { Box, Flex, Text, CircularProgress } from '@chakra-ui/core';

export const LoadingOverlay = () => {
  return (
    <BodyCentered bg="#ffffff80">
      <Box>
        <CircularProgress />
        <Text fontWeight="semibold" mb={1}>
          Загрузка...
        </Text>
      </Box>
    </BodyCentered>
  );
};

export const BodyCentered = (props: React.ComponentProps<typeof Flex>) => {
  return (
    <Flex
      position="absolute"
      top={0}
      bottom={0}
      left={0}
      right={0}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      {...props}
    />
  );
};
