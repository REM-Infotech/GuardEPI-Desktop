interface UserInfo {
  id: number;
  login: string;
  name: string;
  email: string;
  is_admin: string;
}

interface AuthPayload {
  message: string;
  access_token: string;
  user: UserInfo;
}
