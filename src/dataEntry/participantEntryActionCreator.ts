import { useGlobalState } from "../GlobalState";
import { PARTICIPANTS_UPDATED, ParticipantsUpdatedAction } from "./actions";
export const useActionCreator = () => {
  const { dispatch } = useGlobalState();
  return {
    updateParticipants: (newParticipants: string) => {
      const action: ParticipantsUpdatedAction = {
        type: PARTICIPANTS_UPDATED,
        participants: Number(newParticipants)
      };
      dispatch(action);
    }
  };
};
