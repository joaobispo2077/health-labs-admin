import { ResourceProps } from 'react-admin';
import ExamIcon from '@mui/icons-material/Book';
import { ExamList } from '@src/pages/Exams/ExamList';
import { ExamCreateForm } from '@src/pages/Exams/ExamCreateForm';
import { ExamEditForm } from '@src/pages/Exams/ExamEditForm';
import { ExamDetails } from '@src/pages/Exams/ExamDetails';

export const ExamsResources: ResourceProps = {
  name: 'exams',
  icon: ExamIcon,
  list: ExamList,
  create: ExamCreateForm,
  edit: ExamEditForm,
  show: ExamDetails,
  options: { label: 'Exames' },
};
