export interface Profile {
  'iss': string;
  'iat': number;
  'exp': number;
  'at_hash': string;
  'aud': string;
  'sub': string;
  'email_verified': boolean;
  'azp': string;
  'hd'?: string;
  'email': string;
}
