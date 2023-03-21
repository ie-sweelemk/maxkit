import { useEffect, useMemo } from "react";
import { useLocation, useNavigate, useNavigation } from "react-router";
import { authActions } from "features/auth/model";
import { useActionCreators, useAppDispatch } from "features/store";
import { supabase } from "shared/api";
import { appActions } from "./model";
import { getProfile } from "shared/api/model/profile";
import { routes } from "shared/constants";

type AuthProviderProps = {
  children: React.ReactElement;
}

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const auth = useActionCreators(authActions);
  const app = useActionCreators(appActions);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const authRoutes = useMemo(() => {
    return Object.values(routes.auth)
  }, [])

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        auth.setUser({
          id: session.user.id,
          email: session.user.email!,
        });
        if (!authRoutes.includes(location.pathname)) {
          navigate(`${location.pathname}${location.search}`);
        } else {
          navigate('/');
        }
        
        dispatch(getProfile(session.user.id)).unwrap().finally(() => {
          app.changeLoadingStatus(false);
        });
      } else {
        app.changeLoadingStatus(false);
      }
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      // console.log(session);
    });
  }, []);
  return (children)
}

export default AuthProvider;