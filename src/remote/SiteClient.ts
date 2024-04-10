import axios from 'axios';

const gitUsersClient = axios.create({
  baseURL: 'https://api.github.com/users',
  headers: {
      'Content-Type': 'application/json',
  },
});

export interface gitUserApiResponse {
  status: number;
  payload: any;
}

export default gitUsersClient;