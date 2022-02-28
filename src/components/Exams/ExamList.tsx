import { ListGuesser } from "react-admin";
import { ReactAdminFCList } from "../../@types/react-admin";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { ExamModel } from "./Exam.model";
import { MobileExamList } from "./MobileExamList";

export const ExamList: ReactAdminFCList<ExamModel> = (props) => {
  const isSmallDevice = useMediaQuery(["(max-width: 600px)"], [true], false);

  if (isSmallDevice) {
    return <MobileExamList {...props} />;
  }

  return <ListGuesser {...props}/>;
}
