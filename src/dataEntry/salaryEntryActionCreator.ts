import { useGlobalState } from "../GlobalState";
import { AverageSalaryUpdatedAction, AVERAGE_SALARY_UPDATED } from "./actions";
export const useActionCreator = () => {
  const { dispatch } = useGlobalState();
  return {
    updateSalary: (newSalary: string) => {
      const action: AverageSalaryUpdatedAction = {
        type: AVERAGE_SALARY_UPDATED,
        averageSalary: Number(newSalary)
      };
      dispatch(action);
    }
  };
};
