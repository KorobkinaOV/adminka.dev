import React, { useEffect } from 'react';
import { useTable, usePagination } from 'react-table';
import { TablePaginatedProps } from './types';
import Pagination from './Pagination';
import { TableSelectedRow } from './TableSelectedRow';

export const TablePagination = <D extends object>({
  columns,
  data,
  pagination,
  onPaginationChange,
  rowCount,
}: TablePaginatedProps<D>) => {
  const initialState = {
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
      initialState: initialState,
    },
    usePagination
  );

  const {
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, sortBy },
  } = tableInstance;

  useEffect(() => {
    if (onPaginationChange) {
      const sorted = sortBy && sortBy[0];
      onPaginationChange({
        pageSize,
        pageNumber: pageIndex,
        sortDescending: sorted ? sorted.desc : undefined,
        sortType: sorted ? sorted.id : undefined,
      });
    }
  }, [pageIndex, pageSize, sortBy, onPaginationChange]);

  return (
    <React.Fragment>
      <TableSelectedRow<D> columns={columns} data={data} />
      <Pagination
        nextPage={nextPage}
        previousPage={previousPage}
        setPageSize={setPageSize}
        pageIndex={pagination.pageNumber}
        pageSize={pageSize}
        dataCount={rowCount}
        onPaginationChange={onPaginationChange}
      />
    </React.Fragment>
  );
};
