import useAuth from "@hooks/use-auth";

function useTokenHeader(): {Authorization: string} {
  const [{data: {accessToken}}] = useAuth();

  return {
    Authorization: `Bearer ${accessToken}`
  }
}

export default useTokenHeader