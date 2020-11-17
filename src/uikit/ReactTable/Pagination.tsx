import { Flex, Text, Input, IconButton } from '@chakra-ui/core';
import React from 'react';
import { Link } from 'uikit';
import { Pagination as PaginationType } from './types';

type PaginationProps = {
  nextPage: () => void;
  previousPage: () => void;
  pageIndex: number;
  pageSize: number;
  setPageSize: (pageSize: number) => void;
  dataCount: number;
  onPaginationChange: (pagination: PaginationType) => void;
};

const Pagination = ({
  previousPage,
  nextPage,
  pageIndex,
  pageSize,
  setPageSize,
  dataCount,
  onPaginationChange,
}: PaginationProps) => {
  const pageCount = Math.ceil(dataCount / pageSize);

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      boxShadow="2xl"
      bg="white"
      position="fixed"
      bottom={0}
      width="100%"
      py={3}
    >
      <Flex justifyContent="space-between" width="100%" px={8}>
        <Flex alignItems="center" color="gray.500">
          <IconButton
            onClick={() => previousPage()}
            icon="chevron-left"
            aria-label="chevron-right"
            bg="transparent"
            isDisabled={pageIndex === 0}
            fontSize="25px"
            mr={3}
          />
          <Input
            size="sm"
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              onPaginationChange({ pageNumber: page, pageSize });
            }}
            mr={3}
            w="50px !important"
            borderColor="gray.200"
          />{' '}
          из {pageCount}
          <IconButton
            onClick={() => nextPage()}
            icon="chevron-right"
            aria-label="chevron-right"
            bg="transparent"
            isDisabled={pageIndex + 1 === pageCount}
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
                onClick={() => {
                  setPageSize(item);
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
    </Flex>
  );
};

export default Pagination;
