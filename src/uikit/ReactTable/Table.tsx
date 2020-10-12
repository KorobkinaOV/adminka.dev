import React from 'react';
import {
  useSortBy,
  useTable,
  useFlexLayout,
  usePagination,
  useRowSelect,
} from 'react-table';
import { Box, Checkbox, Flex, Text } from '@chakra-ui/core';
import { Scrollbar } from 'uikit';
import { Styles } from './styles';
import { TablePaginatedProps } from './types';
import { BodyCentered } from './components';
import Pagination from './Pagination';

const IndeterminateCheckbox = React.forwardRef<HTMLInputElement, any>(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef<HTMLInputElement>();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      // @ts-ignore
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <Checkbox
          ref={resolvedRef}
          isChecked={rest.checked}
          {...rest}
          style={{ borderColor: '#cbd3de', borderRadius: '5px' }}
        />
      </>
    );
  }
);

export const Table = ({ columns, data, pagination }: TablePaginatedProps) => {
  const i = {
    pageSize: pagination.pageSize,
    pageIndex: pagination.pageNumber,
    sortBy: pagination.sortType
      ? [{ id: pagination.sortType, desc: Boolean(pagination.sortDescending) }]
      : [],
  };

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: i,
    },
    useFlexLayout,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.allColumns.push((columns) => [
        {
          id: 'selection',
          width: 90,
          collapse: true,
          Header: ({ getToggleAllRowsSelectedProps }: any) => {
            return (
              <div>
                <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
              </div>
            );
          },
          Cell: ({ row }: any) => {
            return (
              <div>
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
              </div>
            );
          },
        },
        ...columns,
      ]);
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
  } = tableInstance;

  console.log('tableInstance', tableInstance);

  return (
    <React.Fragment>
      <Styles>
        <Scrollbar>
          <table
            {...getTableProps()}
            style={{
              borderSpacing: 0,
              width: '100%',
            }}
          >
            <thead>
              {headerGroups.map((headerGroup, index) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                  {headerGroup.headers.map((column, cIndex) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      key={cIndex}
                    >
                      {column.render('Header')}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? ' 🔽'
                            : ' 🔼'
                          : ''}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.length === 0 && (
                <Box height="80px" bg="white">
                  <BodyCentered mt="54px">
                    <Text position="absolute">Нет результатов</Text>
                  </BodyCentered>
                </Box>
              )}
              {page.map((row, rIndex) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={rIndex}>
                    {row.cells.map((cell, cIndex) => {
                      return (
                        <td {...cell.getCellProps()} key={cIndex}>
                          {cell.render('Cell')}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Scrollbar>
      </Styles>
      <Pagination
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageOptions={pageOptions}
        pageCount={pageCount}
        gotoPage={gotoPage}
        nextPage={nextPage}
        previousPage={previousPage}
        setPageSize={setPageSize}
        pageIndex={state.pageIndex}
        pageSize={state.pageSize}
        dataCount={page.length}
      />
    </React.Fragment>
  );
};
