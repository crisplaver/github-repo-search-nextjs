import React from 'react';

import useLogin from 'src/hooks/login/useLogin';

const Login = () => {
  const { handleClickLogin } = useLogin();

  return (
    <>
      <button type="button" onClick={handleClickLogin}>
        GitHub 로그인
      </button>
    </>
  );
}

export default Login;
