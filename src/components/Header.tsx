import React, { useContext } from 'react';
import { Flex, Button, Heading, PseudoBox, Avatar } from '@chakra-ui/core';
import { useCheckIsLogin } from 'hooks';
import { HeaderBtnControllerContext } from 'providers';

const Header = () => {
  const { isLogin } = useCheckIsLogin();
  const { isActive, userBlocked, userUnBlocked } = useContext(
    HeaderBtnControllerContext
  );

  if (!isLogin) return null;
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      boxShadow="lg"
      bg="white"
      px={8}
      position="fixed"
      zIndex={100}
      w="100%"
      top="0"
    >
      <Heading as="h3" size="md">
        Учетные записи пользователей
      </Heading>
      <Flex>
        <PseudoBox _hover={{ bg: 'blue', stroke: 'blue' }}>
          <Button
            variantColor="green"
            color="white"
            mr={6}
            isDisabled={!isActive}
            size="sm"
            onClick={userUnBlocked}
          >
            Разблокировать
          </Button>
        </PseudoBox>
        <Button
          variantColor="red"
          color="white"
          mr={6}
          isDisabled={!isActive}
          size="sm"
          onClick={userBlocked}
        >
          Заблокировать
        </Button>
        <Button variantColor="cyan" color="white" mr={6} size="sm">
          Создать учетную запись
        </Button>
        <Avatar size="sm" mt={1} />
      </Flex>
    </Flex>
  );
};

export default Header;
