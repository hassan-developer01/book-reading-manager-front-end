export interface AuthDataType {
  accessToken: string | null,
  tokenType: string | null,
  user: any,
}

export interface AuthStateType {
  data: AuthDataType,
  hasToken: boolean
}