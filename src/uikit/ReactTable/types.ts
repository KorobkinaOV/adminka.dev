import { Column } from 'react-table';

export type Pagination = {
  pageSize: number;
  pageNumber: number;
  sortDescending?: boolean | null;
  sortType?: string | null;
};

export type TablePaginatedProps<D extends object> = {
  rowCount: number;
  data: D[];
  columns: Column<D>[];
  onPaginationChange: (p: Pagination) => void;
  isLoading?: boolean;
  pagination: Pagination;
  onRowClick?: (row: D) => void;
};

export type TableProps<D extends object> = {
  data: D[];
  columns: Column<D>[];
};
