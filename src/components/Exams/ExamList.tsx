import { ReactAdminFCList } from "../../@types/react-admin";
import { ExamModel } from "./Exam.model";
import { MobileExamList } from "./MobileExamList";

export const ExamList: ReactAdminFCList<ExamModel> = (props) => {
  return <MobileExamList {...props}/>;
}
