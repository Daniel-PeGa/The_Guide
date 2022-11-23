import React from 'react';
import { useQuery } from '@apollo/client';
import ChurchList from '../components/ChurchList';
import ChurchForm from '../components/ChurchForm';

import { QUERY_CHURCH } from '../utils/queries';

const Home = () => {
 const { loading, data } = useQuery(QUERY_CHURCH);
const users = data?.users || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ChurchForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ChurchList
              users={users}
              title="Welcome to our fellowship! Here are some churches you can start visiting!"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
