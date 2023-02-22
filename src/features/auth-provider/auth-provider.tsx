import { useEffect } from "react";
import { useNavigate } from "react-router";
import { authActions } from "features/auth/model";
import { useActionCreators, useAppDispatch } from "features/store";
import { supabase } from "shared/api";
import { appActions } from "./model";
import { getProfile } from "shared/api/model/profile";

type AuthProviderProps = {
  children: React.ReactElement;
}

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const auth = useActionCreators(authActions);
  const app = useActionCreators(appActions);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        auth.setUser({
          id: session.user.id,
          email: session.user.email!,
        });
        navigate("/");
        dispatch(getProfile(session.user.id));
      }
      app.changeLoadingStatus(false);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      console.log(_event);
      // console.log(session);
    });
  }, []);
  return (children)
}

export default AuthProvider;