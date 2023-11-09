export type TUserData = {
  name: string;
  avatarUrl: string;
  email: string;
  token: string;
}

export type TUserRegistrationData = {
  name: string;
  email: string;
  password: string;
  avatar: File;
}

export type TAuthData = {
  email: string;
  password: string;
}
