import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';

import Login from 'src/components/login/Login';
import Search from 'src/components/search/Search';

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
      <Search />
    </div>
  );
};

export default Home;
