import { signIn } from 'next-auth/react';

const useLogin = () => {
  const handleClickLogin = async () => {
    await signIn('github', {
      callbackUrl: process.env.LOGIN_PAGE,
    });
  };

  return { handleClickLogin };
};

export default useLogin;
