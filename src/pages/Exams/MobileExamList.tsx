import { List, SimpleList } from 'react-admin';
import { ExamModel } from './Exam.model';
import { ReactAdminFunctionalComponent } from '@src/@types/react-admin';

export const MobileExamList: ReactAdminFunctionalComponent<ExamModel> = (
  props,
) => {
  return (
    <List {...props}>
      <SimpleList<ExamModel>
        primaryText={(record) => record.name}
        secondaryText={(record) => record.id}
        tertiaryText={(record) => record.type}
      />
    </List>
  );
};
