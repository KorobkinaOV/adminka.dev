import { Flex, FormControl, FormLabel, Input } from '@chakra-ui/core';
import React from 'react';
import { Select } from 'uikit';
import { StringParam, useQueryParams } from 'use-query-params';

const Filter = () => {
  const [filter, setFilter] = useQueryParams({
    find: StringParam,
    okrug: StringParam,
    rayon: StringParam,
    role: StringParam,
    status: StringParam,
  });

  return (
    <Flex
      width="full"
      justifyContent="left"
      flexDirection="column"
      px={8}
      mt={4}
    >
      <Input
        name="find"
        placeholder="Поиск по логину, ФИО, организации"
        w="400px!important"
        value={filter.find || ''}
        onChange={(e: any) => setFilter({ find: e.currentTarget.value })}
        border="none"
        boxShadow="sm"
        mb={4}
      />
      <Flex>
        <FormControl>
          <FormLabel htmlFor="okrug" fontWeight={400}>
            Округ
          </FormLabel>
          <Select
            name="okrug"
            w="200px"
            mr={6}
            options={[
              { value: 'okrug1', label: 'округ1' },
              { value: 'okrug2', label: 'округ2' },
            ]}
            value={filter.okrug || undefined}
            onChange={(e: any) => setFilter({ okrug: e.currentTarget.value })}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="rayon" fontWeight={400}>
            Район
          </FormLabel>
          <Select
            name="rayon"
            w="400px"
            mr={6}
            options={[
              { value: 'rayon1', label: 'rayon1' },
              { value: 'rayon2', label: 'rayon2' },
            ]}
            value={filter.rayon || undefined}
            onChange={(e: any) => setFilter({ rayon: e.currentTarget.value })}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="role" fontWeight={400}>
            Роль
          </FormLabel>
          <Select
            name="role"
            w="200px"
            mr={6}
            options={[
              { value: 'role1', label: 'role1' },
              { value: 'role2', label: 'role2' },
            ]}
            value={filter.role || undefined}
            onChange={(e: any) => setFilter({ role: e.currentTarget.value })}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="status" fontWeight={400}>
            Статус
          </FormLabel>
          <Select
            name="status"
            w="200px"
            mr={6}
            options={[
              { value: 'status1', label: 'status1' },
              { value: 'status2', label: 'status2' },
            ]}
            value={filter.status || undefined}
            onChange={(e: any) => setFilter({ status: e.currentTarget.value })}
          />
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default Filter;
