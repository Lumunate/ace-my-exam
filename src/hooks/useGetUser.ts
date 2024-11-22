import { User } from '@prisma/client';
import { useQuery } from 'react-query';

const fetchUser = async (email: string): Promise<User> => {
  const response = await fetch(`/api/auth/user?email=${email}`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();

  return data;
};

const useGetUser = (email: string) => {
  return useQuery<User, Error>(['user', email], () => fetchUser(email));
};

export default useGetUser;
