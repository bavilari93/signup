/* useAuth Hook
   Manage the authentication flows in the mobile web
*/
import jwtDecode from "jwt-decode";
import {
  AUTH0_DEFAULT_CONNECTION,
  AUTH0_SCOPE,
  CLIENT_ID,
  auth0Api,
  auth0MFA,
} from "../modules";
import { useNavigate } from "react-router-dom";
import { setLocalStorage, getLocalStorage } from "common/helper/localstorage";
import { ACCESS_TOKEN, AUTH0_TOKEN_ID } from "common/constants/localstorage";
import { useAppDispatch } from "redux/store";
import { useAppSelector } from "redux/store";
import { configVars } from 'common/config/enviroment-variables';

import { formCredentialsModel, SignUpCredential } from "models/forms";
import { KeyPayload } from "models/modules";

const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    auth: { isLoading },
    user: { user },
  } = useAppSelector((state) => state);

  const resetUserSession = () => {
    localStorage.clear();
    logout();
  };
  //Generate auth0Token after signup
  const generateAuth0Token = async () => {
    //Parse hash on callback view
    if (window.location.hash) {
      return await auth0MFA.parseHash(
        { hash: window.location.hash },
        async function (err: any, authResult: any) {
          if (err) {
            navigate('/')
            return;
          }
          const { accessToken, idToken } = authResult || {};

          if (idToken) {
            setLocalStorage(AUTH0_TOKEN_ID, idToken);
          }
          if (accessToken) {
            await getAndSetAuthUser({ accessToken });
          }
        }
      );
    } else {
      resetUserSession();
      return false;
    }
  };
  
  const storeDataAndToken = ({
    accessToken
  }: {
    accessToken: string;
  }) => {
    setLocalStorage(ACCESS_TOKEN, accessToken);
  };

  const getAndSetAuthUser = async ({
    accessToken,
    formCredentials,
    isVerification = false,
  }: {
    accessToken: string;
    formCredentials?: SignUpCredential;
    isVerification?: boolean;
  }) => {
    //Set token on local storage and state for first time
    if (!isVerification)
      storeDataAndToken({ accessToken });
    //Get auth0 user data
    await auth0Api.client.userInfo(
      accessToken,
      async (error: any, _auth0UserData: any) => {
        if (error) {
        }
        //get user Auth0Id
        const { sub  } = _auth0UserData;
        const useData = { ...formCredentials };
        useData.external_id = sub;
      }
    );
  };

  const login = async (credentials: any) => {
    try {
      const { email, password } = credentials;

      await auth0MFA.crossOriginAuthentication.login(
        {
          username: email,
          password: password,
          audience: configVars.AUTH0_AUDIENCE_MFA,
          realm: AUTH0_DEFAULT_CONNECTION,
          scope: AUTH0_SCOPE,
        },
        async (err: any, authResult: any) => {
          if (err) {
            return;
          }
          if (authResult) {
            const { accessToken } = authResult || {};
            // Get Auth0 Use and Set on State
            await getAndSetAuthUser({ accessToken });
          }
        }
      );
    } catch (err: any) {
      resetUserSession();
      return;
    }
  };

  const createUser = async ({
    password,
    signUpData,
  }: {
    password: string;
    signUpData: formCredentialsModel;
  }) => {
    const { email } = signUpData;

    try {
      // First we create the user in auth0
      auth0MFA.signupAndAuthorize(
        {
          email: email,
          password: password,
          connection: AUTH0_DEFAULT_CONNECTION,
          scope: AUTH0_SCOPE,
        },
        async function (err: any, info: any) {
          //Display error occured on Auth0 signUp
          if (err) {
            return;
          }
          const { accessToken, idToken } = info || {};

          if (idToken) {
            setLocalStorage(AUTH0_TOKEN_ID, idToken);
          }
          if (accessToken) {
            await getAndSetAuthUser({
              accessToken,
              formCredentials: signUpData,
            });
          }
        }
      );
    } catch (err) {
      resetUserSession();
      return;
    }
  };

  const logout = () => {
    auth0Api.logout({
      returnTo: configVars.SITE_URL,
      clientID: CLIENT_ID,
    });
  };

  const getExpiryTime = (token: string) => {
    try {
      const decodedToken = jwtDecode<KeyPayload>(token);
      const { exp } = decodedToken || {};
      const expirationDate = new Date(exp * 1000);
      const today = new Date();
      const diffMs = expirationDate.getTime() - today.getTime();
      const diffMinutes = Math.round(((diffMs % 86400000) % 3600000) / 60000);
      return diffMinutes;
    } catch (err) {
      return 0;
    }
  };
  const refreshToken = async () => {
    await auth0MFA.checkSession(
      {
        audience: configVars.AUTH0_AUDIENCE_MFA,
        scope: AUTH0_SCOPE,
      },
      async function (err: any, authResult: any) {
        const { accessToken } = authResult || {};
        //update session
        if (accessToken) {
          setLocalStorage(ACCESS_TOKEN, accessToken);
        } else if (err) {
          clearInterval((window as any).countInterval);
          resetUserSession();
          return;
        }
      }
    );
  };

  const refreshSession = async () => {
    const token = getLocalStorage(ACCESS_TOKEN);
    const expiryTimeInMinutes = !token ? false : getExpiryTime(token);

    if (expiryTimeInMinutes && expiryTimeInMinutes <= 0) {
      // await refreshToken();
      resetUserSession();
    }
  };

  const checkSessionExpiration = async () => {
    const tokenId = getLocalStorage(AUTH0_TOKEN_ID);

    const expiryTimeInMinutes = !tokenId ? false : getExpiryTime(tokenId);
    if (tokenId && expiryTimeInMinutes <= 0) {
      resetUserSession();
    }
  };

  const resetPassword = async (email: string) => {
    auth0Api.changePassword(
      {
        connection: AUTH0_DEFAULT_CONNECTION,
        email: email,
      },
      function (err: any) {
        if (err) {
          //display modals
        } else {
          //display modals
        }
      }
    );
  };

  return {
    isLoading,
    login,
    createUser,
    generateAuth0Token,
    getAndSetAuthUser,
    refreshSession,
    checkSessionExpiration,
    resetUserSession,
    logout,
    resetPassword,
    refreshToken,
  };
};

export default useAuth;
