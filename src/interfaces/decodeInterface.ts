export interface IntDecode {
  data: {
    id: number;
    username: string;
    classe: string;
    level: number;
    password: string;
  }
  
}

export interface IntUserRequest extends Request {
  user: IntDecode
}