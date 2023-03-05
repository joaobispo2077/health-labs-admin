import { ReactAdminFunctionalComponent } from "@src/@types/react-admin";
import {  Edit, SelectInput, SimpleForm, TextInput } from "react-admin";

export const ExamEditForm: ReactAdminFunctionalComponent = (props) => (
  <Edit  {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <SelectInput source="type" choices={[
        { id: 'imagem', name: 'imagem' },
        { id: 'analise-clinica', name: 'analise clinica' }
      ]} />
    </SimpleForm>
  </Edit >
);
