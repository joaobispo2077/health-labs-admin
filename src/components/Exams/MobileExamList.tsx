import { List, SimpleList } from "react-admin";
import {  ReactAdminFCList } from "../../@types/react-admin";
import { ExamModel } from "./Exam.model";

export const MobileExamList: ReactAdminFCList<ExamModel> = (props) => {
  return (
    <List {...props}>
      <SimpleList<ExamModel>
        primaryText={(record) => record.name}
        secondaryText={record => record.id}
        tertiaryText={record => record.type}
      />
    </List>
  );
}
