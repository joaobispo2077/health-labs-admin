import React from 'react';

import { List, Datagrid, TextField, EmailField } from 'react-admin';

type UserListProps = {
  id: number;
  name: string;
  email: string;
  username: string;
  address: {
    street: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
  };
};

export const UserList: React.FC<UserListProps> = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EmailField source="email" />
        <TextField source="address.street" />
        <TextField source="phone" />
        <TextField source="website" />
        <TextField source="company.name" />
      </Datagrid>
    </List>
  );
};
