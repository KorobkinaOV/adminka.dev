import React from 'react';
import { Column } from 'react-table';
import { useQueryPagination } from 'uikit/ReactTable/hooks';

import { TablePagination } from 'uikit';

import { tableData } from 'mock/table-data';

import { UserListColumn } from 'types';
import Container from 'components/Container';
import { usePaginatedQuery } from 'react-query';
import { Pagination } from 'uikit/ReactTable/types';
import { Box } from '@chakra-ui/core';
import Filter from './Filter';

export const columns: Array<Column<UserListColumn>> = [
  {
    Header: 'Логин',
    accessor: 'login',
  },
  {
    accessor: 'fio',
    Header: 'ФИО',
    width: 225,
  },
  {
    accessor: 'organization',
    Header: 'Тип',
    width: 180,
  },
  {
    Header: 'телефон',
    width: 200,
    accessor: 'phone',
  },
  {
    Header: 'Email',
    width: 200,
    accessor: 'email',
  },
  {
    Header: 'Округ',
    width: 150,
    accessor: 'okrug',
  },
  {
    Header: 'район',
    accessor: 'rayon',
  },
  {
    Header: 'Роль',
    width: 120,
    accessor: 'role',
  },
  {
    Header: 'Статус',
    accessor: 'status',
    Cell: ({ row: { original } }) => (
      <Box
        color={`${original.status === 'Заблокирована' ? 'red.500' : 'black'}`}
      >
        {original.status}
      </Box>
    ),
  },
  {
    Header: 'Коментарий',
    accessor: 'comment',
  },
];

const FilterTable = () => {
  const { pagination, onPaginationChange } = useQueryPagination({
    defaults: {
      sortDescending: false,
      sortType: 'fio',
    },
  });

  const rowsRequest = usePaginatedQuery(
    ['getUsers', pagination],
    (_prefix, p: Pagination) => {
      const result = {
        ...tableData,
        data: tableData.data.slice(
          p.pageNumber * p.pageSize,
          p.pageSize * (p.pageNumber + 1)
        ),
      };
      return result;
    },
    { cacheTime: 0 }
  );

  return (
    <>
      <Container flexDirection="column">
        <Filter />
        <TablePagination<UserListColumn>
          columns={columns}
          data={rowsRequest.resolvedData?.data || []}
          rowCount={rowsRequest.resolvedData?.totalCount || 2}
          pagination={pagination}
          onPaginationChange={onPaginationChange}
        />
      </Container>
    </>
  );
};

export default FilterTable;
