import {
  Flex,
  Text,
  NumberInput,
  Input,
  Icon,
  IconButton,
} from '@chakra-ui/core';
import React from 'react';
import { Container, Link } from 'uikit';

const Pagination = ({
  gotoPage,
  canPreviousPage,
  previousPage,
  nextPage,
  canNextPage,
  pageCount,
  pageIndex,
  pageSize,
  setPageSize,
  pageOptions,
  dataCount,
}: {
  gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageCount: number;
  nextPage: () => void;
  previousPage: () => void;
  pageIndex: number;
  pageSize: number;
  setPageSize: (pageSize: number) => void;
  pageOptions: number[];
  dataCount: number;
}) => (
  <Container
    justifyContent="space-between"
    alignItems="center"
    boxShadow="0 2px 5px 1px #92919147"
    bg="white"
    position="fixed"
    bottom={0}
    width="100%"
    py={5}
  >
    <Flex justifyContent="space-between" width="100%" px={8}>
      <Flex alignItems="center" color="#7a7c7f">
        <IconButton
          onClick={() => previousPage()}
          icon="chevron-left"
          aria-label="chevron-right"
          bg="transparent"
          isDisabled={!canPreviousPage}
          fontSize="25px"
          mr={3}
        />
        <Input
          type="number"
          defaultValue={pageIndex + 1}
          onChange={(e: any) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          }}
          mr={3}
          style={{ width: '50px', borderColor: '#cbd3de' }}
        />{' '}
        из {pageOptions.length}
        <IconButton
          onClick={() => nextPage()}
          icon="chevron-right"
          aria-label="chevron-right"
          bg="transparent"
          isDisabled={!canNextPage}
          fontSize="25px"
          ml={3}
        />
      </Flex>
      <Flex alignItems="center">
        <Flex mr={12}>
          Всего записей:{' '}
          <Text display="inline-block" my={0} ml={3} fontWeight={600}>
            {dataCount}
          </Text>
        </Flex>
        <Flex>
          Показывать по
          {[10, 50, 100].map((item, index) => (
            <Link
              onChange={(e: any) => {
                setPageSize(Number(e.target.value));
              }}
              key={`pageSize-${index}`}
              ml={3}
              isActive={pageSize === item}
            >
              {item}
            </Link>
          ))}
        </Flex>
      </Flex>
    </Flex>
  </Container>
);

export default Pagination;
