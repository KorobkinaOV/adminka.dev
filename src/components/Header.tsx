import React from 'react';
import { Flex, Button, Heading, PseudoBox, Avatar } from '@chakra-ui/core';
import { Container } from 'uikit';

const Header = () => {
  return (
    <Container
      justifyContent="space-between"
      alignItems="center"
      boxShadow="0 2px 5px 1px #92919147"
      bg="white"
      px={8}
    >
      <Heading as="h4" size="lg">
        Учетные записи пользователей
      </Heading>
      <Flex>
        <PseudoBox _hover={{ bg: 'blue', stroke: 'blue' }}>
          <Button variantColor="green" color="white" mr={6} isDisabled>
            Разблокировать
          </Button>
        </PseudoBox>
        <Button variantColor="red" color="white" mr={6} isDisabled>
          Заблокировать
        </Button>
        <Button variantColor="cyan" color="white" mr={6}>
          Создать учетную запись
        </Button>
        <Avatar size="sm" mt={1} />
      </Flex>
    </Container>
  );
};

export default Header;
