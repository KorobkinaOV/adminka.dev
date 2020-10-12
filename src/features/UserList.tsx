import React from 'react';
import { Column } from 'react-table';
import { useQueryPagination } from 'uikit/ReactTable/hooks';

import { Container, Table } from 'uikit';

type Data = {
  login: string;
  fio: string;
  organization: string;
  phone: string;
  email: string;
  okrug: string;
  rayon: string;
  role: string;
  status: string;
  comment: string;
};

const data = [
  {
    login: 'Log123',
    fio: 'Петров Петр Петрович',
    organization: 'ООО "Мастер-ПРО"',
    phone: '+7 (927) 115-57-88',
    email: 'chichichi@mail.ru',
    okrug: 'ЮЗАО',
    rayon: 'Конькво',
    role: 'Оператор',
    status: 'Активна',
    comment: 'Какой-то',
  },
  {
    login: 'Log123',
    fio: 'Иванов Иван Иванович',
    organization: 'ООО "Мастер-ПРО"',
    phone: '+7 (927) 115-57-88',
    email: 'chichichi@mail.ru',
    okrug: 'ЮЗАО',
    rayon: 'Конькво',
    role: 'Оператор',
    status: 'Активна',
    comment: 'Какой-то',
  },
];

export const columns: Array<Column<Data>> = [
  {
    Header: 'Логин',
    accessor: 'login',
    // Use a two-stage aggregator here to first
    // count the total rows being aggregated,
    // then sum any of those counts if they are
    // aggregated further
    // aggregate: 'count',
    // Aggregated: ({ value }) => `${value} Names`,
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
  },
  {
    Header: 'Коментарий',
    accessor: 'comment',
  },
];

const FilterTable = () => {
  const { pagination, onPaginationChange, resetPage } = useQueryPagination({
    defaults: {
      sortDescending: false,
      sortType: 'fio',
    },
  });

  return (
    <Table columns={columns} data={data} pagination={pagination} rowCount={2} />
  );
};

export default FilterTable;
