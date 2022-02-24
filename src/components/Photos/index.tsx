import React from 'react';

import { List, Datagrid, TextField } from 'react-admin';

export interface PhotoListProps {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export function PhotoList(props: PhotoListProps) {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="albumId" />
        <TextField source="title" />
        <TextField source="url" />
        <TextField source="thumbnailUrl" />
      </Datagrid>
    </List>
  );
}
