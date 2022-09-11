import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Login from 'src/components/login/Login';

const Home: NextPage = () => {
  const { status } = useSession();

  if (status !== 'authenticated') {
    return (
      <div>
        <Login />
      </div>
    );
  }

  return (
    <div>
      Success
    </div>
  );
};

export default Home;
