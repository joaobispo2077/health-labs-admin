import { ReactAdminFunctionalComponent } from "@src/@types/react-admin";
import { Create, SelectInput, SimpleForm, TextInput } from "react-admin";

export const ExamCreateForm: ReactAdminFunctionalComponent = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <SelectInput source="type" choices={[
        { id: 'imagem', name: 'imagem' },
        { id: 'analise-clinica', name: 'analise clinica' }
      ]} />
    </SimpleForm>
  </Create>
);
