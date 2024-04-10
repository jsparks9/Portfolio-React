
import GitProfile from '../models/GitProfile';
import gitUsersClient, { gitUserApiResponse } from './SiteClient';

const username = "jsparks9";

export const apiGetUser = async (): Promise<gitUserApiResponse> => {
  const response = await gitUsersClient.get<GitProfile>(`${username}`);
  return { status: response.status, payload: response.data };
};

