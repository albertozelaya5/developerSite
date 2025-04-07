import { onAuthenticated, onChecking, onLogin } from "@/features";
import { useDispatch } from "react-redux";

export const useLogin = () => {
  const dispatch = useDispatch();

  // const { user, status } = useSelector((state) => state.auth);

  const startLogin = async (payload) => {
    dispatch(onChecking());
    try {
      dispatch(onLogin(payload));
      dispatch(onAuthenticated());
    } catch (error) {
      console.log("error");
    }
  };

  return {
    startLogin,
  };
};
