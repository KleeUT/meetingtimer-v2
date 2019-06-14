import { useGlobalState } from "../GlobalState";
import {
  UpdateAverageSalaryAction,
  UPDATE_AVERAGE_SALARY,
  UPDATE_PARTICIPANTS,
  UpdateParticipantsAction
} from "./actions";
export const useActionCreator = () => {
  const { dispatch } = useGlobalState();
  return {
    updateSalary: (newSalary: number) => {
      const action: UpdateAverageSalaryAction = {
        type: UPDATE_AVERAGE_SALARY,
        averageSalary: newSalary
      };
      dispatch(action);
    },
    updateParticipants: (newParticipants: number) => {
      const action: UpdateParticipantsAction = {
        type: UPDATE_PARTICIPANTS,
        participants: newParticipants
      };
      dispatch(action);
    }
  };
};
