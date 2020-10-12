import { useCallback } from 'react';
import {
  useQueryParams,
  withDefault,
  NumberParam,
  BooleanParam,
  StringParam,
} from 'use-query-params';

export const useQueryPagination = ({
  defaults,
}: {
  defaults?: { sortDescending?: boolean; sortType?: string };
} = {}) => {
  const [pagination, setPagination] = useQueryParams({
    pageSize: withDefault(NumberParam, 10),
    pageNumber: withDefault(NumberParam, 0),
    sortDescending: defaults?.sortDescending
      ? withDefault(BooleanParam, true)
      : BooleanParam,
    sortType: defaults?.sortType
      ? withDefault(StringParam, defaults?.sortType)
      : StringParam,
  });

  console.log('pagination', pagination);

  const resetPage = () => {
    setPagination({ pageNumber: 0 });
  };

  const onPaginationChange = useCallback((p: any) => setPagination(p), []);

  return {
    pagination,
    onPaginationChange,
    resetPage,
  };
};
