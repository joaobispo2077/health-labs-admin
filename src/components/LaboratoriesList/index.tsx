import React from 'react';

import { List, Datagrid, TextField } from 'react-admin';

export enum LaboratoryStatus {
  ACTIVE = 'ativo',
  INACTIVE = 'inativo',
}

export interface LaboratoryProps {
  id: string;
  name: string;
  address: string;
  status: LaboratoryStatus;
}

export const LaboratoryList: React.FC<LaboratoryProps> = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="address" />
        <TextField source="status" />
      </Datagrid>
    </List>
  );
};
