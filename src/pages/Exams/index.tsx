import { ResourceProps } from 'react-admin';
import ExamIcon from '@material-ui/icons/Book';
import { ExamList } from '@src/components/Exams/ExamList';
import { ExamCreateForm } from '@src/components/Exams/ExamCreateForm';
import { ExamEditForm } from '@src/components/Exams/ExamEditForm';
import { ExamDetails } from '@src/components/Exams/ExamDetails';

export const ExamsResources: ResourceProps = {
  name: 'exams',
  icon: ExamIcon,
  list: ExamList,
  create: ExamCreateForm,
  edit: ExamEditForm,
  show: ExamDetails,
  options: { label: 'Exames' },
};
