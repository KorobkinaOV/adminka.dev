import React, { useContext, useEffect } from 'react';
import { Checkbox, Icon } from '@chakra-ui/core';
import { Scrollbar } from 'uikit';
import { Styles } from './styles';
import {
  useSortBy,
  useTable,
  useFlexLayout,
  useRowSelect,
  CellProps,
} from 'react-table';
import { TableProps } from './types';
import { useSticky } from 'react-table-sticky';
import { HeaderBtnControllerContext } from 'providers';

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

export const TableSelectedRow = <D extends object>({
  columns,
  data,
}: TableProps<D>) => {
  const { setSelectedUsers } = useContext(HeaderBtnControllerContext);

  const table = useTable<D>(
    {
      columns,
      data,
    },
    useFlexLayout,
    useSortBy,
    useSticky,
    useRowSelect,
    (hooks) => {
      hooks.allColumns.push((columns) => [
        {
          id: 'selection',
          width: 90,
          collapse: true,
          Header: ({ getToggleAllRowsSelectedProps }) => {
            return (
              <div>
                <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
              </div>
            );
          },
          Cell: ({ row }: CellProps<D>) => {
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
    rows,
    selectedFlatRows,
  } = table;

  useEffect(() => {
    const ids: number[] | [] = selectedFlatRows.map(
      // @ts-ignore
      (item) => item.original.id || []
    );
    setSelectedUsers(ids);
  }, [selectedFlatRows, setSelectedUsers]);

  return (
    <Styles>
      <div {...getTableProps()} className="table sticky">
        <Scrollbar>
          <div className="header">
            {headerGroups.map((headerGroup, index) => (
              <div
                {...headerGroup.getHeaderGroupProps()}
                className="tr"
                key={index}
              >
                {headerGroup.headers.map((column, cIndex) => (
                  <div
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="th"
                    key={cIndex}
                  >
                    {column.render('Header')}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <Icon name="arrow-down" />
                        ) : (
                          <Icon name="arrow-up" />
                        )
                      ) : (
                        ''
                      )}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div {...getTableBodyProps()} className="body">
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <div {...row.getRowProps()} className="tr" key={index}>
                  {row.cells.map((cell, cIndex) => (
                    <div {...cell.getCellProps()} className="td" key={cIndex}>
                      {cell.render('Cell')}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </Scrollbar>
      </div>
    </Styles>
  );
};
