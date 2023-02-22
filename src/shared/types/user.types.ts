export type AuthUser = {
  id: string;
  email: string;
}

export type UserProfile = {
  id: string;
  name?: string;
  picture?: string;
  country?: string;
  city?: string;
  province?: string;
  bio?: string;
}