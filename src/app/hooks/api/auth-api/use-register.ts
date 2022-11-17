import axios from "axios";
import {API_BASE_URL} from "@service/constants/api.constant";
import useAuth from "@hooks/use-auth";
import {useEffect, useState} from "react";
import {AuthResponseData} from "@service/types/auth-slice.type";

interface RegisterData {
  firstName: string,
  lastName: string,
  email: string,
  password: string
}

interface RegisterSendParams {
  first_name: string,
  last_name: string,
  email: string,
  password: string,
}

const useRegister = () => {
  const [, setAuth] = useAuth();
  const [resData, setResData] = useState<AuthResponseData>({
    user: {},
    message: '',
    token: '',
    status: false,
  });

  useEffect(() => {
    setAuth({
      user: resData.user,
      tokenType: 'jwt',
      accessToken: resData.token
    });
  }, [resData]);

  const askForRegister = async (data: RegisterData) => {
    const editedData: RegisterSendParams = {
      ...data,
      first_name: data.firstName,
      last_name: data.lastName
    }

    try {
      const res = await axios.post(`${API_BASE_URL}/auth/register`, editedData);

      if (res.status === 200) {
        setResData(res.data);
      }
    } catch (e) {
      console.error('unsuccessful request.', e);
    }
  }

  const send = (data: RegisterData) => {
    askForRegister(data);
  }

  return [send];

}

export default useRegister