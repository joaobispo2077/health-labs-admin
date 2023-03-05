import { ReactAdminFunctionalComponent } from '@src/@types/react-admin/index';
import { Show, SimpleShowLayout, TextField } from 'react-admin';

export const ExamDetails: ReactAdminFunctionalComponent = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="type" />
    </SimpleShowLayout>
  </Show>
);
