export type Pagination = {
  pageSize: number;
  pageNumber: number;
  sortDescending?: boolean | null;
  sortType?: string | null;
};

export type TablePaginatedProps = {
  rowCount: number;
  data: any[];
  columns: any[];
  onPaginationChange?: (p: Pagination) => void;
  isLoading?: boolean;
  pagination: Pagination;
  onRowClick?: (row: any) => void;
};
