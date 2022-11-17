import axios, {AxiosResponse} from "axios";
import {API_BASE_URL} from "@service/constants/api.constant";
import {useEffect, useState} from "react";
import useAuth from "@hooks/use-auth";
import {AuthResponseData} from "@service/types/auth-slice.type";

type onSendLoginReq = (
  email: string,
  password: string,
  onSuccess?: (data: AuthResponseData) => void,
  onFail?: () => void
) => void;

type LoginHookOutput = () => [AuthResponseData, onSendLoginReq];

const useLogin: LoginHookOutput = () => {
  const [,setAuth] = useAuth();
  const [data, setData] = useState<AuthResponseData>({
    status: false,
    message: '',
    token: '',
    user: undefined,
  });

  useEffect(() => {
    if (data.status) {
      console.log('data changed', data);
      setAuth({
        user: data.user,
        tokenType: 'jwt',
        accessToken: data.token
      });
    }
  }, [data]);

  const askForLogin: onSendLoginReq = async (email, password, onSuccess = () => {}, onFail= () => {}) => {
    try {
      const res: AxiosResponse<AuthResponseData> = await axios.post(`${API_BASE_URL}/auth/login`, {
        email: email,
        password: password
      });

      setData(res.data);

      // onSuccess(res.data);
    } catch (e) {
      onFail();
    }

  }

  return [data, askForLogin.bind(null)];
}

export default useLogin